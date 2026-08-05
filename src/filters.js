// Filtering logic, kept separate from rendering and from the state store
// itself so it stays a pure, testable function of (clubs, filters).

/** Split a comma-joined "A, B, C" field into a trimmed array. */
function splitList(value) {
  if (!value) return [];
  return value.split(',').map(s => s.trim()).filter(Boolean);
}

/** Distinct sorted values for a comma-joined field across all clubs. */
function distinctFromList(clubs, field) {
  const set = new Set();
  for (const c of clubs) {
    for (const v of splitList(c[field])) set.add(v);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** Distinct sorted values for a plain scalar field across all clubs. */
function distinctScalar(clubs, field) {
  const set = new Set();
  for (const c of clubs) {
    if (c[field] != null && c[field] !== '') set.add(c[field]);
  }
  return [...set].sort((a, b) => String(a).localeCompare(String(b)));
}

/**
 * Compute the option lists for each filter control from the full,
 * unfiltered club list. Called once the data loads (and again if the
 * dataset is ever refreshed at runtime).
 */
export function buildFilterOptions(clubs) {
  return {
    certification: distinctFromList(clubs, 'certifications'),
    size: distinctScalar(clubs, 'size'),
    language: distinctFromList(clubs, 'languages_spoken')
  };
}

/** Apply the active filters to the full club list, returning a new array. */
export function applyFilters(clubs, filters) {
  return clubs.filter(c => {
    if (filters.certification !== 'all' &&
        !splitList(c.certifications).includes(filters.certification)) {
      return false;
    }
    if (filters.size !== 'all' && c.size !== filters.size) {
      return false;
    }
    if (filters.language !== 'all' &&
        !splitList(c.languages_spoken).includes(filters.language)) {
      return false;
    }
    if (filters.maxPrice != null) {
      // Clubs with unknown pricing are excluded once a price cap is set,
      // since we can't confirm they satisfy the constraint.
      if (c.estimated_price_per_dive_krw == null) return false;
      if (c.estimated_price_per_dive_krw > filters.maxPrice) return false;
    }
    return true;
  });
}
