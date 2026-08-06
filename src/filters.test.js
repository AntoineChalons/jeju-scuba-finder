import { describe, it, expect } from 'vitest';
import { applyFilters, buildFilterOptions } from './filters.js';

// Miniature fixture. Small on purpose: the tests are documentation of
// each filter branch, not a snapshot of the real dataset.
const CLUBS = [
  {
    club_id: 1,
    name: 'Alpha Divers',
    size: 'small',
    certifications: 'PADI',
    languages_spoken: 'English, Korean',
    estimated_price_per_dive_krw: 60000,
    owns_boat: 1,
    tec_diving: 0,
    freediving: 1,
  },
  {
    club_id: 2,
    name: 'Beta Dive',
    size: 'large',
    certifications: 'PADI, SSI',
    languages_spoken: 'Korean',
    estimated_price_per_dive_krw: 90000,
    owns_boat: 1,
    tec_diving: 1,
    freediving: 0,
  },
  {
    club_id: 3,
    name: 'Gamma Club',
    size: 'medium',
    certifications: 'NAUI',
    languages_spoken: '',
    estimated_price_per_dive_krw: null,
    owns_boat: null,
    tec_diving: null,
    freediving: null,
  },
];

const ALL = {
  certification: 'all',
  size: 'all',
  language: 'all',
  maxPrice: null,
  ownsBoat: false,
  tecDiving: false,
  freediving: false,
};

describe('applyFilters', () => {
  it("returns every club when every filter is 'all' and no price cap", () => {
    expect(applyFilters(CLUBS, ALL)).toHaveLength(3);
  });

  it('filters by certification against the comma-joined list', () => {
    const rows = applyFilters(CLUBS, { ...ALL, certification: 'SSI' });
    expect(rows.map(c => c.name)).toEqual(['Beta Dive']);
  });

  it('filters by size against the scalar field', () => {
    const rows = applyFilters(CLUBS, { ...ALL, size: 'small' });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers']);
  });

  it('filters by language against the comma-joined list', () => {
    const rows = applyFilters(CLUBS, { ...ALL, language: 'English' });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers']);
  });

  it('excludes clubs with unknown price when a price cap is set', () => {
    // Gamma has no price. With a cap it must be dropped even though
    // "unknown" could in principle be below the cap.
    const rows = applyFilters(CLUBS, { ...ALL, maxPrice: 100000 });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers', 'Beta Dive']);
  });

  it('drops clubs above the price cap', () => {
    const rows = applyFilters(CLUBS, { ...ALL, maxPrice: 70000 });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers']);
  });

  it('keeps clubs exactly at the price cap', () => {
    const rows = applyFilters(CLUBS, { ...ALL, maxPrice: 60000 });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers']);
  });

  it('combines filters with AND semantics', () => {
    const rows = applyFilters(CLUBS, {
      certification: 'PADI',
      size: 'all',
      language: 'Korean',
      maxPrice: null,
    });
    expect(rows.map(c => c.name)).toEqual(['Alpha Divers', 'Beta Dive']);
  });

  it('returns an empty array when nothing matches, not undefined', () => {
    const rows = applyFilters(CLUBS, { ...ALL, certification: 'GUE' });
    expect(rows).toEqual([]);
  });

  it('handles an empty club list without throwing', () => {
    expect(applyFilters([], ALL)).toEqual([]);
  });

  it('treats blank language cells as no languages, not as a match', () => {
    // Gamma's languages_spoken is an empty string. Filtering by any
    // specific language must not return it.
    const rows = applyFilters(CLUBS, { ...ALL, language: 'Korean' });
    expect(rows.map(c => c.name).includes('Gamma Club')).toBe(false);
  });

  describe('capability checkboxes (#22)', () => {
    it('ownsBoat=true keeps only clubs with owns_boat === 1', () => {
      const rows = applyFilters(CLUBS, { ...ALL, ownsBoat: true });
      expect(rows.map(c => c.name)).toEqual(['Alpha Divers', 'Beta Dive']);
    });

    it('ownsBoat=true excludes clubs with unknown owns_boat', () => {
      // Gamma has null owns_boat; same rule as maxPrice - unknown is
      // not the same as "satisfies the filter".
      const rows = applyFilters(CLUBS, { ...ALL, ownsBoat: true });
      expect(rows.some(c => c.name === 'Gamma Club')).toBe(false);
    });

    it('tecDiving=true keeps only clubs with tec_diving === 1', () => {
      const rows = applyFilters(CLUBS, { ...ALL, tecDiving: true });
      expect(rows.map(c => c.name)).toEqual(['Beta Dive']);
    });

    it('freediving=true keeps only clubs with freediving === 1', () => {
      const rows = applyFilters(CLUBS, { ...ALL, freediving: true });
      expect(rows.map(c => c.name)).toEqual(['Alpha Divers']);
    });

    it('multiple capability checkboxes AND together', () => {
      const rows = applyFilters(CLUBS, { ...ALL, ownsBoat: true, tecDiving: true });
      expect(rows.map(c => c.name)).toEqual(['Beta Dive']);
    });

    it('unchecked capability filters do not affect results', () => {
      // ownsBoat=false must behave identically to omitting the filter -
      // the whole point of the checkbox default is "don't filter on this".
      const rows = applyFilters(CLUBS, { ...ALL, ownsBoat: false });
      expect(rows).toHaveLength(3);
    });

    it('excludes rows explicitly marked 0, not just null', () => {
      // Alpha has tec_diving: 0. Filtering by tecDiving must drop it.
      const rows = applyFilters(CLUBS, { ...ALL, tecDiving: true });
      expect(rows.some(c => c.name === 'Alpha Divers')).toBe(false);
    });
  });
});

describe('buildFilterOptions', () => {
  it('splits comma-joined certifications into distinct sorted values', () => {
    const opts = buildFilterOptions(CLUBS);
    expect(opts.certification).toEqual(['NAUI', 'PADI', 'SSI']);
  });

  it('collects scalar sizes distinctly and sorted', () => {
    const opts = buildFilterOptions(CLUBS);
    expect(opts.size).toEqual(['large', 'medium', 'small']);
  });

  it('splits comma-joined languages, deduplicates across clubs', () => {
    const opts = buildFilterOptions(CLUBS);
    expect(opts.language).toEqual(['English', 'Korean']);
  });

  it('drops empty language cells rather than emitting empty strings', () => {
    const opts = buildFilterOptions(CLUBS);
    expect(opts.language.every(v => v.length > 0)).toBe(true);
  });

  it('returns empty option lists for an empty input', () => {
    expect(buildFilterOptions([])).toEqual({
      certification: [],
      size: [],
      language: [],
    });
  });
});
