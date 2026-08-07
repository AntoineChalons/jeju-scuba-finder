import initSqlJs from 'sql.js';
import sqlWasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import { groupFeedback } from './feedback.js';

function rows(db, sql) {
  const res = db.exec(sql);
  if (!res.length) return [];
  const cols = res[0].columns;
  return res[0].values.map(row => {
    const obj = {};
    cols.forEach((c, i) => obj[c] = row[i]);
    return obj;
  });
}

export async function loadClubsFromDb(dbPath = 'dive_clubs.db') {
  const SQL = await initSqlJs({
    locateFile: () => sqlWasmUrl
  });
  const resp = await fetch(dbPath);
  const buf = await resp.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));
  // Clubs believed to be out of business are kept in the database (so their
  // ids stay stable and the research trail is preserved) but are never shown
  // in the UI — see issue #14. Filtering here rather than in each view means
  // the map, table, filter options and result counts are all consistent by
  // construction: nothing downstream ever sees an inactive club.
  const clubs = rows(db, 'SELECT * FROM v_club_dashboard WHERE active = 1');

  // Feedback for the drawer (issue #17). Platform rows and local-diver
  // quotes are attached to each club here rather than queried on drawer
  // open: the whole database is already in memory, and attaching keeps the
  // render pipeline's "views only ever see club objects" contract intact.
  const feedbackByClub = groupFeedback(
    rows(db, `SELECT cf.club_id, fs.source_name AS source, cf.rating,
                     cf.review_count, cf.url, cf.summary, cf.lang, cf.last_checked
              FROM club_feedback cf
              JOIN feedback_sources fs ON fs.source_id = cf.source_id
              WHERE fs.source_kind = 'platform'`),
    rows(db, `SELECT quote_id, club_id, quote, author_alias, quoted_at, lang
              FROM diver_quotes`)
  );
  for (const club of clubs) {
    club.feedback = feedbackByClub.get(club.club_id) || null;
  }
  return clubs;
}
