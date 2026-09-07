// Pure helpers for the build-time SEO layer. No Node- or browser-only
// APIs are used here on purpose: the same code runs in the prerender
// script (Node) and in unit tests, and stays analysable by ESLint's
// browser config.

const CLUB_TYPE_LABELS = {
  scuba: 'Scuba diving',
  freediving: 'Freediving'
};

/**
 * Escape a value before it is interpolated into generated HTML.
 */
export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Turn a club name into a stable URL slug: lowercase ASCII letters,
 * digits and single hyphens. Names that produce nothing usable fall
 * back to `club-<id>` so a page always exists for every active club.
 */
export function slugify(name, clubId) {
  const slug = String(name ?? '')
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return slug || `club-${clubId}`;
}

export function clubSlug(club) {
  return slugify(club.name, club.club_id);
}

/**
 * Absolute URL of a club's prerendered page. Trailing slash included so
 * the URL, the canonical tag and the sitemap all agree (one URL per
 * resource, no duplicate-content variants).
 */
export function clubPageUrl(club, siteUrl) {
  return `${siteUrl.replace(/\/$/, '')}/clubs/${clubSlug(club)}/`;
}

export function clubTypeLabel(club) {
  return CLUB_TYPE_LABELS[club.club_type] ?? 'Diving';
}

/**
 * Unique, keyword-bearing <title> for a club page. One primary phrase
 * per page: "<club> — scuba diving club in <city>, Jeju Island".
 */
export function buildClubTitle(club) {
  const type = clubTypeLabel(club).toLowerCase();
  return `${club.name} — ${type} club in ${club.city}, Jeju Island`;
}

function formatKrw(amount) {
  return Number(amount).toLocaleString('en-US');
}

/**
 * Meta description for a club page. Built only from facts that exist, so
 * no page ships a sentence with a dangling "undefined".
 */
export function buildClubDescription(club) {
  const type = clubTypeLabel(club).toLowerCase();
  const parts = [
    `${club.name} is a ${type} club in ${club.city}, Jeju Island.`
  ];
  if (club.certifications) {
    parts.push(`Certifications: ${club.certifications}.`);
  }
  if (club.estimated_price_per_dive_krw) {
    parts.push(`Around ${formatKrw(club.estimated_price_per_dive_krw)} KRW per dive.`);
  }
  if (club.languages_spoken) {
    parts.push(`Spoken languages: ${club.languages_spoken}.`);
  }
  parts.push('Compare it with every other dive club on Jeju.');
  return parts.join(' ');
}

/**
 * Extract the mobile phone number from the packed contact_methods string
 * ("email:...;mobile_phone:+82-10-...") for JSON-LD.
 */
export function extractPhone(contactMethods) {
  const match = String(contactMethods ?? '').match(/mobile_phone:([^;]+)/);
  return match ? match[1].trim() : null;
}

/**
 * schema.org JSON-LD for a club page: LocalBusiness + SportsActivityLocation,
 * eligible for rich results. Returns an object, not a string.
 */
export function buildClubJsonLd(club, siteUrl) {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    name: club.name,
    url: clubPageUrl(club, siteUrl)
  };
  const sameAs = [club.website_url, club.naver_map_url].filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  const phone = extractPhone(club.contact_methods);
  if (phone) data.telephone = phone;

  if (club.full_address || club.city) {
    data.address = {
      '@type': 'PostalAddress',
      ...(club.full_address ? { streetAddress: club.full_address } : {}),
      ...(club.city ? { addressLocality: club.city } : {}),
      addressRegion: 'Jeju',
      addressCountry: 'KR'
    };
  }
  if (club.gps_lat != null && club.gps_lng != null) {
    data.geo = {
      '@type': 'GeoCoordinates',
      latitude: club.gps_lat,
      longitude: club.gps_lng
    };
  }
  if (club.estimated_price_per_dive_krw) {
    // Schema.org price range: rough band around the per-dive price.
    data.priceRange = `₩${formatKrw(club.estimated_price_per_dive_krw)}`;
  }
  return data;
}

/**
 * sitemap.xml for the home page plus every club page.
 * entries: [{ url, lastmod? }] with lastmod as 'YYYY-MM-DD'.
 */
export function buildSitemapXml(entries) {
  const urls = entries.map(entry => {
    const lastmod = entry.lastmod
      ? `\n    <lastmod>${escapeHtml(entry.lastmod)}</lastmod>`
      : '';
    return `  <url>\n    <loc>${escapeHtml(entry.url)}</loc>${lastmod}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls.join('\n')}\n` +
    `</urlset>\n`;
}

function factRow(label, value, { escape = true } = {}) {
  if (value == null || value === '') return '';
  return `      <dt>${escapeHtml(label)}</dt>\n      <dd>${escape ? escapeHtml(value) : value}</dd>\n`;
}

/**
 * Google Maps link from GPS coordinates (or the address as a fallback).
 * Complements the Naver map URL that Korean visitors expect.
 */
export function googleMapsUrl(club) {
  if (club.gps_lat != null && club.gps_lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${club.gps_lat},${club.gps_lng}`;
  }
  if (club.full_address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(club.full_address)}`;
  }
  return null;
}

/**
 * Link list HTML for the directory, PADI and SSI sections injected into
 * the home page. `clubs` are rows from v_club_dashboard; relative URLs
 * (e.g. /clubs/slug/) keep the page portable across preview domains.
 */
export function buildClubLinkListHtml(clubs) {
  return clubs
    .map(club => `      <li><a href="/clubs/${clubSlug(club)}/">${escapeHtml(club.name)}</a>` +
      (club.city ? ` <span class="club-city">— ${escapeHtml(club.city)}</span></li>` : '</li>'))
    .join('\n');
}

/**
 * Full standalone HTML page for one club. Styled with the app's own
 * dark theme so prerendered pages and the SPA feel like one product.
 */
export function buildClubPageHtml(club, siteUrl) {
  const title = buildClubTitle(club);
  const description = buildClubDescription(club);
  const canonical = clubPageUrl(club, siteUrl);
  const jsonLd = JSON.stringify(buildClubJsonLd(club, siteUrl)).replace(/</g, '\\u003c');
  const gmaps = googleMapsUrl(club);
  const price = club.estimated_price_per_dive_krw
    ? `${formatKrw(club.estimated_price_per_dive_krw)} KRW`
    : null;

  const type = clubTypeLabel(club);
  const facts = [
    factRow('Club type', type),
    factRow('City', club.city),
    factRow('Address', club.full_address),
    factRow('Certifications', club.certifications),
    factRow('Languages spoken', club.languages_spoken),
    factRow('Club size', club.size),
    factRow('Instructors', club.num_instructors),
    factRow('Years in operation', club.years_of_existence),
    factRow('Owns a boat', club.owns_boat ? 'Yes' : 'No'),
    factRow('Technical diving', club.tec_diving ? 'Yes' : 'No'),
    factRow('Price per dive', price)
  ].join('');

  const links = [
    club.website_url ? `<a href="${escapeHtml(club.website_url)}" rel="noopener noreferrer" target="_blank">Official website</a>` : '',
    club.naver_map_url ? `<a href="${escapeHtml(club.naver_map_url)}" rel="noopener noreferrer" target="_blank">Naver Map</a>` : '',
    gmaps ? `<a href="${escapeHtml(gmaps)}" rel="noopener noreferrer" target="_blank">Google Maps</a>` : ''
  ].filter(Boolean).join('\n      ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${escapeHtml(canonical)}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="business.business">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(canonical)}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">${jsonLd}</script>
<style>
:root{--bg:#0b1e2d;--surface:#0f2937;--border:#234;--text:#eaf3f7;--muted:#9db6c2;--accent:#4fd1c5;}
*{box-sizing:border-box;}
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:var(--bg);color:var(--text);margin:0;padding:24px;line-height:1.6;}
main{max-width:760px;margin:0 auto;}
a{color:var(--accent);}
.back{display:inline-block;margin-bottom:20px;font-size:14px;text-decoration:none;}
h1{color:var(--accent);font-size:26px;margin:0 0 4px;}
.subtitle{color:var(--muted);font-size:14px;margin:0 0 20px;}
dl{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:16px 20px;display:grid;grid-template-columns:auto 1fr;gap:6px 18px;font-size:14px;}
dt{color:var(--muted);}
dd{margin:0;}
.links{margin-top:16px;display:flex;flex-wrap:wrap;gap:12px;font-size:14px;}
footer{margin-top:28px;color:var(--muted);font-size:13px;}
</style>
</head>
<body>
<main>
  <a class="back" href="/">← Diving Jeju — compare every dive club on Jeju Island</a>
  <h1>${escapeHtml(club.name)}</h1>
  <p class="subtitle">${escapeHtml(type)} club · ${escapeHtml(club.city || 'Jeju Island')}</p>
  <dl>
${facts}  </dl>
  <div class="links">
      ${links}
  </div>
  <footer>Details on this page are generated from <a href="https://github.com/AntoineChalons/jeju-scuba-finder">the jeju-scuba-finder project</a>. Spotted an error? <a href="https://github.com/AntoineChalons/jeju-scuba-finder/issues/new" target="_blank" rel="noopener noreferrer">Suggest an edit on GitHub</a>.</footer>
</main>
</body>
</html>
`;
}
