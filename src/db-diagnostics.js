export function buildDbStatusReport(clubs) {
  const totalCount = clubs.length;
  const mappable = clubs.filter(c => c.gps_lat != null && c.gps_lng != null);
  const unmappable = clubs.filter(c => c.gps_lat == null || c.gps_lng == null);

  let statusHtml = `[DB] rows_loaded=${totalCount} | mappable=${mappable.length} | unmappable=${unmappable.length}`;

  if (unmappable.length > 0) {
    const lines = unmappable.map(c =>
      `  - id=${c.club_id} name="${c.name}" url=${c.website_url || 'N/A'}`
    ).join('<br>');
    statusHtml += `<br><span style="color:#e05c5c">[WARN] ${unmappable.length} club(s) missing gps_lat/gps_lng:</span><br>${lines}`;
  }

  return statusHtml;
}
