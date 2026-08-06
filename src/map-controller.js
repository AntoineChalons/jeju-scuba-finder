import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// MapLibre GL JS + OpenFreeMap positron style — matches sibling project
// jeju-beach-finder (see issue #10). Free tiles, no API key required.

let map;
let onMarkerClickCallback = null;
const markerRefs = {};

const COLOR_DEFAULT_STROKE = '#7fd8f5';
const COLOR_DEFAULT_FILL = '#1b4b63';
const COLOR_SELECTED = '#4fd1c5';

function markerEl(isSelected) {
  const el = document.createElement('div');
  const size = isSelected ? 22 : 14;
  Object.assign(el.style, {
    width: size + 'px',
    height: size + 'px',
    borderRadius: '50%',
    background: isSelected ? COLOR_SELECTED : COLOR_DEFAULT_FILL,
    border: '2px solid ' + (isSelected ? COLOR_SELECTED : COLOR_DEFAULT_STROKE),
    boxShadow: '0 0 0 1px rgba(0,0,0,0.35)',
    cursor: 'pointer',
    boxSizing: 'border-box'
  });
  return el;
}

export function initMap() {
  map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/positron',
    center: [126.55, 33.35],
    zoom: 9.2,
    attributionControl: true
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
}

// Basic HTML-attribute escape for values interpolated inside href="" and text.
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

// The popup is deliberately minimal: the club detail drawer (issue #2) now
// carries the full record, so duplicating certs/languages/price here would
// just be two places to keep in sync. What stays is exactly what issue #13
// requires — the club identified over the map, with the name linking out to
// its Naver Map page (falling back to the website when Naver is missing).
function popupHtml(c) {
  const titleHref = c.naver_map_url || c.website_url || null;
  const titleHtml = titleHref
    ? `<a class="popup-title popup-title-link" href="${esc(titleHref)}" target="_blank" rel="noopener noreferrer">${esc(c.name)}</a>`
    : `<div class="popup-title">${esc(c.name)}</div>`;
  return `
    ${titleHtml}
    <div class="popup-row">${esc(c.city)}</div>
  `;
}

export function renderMap(list, selectedClubId, onMarkerClick) {
  onMarkerClickCallback = onMarkerClick;

  // Remove previous markers before re-rendering.
  Object.values(markerRefs).forEach(entry => entry.marker.remove());
  Object.keys(markerRefs).forEach(k => delete markerRefs[k]);

  const bounds = new maplibregl.LngLatBounds();
  let plotted = 0;

  for (const c of list) {
    if (c.gps_lat == null || c.gps_lng == null) continue;
    const isSelected = c.club_id === selectedClubId;
    const el = markerEl(isSelected);
    const popup = new maplibregl.Popup({ offset: 14, maxWidth: '260px' }).setHTML(popupHtml(c));
    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([c.gps_lng, c.gps_lat])
      .setPopup(popup)
      .addTo(map);
    el.addEventListener('click', () => {
      if (onMarkerClickCallback) onMarkerClickCallback(c.club_id);
    });
    markerRefs[c.club_id] = { marker, popup };
    // Re-open the popup for the currently-selected club so a row click,
    // marker click, filter change or locale switch always ends up with the
    // selected club's details visible over the map (issue #13). Use
    // marker.togglePopup() rather than popup.addTo(map): the popup is
    // already bound to the marker via setPopup(), and toggle is the
    // documented way to open a bound popup — popup.addTo(map) is unreliable
    // for bound popups in MapLibre.
    if (isSelected) marker.togglePopup();
    bounds.extend([c.gps_lng, c.gps_lat]);
    plotted++;
  }

  if (plotted > 0) {
    // Defer to next frame so the map has current size when style is still loading.
    const applyFit = () => map.fitBounds(bounds, { padding: 40, maxZoom: 13, duration: 400 });
    if (map.loaded()) applyFit();
    else map.once('load', applyFit);
  }
}

export function focusMarker(clubId) {
  const entry = markerRefs[clubId];
  if (!entry) return;
  const lngLat = entry.marker.getLngLat();
  map.easeTo({ center: lngLat, duration: 400 });
  // renderMap() already opens the popup for the selected club during its
  // pass. focusMarker() only needs to ensure it is open in the (rare) case
  // where the state change reaches focusMarker before renderMap.
  if (!entry.popup.isOpen()) entry.marker.togglePopup();
}
