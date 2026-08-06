"""
Canonical CSV schema for dive club data.

One CSV row = one club. Multi-value fields (languages, certifications,
contact methods, feedback entries) are packed into single delimited
cells so the whole dataset stays a flat, spreadsheet-friendly file that
maps 1:1 onto the normalized SQLite schema in db.py:

    clubs, contact_methods, languages, club_languages,
    certifications, club_certifications, feedback_sources, club_feedback

Delimiter convention:
- Comma-joined lists (languages_spoken, certifications) match the
  existing GROUP_CONCAT(..., ', ') format already used by
  v_club_dashboard and the frontend, so exporting requires no
  reformatting of values users already see in the app.
- Semicolon-joined "key:value" pairs (contact_methods, feedback) since
  those values are structured (type + value, or source + rating +
  review_count + url) and commas can legitimately appear inside a URL
  or phone number.
"""

# Column order in the CSV, matching clubs table columns first, then the
# packed multi-value columns. club_id is included so re-imports can
# update existing rows; leave it blank when adding a new club.
CSV_COLUMNS = [
    "club_id",
    "name",
    "city",
    "full_address",
    "gps_lat",
    "gps_lng",
    "website_url",
    "naver_map_url",
    "active",                  # true/false; blank means true (see DEFAULT_TRUE_BOOLEAN_COLUMNS)
    "size",
    "num_instructors",
    "years_of_existence",
    "owns_boat",
    "tec_diving",
    "freediving",
    "estimated_price_per_dive_krw",
    "languages_spoken",       # comma-joined, e.g. "English, Korean"
    "certifications",          # comma-joined, e.g. "PADI, NAUI"
    "contact_methods",         # semicolon-joined "type:value", e.g. "email:a@b.com;mobile_phone:+82-10-...;instagram:handle"
    "feedback",                 # semicolon-joined "source:rating:review_count:url", rating/review_count/url optional
]

REQUIRED_COLUMNS = ["name", "city"]

SIZE_VALUES = {"small", "medium", "large"}
CONTACT_TYPES = {"email", "whatsapp", "kakaotalk", "mobile_phone", "instagram"}
BOOLEAN_COLUMNS = ["owns_boat", "tec_diving", "freediving", "active"]

# Booleans whose absence means "true" rather than "unknown". `active` is the
# only one: a club is assumed to be in business unless we have positive
# evidence otherwise, so an author adding a new row never has to remember
# to type `true`. Every other boolean stays tri-state (true/false/unknown).
DEFAULT_TRUE_BOOLEAN_COLUMNS = {"active"}
INTEGER_COLUMNS = ["num_instructors", "years_of_existence", "estimated_price_per_dive_krw"]
FLOAT_COLUMNS = ["gps_lat", "gps_lng"]

TRUE_STRINGS = {"1", "true", "yes", "y"}
FALSE_STRINGS = {"0", "false", "no", "n"}
