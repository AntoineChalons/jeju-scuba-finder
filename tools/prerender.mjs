// Build-time prerender step (issue #25) + SEO assembly (#26, #27).
//
// Runs after `vite build` as part of `npm run build`:
//   1. downloads the published dive_clubs.db artifact,
//   2. emits one static HTML page per active club under dist/clubs/<slug>/,
//   3. fills the PADI / SSI / all-clubs sections inside dist/index.html,
//   4. writes dist/sitemap.xml,
//   5. injects the Cloudflare Web Analytics beacon and the search-console
//      verification meta tags when their tokens are configured.
//
// The SPA stays the interactive entry point at "/". These pages exist so
// that crawlers see the club catalogue as real HTML — Google renders JS
// inconsistently and Naver largely does not (issue #25).
//
// Environment variables:
//   DIVE_DATABASE_URL          source of the SQLite artifact
//   SITE_URL                   canonical origin (default https://divingjeju.com)
//   CF_WEB_ANALYTICS_TOKEN     Cloudflare Web Analytics beacon token
//   GOOGLE_SITE_VERIFICATION   Google Search Console meta content
//   NAVER_SITE_VERIFICATION    Naver Search Advisor meta content
//   BING_SITE_VERIFICATION     Bing Webmaster Tools meta content

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import initSqlJs from 'sql.js';
import {
  clubSlug,
  clubPageUrl,
  buildClubPageHtml,
  buildClubLinkListHtml,
  buildSitemapXml
} from '../src/seo/seo-utils.js';

const DEFAULT_DATABASE_URL =
  'https://antoinechalons.github.io/public-data/dive_clubs.db';

const SITE_URL = (process.env.SITE_URL || 'https://divingjeju.com').replace(/\/$/, '');
const DIST_DIR = path.resolve(process.cwd(), 'dist');

function rows(db, sql) {
  const res = db.exec(sql);
  if (!res.length) return [];
  const cols = res[0].columns;
  return res[0].values.map(row => {
    const obj = {};
    cols.forEach((c, i) => (obj[c] = row[i]));
    return obj;
  });
}

function hasCertification(club, name) {
  return new RegExp(`\\b${name}\\b`).test(club.certifications || '');
}

function lastmodDate(club) {
  return (club.updated_at || '').slice(0, 10) || null;
}

// Head tags injected into every generated page: search-console
// verification metas and the Cloudflare Web Analytics beacon (issue #27).
// Empty when no tokens are configured, so local and CI builds ship no
// tracking at all.
function buildHeadTags() {
  const metas = [
    ['google-site-verification', process.env.GOOGLE_SITE_VERIFICATION],
    ['naver-site-verification', process.env.NAVER_SITE_VERIFICATION],
    ['msvalidate.01', process.env.BING_SITE_VERIFICATION]
  ];
  let tags = metas
    .filter(([, content]) => content)
    .map(([name, content]) => `<meta name="${name}" content="${content}">\n`)
    .join('');
  if (process.env.CF_WEB_ANALYTICS_TOKEN) {
    // Cookieless, privacy-first: deferred beacon, no consent banner needed.
    tags += `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" ` +
      `data-cf-beacon='{"token": "${process.env.CF_WEB_ANALYTICS_TOKEN}"}'></script>\n`;
  }
  return tags;
}

async function main() {
  const dbUrl = process.env.DIVE_DATABASE_URL || DEFAULT_DATABASE_URL;
  console.log(`[prerender] database: ${dbUrl}`);
  const resp = await fetch(dbUrl, { cache: 'no-store' });
  if (!resp.ok) {
    throw new Error(`Cannot load database: HTTP ${resp.status}`);
  }
  const SQL = await initSqlJs();
  const db = new SQL.Database(new Uint8Array(await resp.arrayBuffer()));

  const clubs = rows(db, 'SELECT * FROM v_club_dashboard WHERE active = 1');
  if (!clubs.length) {
    throw new Error('No active clubs found — refusing to publish an empty catalogue');
  }
  console.log(`[prerender] ${clubs.length} active clubs`);
  const headTags = buildHeadTags();

  // 1. One static page per club.
  for (const club of clubs) {
    const dir = path.join(DIST_DIR, 'clubs', clubSlug(club));
    await mkdir(dir, { recursive: true });
    let page = buildClubPageHtml(club, SITE_URL);
    if (headTags) {
      page = page.replace('</head>', () => `${headTags}</head>`);
    }
    await writeFile(path.join(dir, 'index.html'), page);
  }

  // 2. Fill the crawler-visible sections inside the built home page and
  //    append analytics + verification tags to <head>.
  const indexPath = path.join(DIST_DIR, 'index.html');
  let indexHtml = await readFile(indexPath, 'utf8');
  const replacements = [
    ['<ul id="seo-padi-list" class="club-list"></ul>', 'seo-padi-list',
      clubs.filter(c => hasCertification(c, 'PADI'))],
    ['<ul id="seo-ssi-list" class="club-list"></ul>', 'seo-ssi-list',
      clubs.filter(c => hasCertification(c, 'SSI'))],
    ['<ul id="seo-directory-list" class="club-list"></ul>', 'seo-directory-list',
      clubs]
  ];
  for (const [marker, listId, listClubs] of replacements) {
    if (!indexHtml.includes(marker)) {
      throw new Error(`Marker ${marker} missing from built index.html`);
    }
    const listHtml = `<ul id="${listId}" class="club-list">\n${buildClubLinkListHtml(listClubs)}\n  </ul>`;
    indexHtml = indexHtml.replace(marker, () => listHtml);
  }
  const extraHead = headTags;
  if (extraHead) {
    indexHtml = indexHtml.replace('</head>', () => `${extraHead}</head>`);
  }
  await writeFile(indexPath, indexHtml);

  // 3. Sitemap: home page plus every club page.
  const sitemap = buildSitemapXml([
    { url: `${SITE_URL}/` },
    ...clubs.map(club => ({
      url: clubPageUrl(club, SITE_URL),
      lastmod: lastmodDate(club)
    }))
  ]);
  await writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemap);

  console.log(`[prerender] wrote ${clubs.length} club pages, sitemap.xml, ` +
    `home-page sections${process.env.CF_WEB_ANALYTICS_TOKEN ? ', analytics beacon' : ''}`);
  db.close();
}

main().catch(err => {
  console.error('[prerender] FAILED:', err);
  process.exit(1);
});
