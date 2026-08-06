#!/usr/bin/env python3
"""
Import club data from the canonical CSV format into a fresh SQLite
database, ready to drop into public/dive_clubs.db.

The import always regenerates the database from scratch (drops and
recreates every table) rather than upserting into an existing file.
This keeps the CSV as the single source of truth: what's in the CSV is
exactly what ends up in the database, with no leftover rows from a
previous version lingering behind.

Usage:
    python tools/import_csv.py data/clubs.csv public/dive_clubs.db
    python tools/import_csv.py data/clubs.csv public/dive_clubs.db --dry-run

Exit codes:
    0  success
    1  validation errors (see printed report, nothing written)
    2  usage error
"""

import argparse
import csv
import os
import sys

import db
from validate import ValidationError, validate_rows


def import_rows(conn, rows):
    for row in rows:
        cur = conn.execute(
            """
            INSERT INTO clubs (
                name, city, full_address, gps_lat, gps_lng,
                website_url, naver_map_url, size, num_instructors,
                years_of_existence, owns_boat, tec_diving, freediving,
                estimated_price_per_dive_krw
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                row["name"],
                row["city"],
                row["full_address"],
                row["gps_lat"],
                row["gps_lng"],
                row["website_url"],
                row["naver_map_url"],
                row["size"],
                row["num_instructors"],
                row["years_of_existence"],
                row["owns_boat"],
                row["tec_diving"],
                row["freediving"],
                row["estimated_price_per_dive_krw"],
            ),
        )
        club_id = cur.lastrowid

        for lang_name in row["languages_spoken"]:
            lang_id = db.get_or_create_language(conn, lang_name)
            conn.execute(
                "INSERT OR IGNORE INTO club_languages (club_id, language_id) VALUES (?, ?)",
                (club_id, lang_id),
            )

        for cert_name in row["certifications"]:
            cert_id = db.get_or_create_certification(conn, cert_name)
            conn.execute(
                "INSERT OR IGNORE INTO club_certifications (club_id, certification_id) VALUES (?, ?)",
                (club_id, cert_id),
            )

        for ctype, value in row["contact_methods"]:
            conn.execute(
                "INSERT OR IGNORE INTO contact_methods (club_id, contact_type, contact_value) VALUES (?, ?, ?)",
                (club_id, ctype, value),
            )

        for source_name, rating, review_count, url in row["feedback"]:
            source_id = db.get_or_create_feedback_source(conn, source_name)
            conn.execute(
                """
                INSERT OR IGNORE INTO club_feedback (club_id, source_id, rating, review_count, url)
                VALUES (?, ?, ?, ?, ?)
                """,
                (club_id, source_id, rating, review_count, url),
            )


def main():
    parser = argparse.ArgumentParser(description="Import canonical CSV club data into a fresh SQLite database.")
    parser.add_argument("csv_path", help="Path to the input CSV file")
    parser.add_argument("db_path", help="Path to the output SQLite database (overwritten)")
    parser.add_argument("--dry-run", action="store_true", help="Validate only; do not write the database")
    args = parser.parse_args()

    if not os.path.isfile(args.csv_path):
        print(f"error: CSV file not found: {args.csv_path}")
        sys.exit(2)

    with open(args.csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        raw_rows = list(reader)

    if not raw_rows:
        print("error: CSV file has no data rows")
        sys.exit(1)

    try:
        rows = validate_rows(raw_rows)
    except ValidationError as e:
        print(f"INVALID: {e}")
        for err in e.errors:
            print(f"  - {err}")
        sys.exit(1)

    print(f"Validated {len(rows)} row(s), no errors.")

    if args.dry_run:
        print("Dry run: database not written.")
        sys.exit(0)

    if os.path.exists(args.db_path):
        os.remove(args.db_path)

    conn = db.connect(args.db_path)
    try:
        db.create_schema(conn)
        import_rows(conn, rows)
        conn.commit()
    except Exception:
        conn.rollback()
        conn.close()
        if os.path.exists(args.db_path):
            os.remove(args.db_path)
        raise
    else:
        conn.close()

    print(f"Wrote {len(rows)} club(s) to {args.db_path}")


if __name__ == "__main__":
    main()
