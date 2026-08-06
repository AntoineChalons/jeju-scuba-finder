import initSqlJs from 'sql.js';
import sqlWasmUrl from 'sql.js/dist/sql-wasm.wasm?url';

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
  const res = db.exec('SELECT * FROM v_club_dashboard WHERE active = 1');

  if (!res.length) return [];

  const cols = res[0].columns;
  return res[0].values.map(row => {
    const obj = {};
    cols.forEach((c, i) => obj[c] = row[i]);
    return obj;
  });
}
