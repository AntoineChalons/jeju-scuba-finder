#!/usr/bin/env python3
"""
Import club data from the canonical CSV format into a fresh SQLite
database, ready to drop into public/dive_clubs.db.

The import always regenerates the database from scratch (drops and
recreates every table) rather than upserting into an existing file.
This keeps the CSV as the single source of truth: what's in the CSV is
exactly what ends up in the database, with no leftover rows from a
previous version lingering behind.

Feedback (issue #17) lives in a second CSV, one row per entry; by
default the importer looks for `feedback.csv` next to the clubs CSV and
refuses to run if it's missing, so feedback can never be silently
dropped from a regenerated database. Use --no-feedback for a deliberate
clubs-only import.

Usage:
    python tools/import_csv.py data/clubs.csv public/dive_clubs.db
    python tools/import_csv.py data/clubs.csv public/dive_clubs.db --feedback-csv data/feedback.csv
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
from schema import SOURCE_KINDS
from validate import ValidationError, validate_rows, validate_feedback_rows


def import_rows(conn, rows):
    for row in rows:
        # club_id is inserted explicitly when the CSV provides one, so ids
        # stay stable across imports even if a row is removed. Rows in
        # feedback.csv reference these ids; letting AUTOINCREMENT reassign
        # them by row order would silently rebind feedback to the wrong club.
        cur = conn.execute(
            """
            INSERT INTO clubs (
                club_id, name, city, full_address, gps_lat, gps_lng,
                website_url, naver_map_url, active, size, num_instructors,
                years_of_existence, owns_boat, tec_diving, freediving,
                estimated_price_per_dive_krw
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                row["club_id"],
                row["name"],
                row["city"],
                row["full_address"],
                row["gps_lat"],
                row["gps_lng"],
                row["website_url"],
                row["naver_map_url"],
                row["active"],
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


def import_feedback_rows(conn, feedback_rows):
    for row in feedback_rows:
        if row["kind"] == "local_diver":
            conn.execute(
                """
                INSERT INTO diver_quotes (club_id, quote, author_alias, quoted_at, lang)
                VALUES (?, ?, ?, ?, ?)
                """,
                (row["club_id"], row["summary_or_quote"], row["author_alias"], row["quoted_at"], row["lang"]),
            )
        else:
            source_id = db.get_or_create_feedback_source(conn, row["source"], SOURCE_KINDS[row["source"]])
            conn.execute(
                """
                INSERT INTO club_feedback (club_id, source_id, rating, review_count, url, summary, lang, last_checked)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (row["club_id"], source_id, row["rating"], row["review_count"], row["url"], row["summary_or_quote"], row["lang"], row["last_checked"]),
            )


def main():
    parser = argparse.ArgumentParser(description="Import canonical CSV club data into a fresh SQLite database.")
    parser.add_argument("csv_path", help="Path to the input clubs CSV file")
    parser.add_argument("db_path", help="Path to the output SQLite database (overwritten)")
    parser.add_argument("--feedback-csv", help="Path to the feedback CSV (default: feedback.csv next to the clubs CSV)")
    parser.add_argument("--no-feedback", action="store_true", help="Deliberately import clubs only, without a feedback CSV")
    parser.add_argument("--dry-run", action="store_true", help="Validate only; do not write the database")
    args = parser.parse_args()

    if not os.path.isfile(args.csv_path):
        print(f"error: CSV file not found: {args.csv_path}")
        sys.exit(2)

    feedback_path = args.feedback_csv or os.path.join(os.path.dirname(args.csv_path), "feedback.csv")
    raw_feedback_rows = []
    if args.no_feedback:
        pass
    elif not os.path.isfile(feedback_path):
        print(f"error: feedback CSV not found: {feedback_path} (pass --feedback-csv or --no-feedback)")
        sys.exit(2)
    else:
        with open(feedback_path, newline="", encoding="utf-8") as f:
            raw_feedback_rows = list(csv.DictReader(f))

    with open(args.csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        raw_rows = list(reader)

    if not raw_rows:
        print("error: CSV file has no data rows")
        sys.exit(1)

    errors = []
    rows = []
    try:
        rows = validate_rows(raw_rows)
    except ValidationError as e:
        errors.extend(f"{args.csv_path}: {err}" for err in e.errors)

    feedback_rows = []
    if raw_feedback_rows:
        known_ids = {r["club_id"] for r in rows if r.get("club_id") is not None} or None
        try:
            feedback_rows = validate_feedback_rows(raw_feedback_rows, known_ids)
        except ValidationError as e:
            errors.extend(f"{feedback_path}: {err}" for err in e.errors)

    if errors:
        print(f"INVALID: {len(errors)} validation error(s) found")
        for err in errors:
            print(f"  - {err}")
        sys.exit(1)

    print(f"Validated {len(rows)} club row(s) and {len(feedback_rows)} feedback row(s), no errors.")

    if args.dry_run:
        print("Dry run: database not written.")
        sys.exit(0)

    if os.path.exists(args.db_path):
        os.remove(args.db_path)

    conn = db.connect(args.db_path)
    try:
        db.create_schema(conn)
        import_rows(conn, rows)
        import_feedback_rows(conn, feedback_rows)
        conn.commit()
    except Exception:
        conn.rollback()
        conn.close()
        if os.path.exists(args.db_path):
            os.remove(args.db_path)
        raise
    else:
        conn.close()

    print(f"Wrote {len(rows)} club(s) and {len(feedback_rows)} feedback row(s) to {args.db_path}")


if __name__ == "__main__":
    main()
