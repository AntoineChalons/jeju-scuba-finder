export function boolBadge(v) {
  if (v === 1 || v === true) return '<span class="badge-true">Yes</span>';
  if (v === 0 || v === false) return '<span class="badge-false">No</span>';
  return '-';
}
