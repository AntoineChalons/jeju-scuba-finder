"""
SQLite schema definition and connection helper shared by import_csv.py
and export_csv.py. Kept in one place so the schema used to regenerate
`public/dive_clubs.db` never drifts from what the frontend expects.
"""

import sqlite3

SCHEMA_SQL = """
CREATE TABLE clubs (
    club_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    full_address TEXT,
    gps_lat REAL,
    gps_lng REAL,
    website_url TEXT,
    naver_map_url TEXT,
    size TEXT CHECK(size IN ('small','medium','large')),
    num_instructors INTEGER,
    years_of_existence INTEGER,
    owns_boat BOOLEAN,
    tec_diving BOOLEAN,
    freediving BOOLEAN,
    estimated_price_per_dive_krw INTEGER,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE contact_methods (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    club_id INTEGER NOT NULL REFERENCES clubs(club_id) ON DELETE CASCADE,
    contact_type TEXT CHECK(contact_type IN ('email','whatsapp','kakaotalk','mobile_phone')) NOT NULL,
    contact_value TEXT NOT NULL,
    UNIQUE(club_id, contact_type, contact_value)
);

CREATE TABLE languages (
    language_id INTEGER PRIMARY KEY AUTOINCREMENT,
    language_name TEXT UNIQUE NOT NULL
);

CREATE TABLE club_languages (
    club_id INTEGER NOT NULL REFERENCES clubs(club_id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES languages(language_id) ON DELETE CASCADE,
    PRIMARY KEY (club_id, language_id)
);

CREATE TABLE certifications (
    certification_id INTEGER PRIMARY KEY AUTOINCREMENT,
    certification_name TEXT UNIQUE NOT NULL
);

CREATE TABLE club_certifications (
    club_id INTEGER NOT NULL REFERENCES clubs(club_id) ON DELETE CASCADE,
    certification_id INTEGER NOT NULL REFERENCES certifications(certification_id) ON DELETE CASCADE,
    PRIMARY KEY (club_id, certification_id)
);

CREATE TABLE feedback_sources (
    source_id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_name TEXT UNIQUE NOT NULL
);

CREATE TABLE club_feedback (
    feedback_id INTEGER PRIMARY KEY AUTOINCREMENT,
    club_id INTEGER NOT NULL REFERENCES clubs(club_id) ON DELETE CASCADE,
    source_id INTEGER NOT NULL REFERENCES feedback_sources(source_id),
    rating REAL,
    review_count INTEGER,
    url TEXT,
    last_checked TEXT,
    UNIQUE(club_id, source_id)
);

CREATE VIEW v_club_dashboard AS
SELECT
    c.club_id,
    c.name,
    c.city,
    c.full_address,
    c.gps_lat,
    c.gps_lng,
    c.website_url,
    c.naver_map_url,
    c.size,
    c.num_instructors,
    c.years_of_existence,
    c.owns_boat,
    c.tec_diving,
    c.freediving,
    c.estimated_price_per_dive_krw,
    (SELECT GROUP_CONCAT(l.language_name, ', ') FROM club_languages cl JOIN languages l ON l.language_id=cl.language_id WHERE cl.club_id=c.club_id) AS languages_spoken,
    (SELECT GROUP_CONCAT(cert.certification_name, ', ') FROM club_certifications cc JOIN certifications cert ON cert.certification_id=cc.certification_id WHERE cc.club_id=c.club_id) AS certifications,
    (SELECT AVG(rating) FROM club_feedback f WHERE f.club_id=c.club_id) AS avg_rating,
    (SELECT SUM(review_count) FROM club_feedback f WHERE f.club_id=c.club_id) AS total_reviews
FROM clubs c;
"""


def create_schema(conn: sqlite3.Connection) -> None:
    conn.executescript(SCHEMA_SQL)


def connect(db_path: str) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA foreign_keys = ON")
    conn.row_factory = sqlite3.Row
    return conn


def get_or_create_language(conn: sqlite3.Connection, name: str) -> int:
    name = name.strip()
    row = conn.execute(
        "SELECT language_id FROM languages WHERE language_name = ?", (name,)
    ).fetchone()
    if row:
        return row["language_id"]
    cur = conn.execute(
        "INSERT INTO languages (language_name) VALUES (?)", (name,)
    )
    return cur.lastrowid


def get_or_create_certification(conn: sqlite3.Connection, name: str) -> int:
    name = name.strip()
    row = conn.execute(
        "SELECT certification_id FROM certifications WHERE certification_name = ?",
        (name,),
    ).fetchone()
    if row:
        return row["certification_id"]
    cur = conn.execute(
        "INSERT INTO certifications (certification_name) VALUES (?)", (name,)
    )
    return cur.lastrowid


def get_or_create_feedback_source(conn: sqlite3.Connection, name: str) -> int:
    name = name.strip()
    row = conn.execute(
        "SELECT source_id FROM feedback_sources WHERE source_name = ?", (name,)
    ).fetchone()
    if row:
        return row["source_id"]
    cur = conn.execute(
        "INSERT INTO feedback_sources (source_name) VALUES (?)", (name,)
    )
    return cur.lastrowid
