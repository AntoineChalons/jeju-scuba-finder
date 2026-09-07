import { describe, it, expect } from 'vitest';
import {
  escapeHtml,
  slugify,
  clubSlug,
  clubPageUrl,
  buildClubTitle,
  buildClubDescription,
  buildClubJsonLd,
  buildSitemapXml,
  extractPhone,
  googleMapsUrl,
  buildClubLinkListHtml,
  buildClubPageHtml
} from './seo-utils.js';

// Same shape as a v_club_dashboard row; only the fields the SEO layer
// reads are filled.
const CLUB = {
  club_id: 7,
  name: 'BigBlue33 Diving Center',
  club_type: 'scuba',
  city: 'Seogwipo',
  full_address: '12-3, Seogwipo-si, Jeju-do',
  gps_lat: 33.24,
  gps_lng: 126.56,
  website_url: 'https://example.com',
  naver_map_url: 'https://naver.me/abc',
  size: 'medium',
  num_instructors: 5,
  years_of_existence: 12,
  owns_boat: 1,
  tec_diving: 0,
  estimated_price_per_dive_krw: 80000,
  languages_spoken: 'English, Korean',
  certifications: 'PADI, SSI',
  contact_methods: 'email:a@b.com;mobile_phone:+82-10-1234-5678',
  updated_at: '2026-09-03 02:16:46'
};

describe('escapeHtml', () => {
  it('escapes the five HTML-significant characters', () => {
    expect(escapeHtml('<a href="x">&\'')).toBe('&lt;a href=&quot;x&quot;&gt;&amp;&#39;');
  });
  it('tolerates null and undefined', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });
});

describe('slugify', () => {
  it('lowercases, hyphenates and strips punctuation', () => {
    expect(slugify('BigBlue33 Diving Center')).toBe('bigblue33-diving-center');
    expect(slugify('Mobydick Dive! (Seogwipo)')).toBe('mobydick-dive-seogwipo');
  });
  it('falls back to club-<id> when a name yields nothing', () => {
    expect(slugify('!!!', 42)).toBe('club-42');
    expect(slugify('', 42)).toBe('club-42');
  });
});

describe('clubSlug', () => {
  it('delegates to slugify with the club id as fallback', () => {
    expect(clubSlug({ club_id: 5, name: 'Sealife SCUBA Center' })).toBe('sealife-scuba-center');
    expect(clubSlug({ club_id: 5, name: '??' })).toBe('club-5');
  });
});

describe('clubPageUrl', () => {
  it('builds a canonical URL with a trailing slash', () => {
    expect(clubPageUrl(CLUB, 'https://divingjeju.com/')).toBe(
      'https://divingjeju.com/clubs/bigblue33-diving-center/'
    );
  });
});

describe('buildClubTitle', () => {
  it('targets the club + city + Jeju phrase for scuba clubs', () => {
    expect(buildClubTitle(CLUB)).toBe(
      'BigBlue33 Diving Center — scuba diving club in Seogwipo, Jeju Island'
    );
  });
  it('uses the freediving label for freediving clubs', () => {
    expect(buildClubTitle({ ...CLUB, club_type: 'freediving' })).toContain('freediving club');
  });
});

describe('buildClubDescription', () => {
  it('contains the facts a searcher compares', () => {
    const d = buildClubDescription(CLUB);
    expect(d).toContain('BigBlue33 Diving Center is a scuba diving club in Seogwipo');
    expect(d).toContain('PADI, SSI');
    expect(d).toContain('80,000 KRW');
    expect(d).toContain('English, Korean');
  });
  it('omits sentences whose facts are missing', () => {
    const d = buildClubDescription({
      club_id: 1, name: 'X', club_type: 'scuba', city: 'Jeju City'
    });
    expect(d).toBe('X is a scuba diving club in Jeju City, Jeju Island. Compare it with every other dive club on Jeju.');
  });
});

describe('buildClubJsonLd', () => {
  const ld = buildClubJsonLd(CLUB, 'https://divingjeju.com');
  it('types the club as LocalBusiness + SportsActivityLocation', () => {
    expect(ld['@type']).toEqual(['LocalBusiness', 'SportsActivityLocation']);
    expect(ld.name).toBe('BigBlue33 Diving Center');
  });
  it('includes address, geo, phone and sameAs when present', () => {
    expect(ld.address.addressLocality).toBe('Seogwipo');
    expect(ld.address.addressCountry).toBe('KR');
    expect(ld.geo.latitude).toBe(33.24);
    expect(ld.telephone).toBe('+82-10-1234-5678');
    expect(ld.sameAs).toEqual(['https://example.com', 'https://naver.me/abc']);
  });
  it('drops optional fields when absent', () => {
    const minimal = buildClubJsonLd(
      { club_id: 2, name: 'Y', club_type: 'scuba' }, 'https://divingjeju.com'
    );
    expect(minimal.address).toBeUndefined();
    expect(minimal.geo).toBeUndefined();
    expect(minimal.telephone).toBeUndefined();
    expect(minimal.sameAs).toBeUndefined();
  });
});

describe('extractPhone', () => {
  it('pulls mobile_phone out of the packed contact string', () => {
    expect(extractPhone('email:a@b.com;mobile_phone:+82-10-1;instagram:x')).toBe('+82-10-1');
  });
  it('returns null when there is no phone', () => {
    expect(extractPhone('email:a@b.com')).toBeNull();
    expect(extractPhone(null)).toBeNull();
  });
});

describe('googleMapsUrl', () => {
  it('prefers GPS coordinates', () => {
    expect(googleMapsUrl(CLUB)).toBe('https://www.google.com/maps/search/?api=1&query=33.24,126.56');
  });
  it('falls back to the address', () => {
    expect(googleMapsUrl({ full_address: 'Somewhere, Jeju' })).toContain(encodeURIComponent('Somewhere, Jeju'));
  });
  it('returns null with neither', () => {
    expect(googleMapsUrl({})).toBeNull();
  });
});

describe('buildSitemapXml', () => {
  it('emits one <url> per entry with optional lastmod', () => {
    const xml = buildSitemapXml([
      { url: 'https://divingjeju.com/' },
      { url: 'https://divingjeju.com/clubs/x/', lastmod: '2026-09-03' }
    ]);
    expect(xml).toContain('<loc>https://divingjeju.com/</loc>');
    expect(xml).toContain('<lastmod>2026-09-03</lastmod>');
    expect(xml.match(/<url>/g)).toHaveLength(2);
  });
  it('escapes URLs', () => {
    const xml = buildSitemapXml([{ url: 'https://x.com/a&b' }]);
    expect(xml).toContain('a&amp;b');
  });
});

describe('buildClubLinkListHtml', () => {
  it('links each club relatively with its city', () => {
    const html = buildClubLinkListHtml([CLUB]);
    expect(html).toContain('href="/clubs/bigblue33-diving-center/"');
    expect(html).toContain('BigBlue33 Diving Center');
    expect(html).toContain('Seogwipo');
  });
});

describe('buildClubPageHtml', () => {
  const page = buildClubPageHtml(CLUB, 'https://divingjeju.com');
  it('contains the club name as visible text, not just JSON-LD', () => {
    expect(page).toMatch(/<h1>BigBlue33 Diving Center<\/h1>/);
  });
  it('carries title, description, canonical and JSON-LD', () => {
    expect(page).toContain('<title>BigBlue33 Diving Center');
    expect(page).toContain('name="description"');
    expect(page).toContain('rel="canonical" href="https://divingjeju.com/clubs/bigblue33-diving-center/"');
    expect(page).toContain('application/ld+json');
  });
  it('escapes club data in the HTML body', () => {
    const evil = { ...CLUB, name: '<script>alert(1)</script>' };
    const html = buildClubPageHtml(evil, 'https://divingjeju.com');
    expect(html).not.toContain('<script>alert(1)');
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
  });
  it('shows the facts that exist and skips the ones that do not', () => {
    expect(page).toContain('PADI, SSI');
    expect(page).toContain('80,000 KRW');
    expect(page).not.toContain('Technical diving</dt>\n      <dd>Yes');
    const sparse = buildClubPageHtml(
      { club_id: 3, name: 'Z', club_type: 'freediving', city: 'Jeju City' },
      'https://divingjeju.com'
    );
    expect(sparse).toContain('<h1>Z</h1>');
  });
});
