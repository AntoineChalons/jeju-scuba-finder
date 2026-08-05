import L from 'leaflet';

let map, markersLayer;
const markerRefs = {};

export function initMap() {
  map = L.map('map', { scrollWheelZoom: true }).setView([33.35, 126.55], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
}

function popupHtml(c) {
  return `
    <div class="popup-title">${c.name}</div>
    <div class="popup-row">${c.city}${c.full_address ? ' — ' + c.full_address : ''}</div>
    <div class="popup-row">Certs: ${c.certifications || '-'}</div>
    <div class="popup-row">Languages: ${c.languages_spoken || '-'}</div>
    <div class="popup-row">Price/dive: ${c.estimated_price_per_dive_krw ? c.estimated_price_per_dive_krw.toLocaleString() + ' KRW' : '-'}</div>
    ${c.website_url ? `<div class="popup-row"><a href="${c.website_url}" target="_blank" rel="noopener noreferrer">Website</a></div>` : ''}
  `;
}

export function renderMap(list, selectedClubId, onMarkerClick) {
  markersLayer.clearLayers();
  Object.keys(markerRefs).forEach(k => delete markerRefs[k]);
  const bounds = [];

  for (const c of list) {
    if (c.gps_lat == null || c.gps_lng == null) continue;
    const marker = L.circleMarker([c.gps_lat, c.gps_lng], {
      radius: c.club_id === selectedClubId ? 11 : 7,
      color: c.club_id === selectedClubId ? '#4fd1c5' : '#7fd8f5',
      fillColor: c.club_id === selectedClubId ? '#4fd1c5' : '#1b4b63',
      fillOpacity: 0.9,
      weight: 2
    }).bindPopup(popupHtml(c));
    marker.on('click', () => onMarkerClick(c.club_id));
    marker.addTo(markersLayer);
    markerRefs[c.club_id] = marker;
    bounds.push([c.gps_lat, c.gps_lng]);
  }

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
  }
}

export function focusMarker(clubId) {
  const marker = markerRefs[clubId];
  if (marker) {
    map.panTo(marker.getLatLng());
    marker.openPopup();
  }
}
