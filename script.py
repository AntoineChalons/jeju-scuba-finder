
import sqlite3, os, json

os.makedirs('output', exist_ok=True)
db_path = 'output/dive_clubs.db'
if os.path.exists(db_path):
    os.remove(db_path)

conn = sqlite3.connect(db_path)
cur = conn.cursor()

cur.executescript('''
PRAGMA foreign_keys = ON;

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
''')
conn.commit()
print("schema created")
