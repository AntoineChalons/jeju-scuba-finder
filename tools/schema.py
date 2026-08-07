"""
Canonical CSV schema for dive club data.

One CSV row = one club. Multi-value fields (languages, certifications,
contact methods) are packed into single delimited cells so the whole
dataset stays a flat, spreadsheet-friendly file that maps 1:1 onto the
normalized SQLite schema in db.py:

    clubs, contact_methods, languages, club_languages,
    certifications, club_certifications, feedback_sources,
    club_feedback, diver_quotes

Delimiter convention:
- Comma-joined lists (languages_spoken, certifications) match the
  existing GROUP_CONCAT(..., ', ') format already used by
  v_club_dashboard and the frontend, so exporting requires no
  reformatting of values users already see in the app.
- Semicolon-joined "key:value" pairs (contact_methods) since those
  values are structured (type + value) and commas can legitimately
  appear inside a URL or phone number.

Feedback is NOT packed into clubs.csv (issue #17): authored summaries
and diver quotes are prose, and prose cannot survive a colon/semicolon
delimiter convention. It lives in a second file, data/feedback.csv,
one row per feedback entry (see FEEDBACK_CSV_COLUMNS below).
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
]

# Column order for data/feedback.csv: one row per feedback entry.
# Platform rows (kind=platform) carry rating/review_count/url/last_checked;
# local-diver rows (kind=local_diver) carry author_alias/quoted_at and MUST
# have a summary_or_quote. `kind` may be left blank and is derived from
# `source` via SOURCE_KINDS; when filled it must agree.
FEEDBACK_CSV_COLUMNS = [
    "club_id",           # required; must match a club_id in clubs.csv
    "source",             # required; one of SOURCE_KINDS keys
    "kind",               # platform / local_diver; blank = derived from source
    "rating",             # platform only; float 0..5
    "review_count",       # platform only; integer >= 0
    "url",                # platform only
    "summary_or_quote",   # authored summary (platform, optional) or quote (local_diver, required)
    "author_alias",       # local_diver only; anonymized, e.g. "instructor, 10y on Jeju"
    "quoted_at",          # local_diver only; ISO date YYYY-MM-DD
    "lang",               # BCP-47 tag of summary_or_quote, e.g. "ko", "en"
    "last_checked",       # platform only; ISO date YYYY-MM-DD
]

FEEDBACK_KINDS = {"platform", "local_diver"}

# Controlled source vocabulary -> kind. naver_blog and kakao_map stay
# distinct (a blog write-up and a map review are different evidence;
# provenance is the point). google reviews live on Google Maps, hence
# google_maps for symmetry with kakao_map.
SOURCE_KINDS = {
    "naver_blog": "platform",
    "kakao_map": "platform",
    "google_maps": "platform",
    "tripadvisor": "platform",
    "reddit": "platform",
    "local_diver": "local_diver",
}

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
