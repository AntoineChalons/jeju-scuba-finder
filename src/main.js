import { loadClubsFromDb } from './db-loader.js';
import { buildDbStatusReport } from './db-diagnostics.js';
import { initMap, renderMap, focusMarker } from './map-controller.js';
import { sortClubs, renderTable, renderTableHeaders, updateSortArrows, bindSortHandlers } from './table-controller.js';
import { getState, setState, setFilter, subscribe } from './state.js';
import { buildFilterOptions, applyFilters } from './filters.js';
import { renderFilterLabels, renderFilterOptions, syncFilterControls, updateFilterSummary, bindFilterHandlers } from './filter-bar.js';
import { getInitialLocale, setLocale, t } from './i18n/i18n.js';
import { renderLanguageSwitcher, bindLanguageSwitcher } from './i18n/language-switcher.js';

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

function onLocaleChange(locale) {
  setLocale(locale);
  setState({ locale });
}

/**
 * Apply every static (non-data-dependent) translated string: page title,
 * headers, filter bar labels, footer, language switcher. Called on init
 * and whenever the locale changes.
 */
function renderStaticText(state) {
  document.title = t('title');
  document.documentElement.lang = state.locale;
  document.getElementById('page-title').textContent = t('title');
  document.getElementById('page-subtitle').textContent = t('subtitle');
  document.getElementById('footer-prompt').textContent = t('footer.prompt');
  document.getElementById('footer-link').textContent = t('footer.link');
  // The #status element is used for the developer diagnostics banner,
  // gated behind ?debug=1 (see db-diagnostics.js). In non-debug mode
  // buildDbStatusReport() returns '', so we don't render the transient
  // "Loading\u2026" text either—the header row alone is enough for users.
  const statusEl = document.getElementById('status');
  if (state.clubs.length) {
    statusEl.innerHTML = buildDbStatusReport(state.clubs);
    renderFilterOptions(buildFilterOptions(state.clubs));
    // Rebuilding the <select> options above resets the DOM selection, so
    // restore it from state immediately (independent of the main render
    // pipeline, which only fires on setState()).
    syncFilterControls(state.filters);
    updateFilterSummary(applyFilters(state.clubs, state.filters).length, state.clubs.length);
  } else {
    const debugReport = buildDbStatusReport(state.clubs);
    statusEl.innerHTML = debugReport || '';
    if (!debugReport) statusEl.textContent = '';
    else statusEl.textContent = t('loading');
  }
  renderTableHeaders();
  renderFilterLabels();
  renderLanguageSwitcher();
}

/**
 * Single render pipeline: derive the filtered + sorted list from state,
 * then let every view react. Every state mutation funnels through here via
 * the subscribe() callback below, so views never fall out of sync with
 * each other or with the filters/locale.
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
  const locale = getInitialLocale();
  setLocale(locale);
  setState({ locale });

  renderStaticText(getState());
  bindLanguageSwitcher((newLocale) => {
    onLocaleChange(newLocale);
    renderStaticText(getState());
    render(getState());
  });

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
    document.getElementById('status').textContent = t('errorLoading', { error: err });
    console.error(err);
  }
}

init();
