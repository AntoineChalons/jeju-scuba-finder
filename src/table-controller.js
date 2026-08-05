import { t } from './i18n/i18n.js';

export function sortClubs(clubs, sortKey, sortAsc) {
  return [...clubs].sort((a, b) => {
    let av = a[sortKey], bv = b[sortKey];
    if (av == null) av = typeof bv === 'number' ? -Infinity : '';
    if (bv == null) bv = typeof av === 'number' ? -Infinity : '';
    if (typeof av === 'string') av = av.toLowerCase();
    if (typeof bv === 'string') bv = bv.toLowerCase();
    if (av < bv) return sortAsc ? -1 : 1;
    if (av > bv) return sortAsc ? 1 : -1;
    return 0;
  });
}

function boolBadge(v) {
  if (v === 1 || v === true) return `<span class="badge-true">${t('table.yes')}</span>`;
  if (v === 0 || v === false) return `<span class="badge-false">${t('table.no')}</span>`;
  return t('table.emptyValue');
}

/** Re-render the fixed table header labels for the active locale. */
export function renderTableHeaders() {
  const keyToI18n = {
    name: 'table.name',
    city: 'table.city',
    size: 'table.size',
    num_instructors: 'table.instructors',
    years_of_existence: 'table.years',
    languages_spoken: 'table.languages',
    certifications: 'table.certs',
    owns_boat: 'table.boat',
    tec_diving: 'table.tec',
    freediving: 'table.free',
    estimated_price_per_dive_krw: 'table.price',
    avg_rating: 'table.rating',
    website_url: 'table.website',
    naver_map_url: 'table.naverMap'
  };
  document.querySelectorAll('#clubTable th').forEach(th => {
    const i18nKey = keyToI18n[th.dataset.key];
    if (i18nKey) th.textContent = t(i18nKey);
  });
}

export function renderTable(sortedClubs, selectedClubId, onRowClick) {
  const tbody = document.querySelector('#clubTable tbody');
  const empty = t('table.emptyValue');
  tbody.innerHTML = '';

  for (const c of sortedClubs) {
    const tr = document.createElement('tr');
    if (c.club_id === selectedClubId) tr.classList.add('selected-row');
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.city}</td>
      <td>${c.size || empty}</td>
      <td>${c.num_instructors ?? empty}</td>
      <td>${c.years_of_existence ?? empty}</td>
      <td>${c.languages_spoken || empty}</td>
      <td>${c.certifications || empty}</td>
      <td>${boolBadge(c.owns_boat)}</td>
      <td>${boolBadge(c.tec_diving)}</td>
      <td>${boolBadge(c.freediving)}</td>
      <td>${c.estimated_price_per_dive_krw ? c.estimated_price_per_dive_krw.toLocaleString() : empty}</td>
      <td>${c.avg_rating ?? empty}</td>
      <td>${c.website_url ? `<a href="${c.website_url}" target="_blank" rel="noopener noreferrer">${t('table.link')}</a>` : empty}</td>
      <td>${c.naver_map_url ? `<a href="${c.naver_map_url}" target="_blank" rel="noopener noreferrer">${t('table.map')}</a>` : empty}</td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      onRowClick(c.club_id);
    });
    tbody.appendChild(tr);
  }
}

export function updateSortArrows(sortKey, sortAsc) {
  document.querySelectorAll('#clubTable th').forEach(th => {
    th.innerHTML = th.textContent.replace(/\s*[▲▼]$/, '');
    if (th.dataset.key === sortKey) {
      th.innerHTML += `<span class="arrow">${sortAsc ? '▲' : '▼'}</span>`;
    }
  });
}

export function bindSortHandlers(onSortChange) {
  document.querySelectorAll('#clubTable th').forEach(th => {
    th.addEventListener('click', () => onSortChange(th.dataset.key));
  });
}
