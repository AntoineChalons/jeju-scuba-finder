import 'leaflet/dist/leaflet.css';
import { loadClubsFromDb } from './db-loader.js';
import { buildDbStatusReport } from './db-diagnostics.js';
import { initMap, renderMap, focusMarker } from './map-controller.js';
import { sortClubs, renderTable, updateSortArrows, bindSortHandlers } from './table-controller.js';

let clubs = [];
let sortKey = 'name';
let sortAsc = true;
let selectedClubId = null;

function render() {
  const sorted = sortClubs(clubs, sortKey, sortAsc);
  renderTable(sorted, selectedClubId, selectClub);
  updateSortArrows(sortKey, sortAsc);
  renderMap(sorted, selectedClubId, selectClub);
}

function selectClub(clubId) {
  selectedClubId = (selectedClubId === clubId) ? null : clubId;
  render();
  if (selectedClubId != null) focusMarker(selectedClubId);
}

function onSortChange(key) {
  if (sortKey === key) {
    sortAsc = !sortAsc;
  } else {
    sortKey = key;
    sortAsc = true;
  }
  render();
}

async function init() {
  initMap();
  bindSortHandlers(onSortChange);

  try {
    clubs = await loadClubsFromDb(`${import.meta.env.BASE_URL}dive_clubs.db`);
    document.getElementById('status').innerHTML = buildDbStatusReport(clubs);
    render();
  } catch (err) {
    document.getElementById('status').textContent = 'Error loading database: ' + err;
    console.error(err);
  }
}

init();
