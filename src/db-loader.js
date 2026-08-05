import initSqlJs from 'sql.js';
import sqlWasmUrl from 'sql.js/dist/sql-wasm.wasm?url';

export async function loadClubsFromDb(dbPath = 'dive_clubs.db') {
  const SQL = await initSqlJs({
    locateFile: () => sqlWasmUrl
  });
  const resp = await fetch(dbPath);
  const buf = await resp.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));
  const res = db.exec('SELECT * FROM v_club_dashboard');

  if (!res.length) return [];

  const cols = res[0].columns;
  return res[0].values.map(row => {
    const obj = {};
    cols.forEach((c, i) => obj[c] = row[i]);
    return obj;
  });
}
