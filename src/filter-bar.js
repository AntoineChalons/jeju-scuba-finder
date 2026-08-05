// Renders and wires the filter bar. Options are populated once from the
// full dataset; user interaction only updates the shared state store via
// setFilter(), never touches clubs/table/map rendering directly.

function optionsHtml(values, allLabel) {
  const opts = [`<option value="all">${allLabel}</option>`];
  for (const v of values) {
    opts.push(`<option value="${v}">${v}</option>`);
  }
  return opts.join('');
}

/** Populate the <select> elements once the club dataset has loaded. */
export function renderFilterOptions(options) {
  document.getElementById('filter-certification').innerHTML =
    optionsHtml(options.certification, 'All certifications');
  document.getElementById('filter-size').innerHTML =
    optionsHtml(options.size, 'All sizes');
  document.getElementById('filter-language').innerHTML =
    optionsHtml(options.language, 'All languages');
}

/** Reflect the current filters onto the controls (used on state changes). */
export function syncFilterControls(filters) {
  document.getElementById('filter-certification').value = filters.certification;
  document.getElementById('filter-size').value = filters.size;
  document.getElementById('filter-language').value = filters.language;
  document.getElementById('filter-max-price').value = filters.maxPrice ?? '';
}

/** Show how many clubs matched vs. the total, and enable/disable reset. */
export function updateFilterSummary(filteredCount, totalCount) {
  const el = document.getElementById('filter-summary');
  el.textContent = filteredCount === totalCount
    ? `Showing all ${totalCount} clubs`
    : `Showing ${filteredCount} of ${totalCount} clubs`;

  document.getElementById('filter-reset').disabled = filteredCount === totalCount &&
    isDefaultFilterUi();
}

function isDefaultFilterUi() {
  return document.getElementById('filter-certification').value === 'all' &&
    document.getElementById('filter-size').value === 'all' &&
    document.getElementById('filter-language').value === 'all' &&
    document.getElementById('filter-max-price').value === '';
}

/**
 * Wire user interaction on the filter bar to a single callback:
 * onChange(key, value). Keeps this module free of any dependency on the
 * state store, so it stays easy to test/reuse.
 */
export function bindFilterHandlers(onChange, onReset) {
  document.getElementById('filter-certification')
    .addEventListener('change', e => onChange('certification', e.target.value));
  document.getElementById('filter-size')
    .addEventListener('change', e => onChange('size', e.target.value));
  document.getElementById('filter-language')
    .addEventListener('change', e => onChange('language', e.target.value));
  document.getElementById('filter-max-price')
    .addEventListener('input', e => {
      const val = e.target.value;
      onChange('maxPrice', val === '' ? null : Number(val));
    });
  document.getElementById('filter-reset').addEventListener('click', onReset);
}
