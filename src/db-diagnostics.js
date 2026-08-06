import { t } from './i18n/i18n.js';

// The DB diagnostics banner (row counts + list of clubs missing GPS) is a
// developer aid, not intended for end users. It is only rendered when the
// page URL carries `?debug=1` (or `?debug=true`). Anything else — no query
// string, `?debug=0`, unrelated params — returns an empty string so the
// #status element stays blank in production.
function isDebugEnabled() {
  if (typeof window === 'undefined') return false;
  const value = new URLSearchParams(window.location.search).get('debug');
  return value === '1' || value === 'true';
}

export function buildDbStatusReport(clubs) {
  if (!isDebugEnabled()) return '';

  const totalCount = clubs.length;
  const mappable = clubs.filter(c => c.gps_lat != null && c.gps_lng != null);
  const unmappable = clubs.filter(c => c.gps_lat == null || c.gps_lng == null);

  let statusHtml = t('dbStatus', {
    total: totalCount,
    mappable: mappable.length,
    unmappable: unmappable.length
  });

  if (unmappable.length > 0) {
    const lines = unmappable.map(c =>
      `  - id=${c.club_id} name="${c.name}" url=${c.website_url || 'N/A'}`
    ).join('<br>');
    statusHtml += `<br><span style="color:#e05c5c">[WARN] ${t('dbWarnUnmappable', { count: unmappable.length })}</span><br>${lines}`;
  }

  return statusHtml;
}
