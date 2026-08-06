import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { t } from './i18n/i18n.js';

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

function popupHtml(c) {
  const empty = t('popup.emptyValue');
  return `
    <div class="popup-title">${c.name}</div>
    <div class="popup-row">${c.city}${c.full_address ? ' — ' + c.full_address : ''}</div>
    <div class="popup-row">${t('popup.certs')}: ${c.certifications || empty}</div>
    <div class="popup-row">${t('popup.languages')}: ${c.languages_spoken || empty}</div>
    <div class="popup-row">${t('popup.price')}: ${c.estimated_price_per_dive_krw ? c.estimated_price_per_dive_krw.toLocaleString() + ' KRW' : empty}</div>
    ${c.website_url ? `<div class="popup-row"><a href="${c.website_url}" target="_blank" rel="noopener noreferrer">${t('popup.website')}</a></div>` : ''}
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
  entry.popup.addTo(map);
}
