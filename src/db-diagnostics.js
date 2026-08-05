import { t } from './i18n/i18n.js';

export function buildDbStatusReport(clubs) {
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
