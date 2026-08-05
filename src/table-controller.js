import { boolBadge } from './utils.js';

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

export function renderTable(sortedClubs, selectedClubId, onRowClick) {
  const tbody = document.querySelector('#clubTable tbody');
  tbody.innerHTML = '';

  for (const c of sortedClubs) {
    const tr = document.createElement('tr');
    if (c.club_id === selectedClubId) tr.classList.add('selected-row');
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.city}</td>
      <td>${c.size || '-'}</td>
      <td>${c.num_instructors ?? '-'}</td>
      <td>${c.years_of_existence ?? '-'}</td>
      <td>${c.languages_spoken || '-'}</td>
      <td>${c.certifications || '-'}</td>
      <td>${boolBadge(c.owns_boat)}</td>
      <td>${boolBadge(c.tec_diving)}</td>
      <td>${boolBadge(c.freediving)}</td>
      <td>${c.estimated_price_per_dive_krw ? c.estimated_price_per_dive_krw.toLocaleString() : '-'}</td>
      <td>${c.avg_rating ?? '-'}</td>
      <td>${c.website_url ? `<a href="${c.website_url}" target="_blank" rel="noopener noreferrer">link</a>` : '-'}</td>
      <td>${c.naver_map_url ? `<a href="${c.naver_map_url}" target="_blank" rel="noopener noreferrer">map</a>` : '-'}</td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      onRowClick(c.club_id);
    });
    tbody.appendChild(tr);
  }
}

export function updateSortArrows(sortKey, sortAsc) {
  document.querySelectorAll('th').forEach(th => {
    th.innerHTML = th.textContent.replace(/\s*[▲▼]$/, '');
    if (th.dataset.key === sortKey) {
      th.innerHTML += `<span class="arrow">${sortAsc ? '▲' : '▼'}</span>`;
    }
  });
}

export function bindSortHandlers(onSortChange) {
  document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => onSortChange(th.dataset.key));
  });
}
