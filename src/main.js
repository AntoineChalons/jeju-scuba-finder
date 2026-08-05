import 'leaflet/dist/leaflet.css';
import { loadClubsFromDb } from './db-loader.js';
import { buildDbStatusReport } from './db-diagnostics.js';
import { initMap, renderMap, focusMarker } from './map-controller.js';
import { sortClubs, renderTable, updateSortArrows, bindSortHandlers } from './table-controller.js';
import { getState, setState, setFilter, subscribe } from './state.js';
import { buildFilterOptions, applyFilters } from './filters.js';
import { renderFilterOptions, syncFilterControls, updateFilterSummary, bindFilterHandlers } from './filter-bar.js';

const DEFAULT_FILTERS = { certification: 'all', size: 'all', language: 'all', maxPrice: null };

function selectClub(clubId) {
  const { selectedClubId } = getState();
  setState({ selectedClubId: selectedClubId === clubId ? null : clubId });
  const next = getState().selectedClubId;
  if (next != null) focusMarker(next);
}

function onSortChange(key) {
  const { sortKey, sortAsc } = getState();
  setState(sortKey === key
    ? { sortAsc: !sortAsc }
    : { sortKey: key, sortAsc: true });
}

function onFilterChange(key, value) {
  setFilter(key, value);
}

function onFilterReset() {
  setState({ filters: { ...DEFAULT_FILTERS } });
}

/**
 * Single render pipeline: derive the filtered + sorted list from state,
 * then let every view react. Every state mutation funnels through here via
 * the subscribe() callback below, so views never fall out of sync with
 * each other or with the filters.
 */
function render(state) {
  const filtered = applyFilters(state.clubs, state.filters);
  const sorted = sortClubs(filtered, state.sortKey, state.sortAsc);

  renderTable(sorted, state.selectedClubId, selectClub);
  updateSortArrows(state.sortKey, state.sortAsc);
  renderMap(sorted, state.selectedClubId, selectClub);

  syncFilterControls(state.filters);
  updateFilterSummary(filtered.length, state.clubs.length);
}

async function init() {
  initMap();
  bindSortHandlers(onSortChange);
  bindFilterHandlers(onFilterChange, onFilterReset);
  subscribe(render);

  try {
    const clubs = await loadClubsFromDb(`${import.meta.env.BASE_URL}dive_clubs.db`);
    document.getElementById('status').innerHTML = buildDbStatusReport(clubs);
    renderFilterOptions(buildFilterOptions(clubs));
    setState({ clubs });
  } catch (err) {
    document.getElementById('status').textContent = 'Error loading database: ' + err;
    console.error(err);
  }
}

init();
