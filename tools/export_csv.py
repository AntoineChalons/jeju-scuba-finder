#!/usr/bin/env python3
"""
Export club data from a SQLite database into the canonical CSV format,
for manual editing in a spreadsheet before re-importing with
import_csv.py.

Usage:
    python tools/export_csv.py public/dive_clubs.db data/clubs.csv
"""

import argparse
import csv
import os
import sys

import db
from schema import CSV_COLUMNS


def bool_to_csv(value):
    if value is None:
        return ""
    return "yes" if value else "no"


def num_to_csv(value):
    return "" if value is None else str(value)


def export_rows(conn):
    clubs = conn.execute("SELECT * FROM clubs ORDER BY club_id").fetchall()
    rows = []

    for club in clubs:
        club_id = club["club_id"]

        languages = conn.execute(
            """
            SELECT l.language_name FROM club_languages cl
            JOIN languages l ON l.language_id = cl.language_id
            WHERE cl.club_id = ? ORDER BY l.language_name
            """,
            (club_id,),
        ).fetchall()
        certifications = conn.execute(
            """
            SELECT cert.certification_name FROM club_certifications cc
            JOIN certifications cert ON cert.certification_id = cc.certification_id
            WHERE cc.club_id = ? ORDER BY cert.certification_name
            """,
            (club_id,),
        ).fetchall()
        contacts = conn.execute(
            "SELECT contact_type, contact_value FROM contact_methods WHERE club_id = ? ORDER BY contact_id",
            (club_id,),
        ).fetchall()
        feedback = conn.execute(
            """
            SELECT fs.source_name, f.rating, f.review_count, f.url FROM club_feedback f
            JOIN feedback_sources fs ON fs.source_id = f.source_id
            WHERE f.club_id = ? ORDER BY f.feedback_id
            """,
            (club_id,),
        ).fetchall()

        row = {
            "club_id": club_id,
            "name": club["name"],
            "city": club["city"],
            "full_address": club["full_address"] or "",
            "gps_lat": num_to_csv(club["gps_lat"]),
            "gps_lng": num_to_csv(club["gps_lng"]),
            "website_url": club["website_url"] or "",
            "naver_map_url": club["naver_map_url"] or "",
            "active": bool_to_csv(club["active"]),
            "size": club["size"] or "",
            "num_instructors": num_to_csv(club["num_instructors"]),
            "years_of_existence": num_to_csv(club["years_of_existence"]),
            "owns_boat": bool_to_csv(club["owns_boat"]),
            "tec_diving": bool_to_csv(club["tec_diving"]),
            "freediving": bool_to_csv(club["freediving"]),
            "estimated_price_per_dive_krw": num_to_csv(club["estimated_price_per_dive_krw"]),
            "languages_spoken": ", ".join(r["language_name"] for r in languages),
            "certifications": ", ".join(r["certification_name"] for r in certifications),
            "contact_methods": ";".join(f"{r['contact_type']}:{r['contact_value']}" for r in contacts),
            "feedback": ";".join(
                ":".join(
                    str(v) if v is not None else ""
                    for v in (r["source_name"], r["rating"], r["review_count"], r["url"])
                ).rstrip(":")
                for r in feedback
            ),
        }
        rows.append(row)

    return rows


def main():
    parser = argparse.ArgumentParser(description="Export a SQLite dive-club database into the canonical CSV format.")
    parser.add_argument("db_path", help="Path to the input SQLite database")
    parser.add_argument("csv_path", help="Path to the output CSV file (overwritten)")
    args = parser.parse_args()

    if not os.path.isfile(args.db_path):
        print(f"error: database file not found: {args.db_path}")
        sys.exit(2)

    conn = db.connect(args.db_path)
    rows = export_rows(conn)
    conn.close()

    with open(args.csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        writer.writerows(rows)

    print(f"Wrote {len(rows)} club(s) to {args.csv_path}")


if __name__ == "__main__":
    main()
