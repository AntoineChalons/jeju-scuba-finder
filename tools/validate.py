"""
Row-level and file-level validation for the canonical dive-club CSV.
Shared by import_csv.py (fail before touching the database) and usable
standalone (`python tools/validate.py data/clubs.csv`) to check a file
without regenerating anything.
"""

from schema import (
    REQUIRED_COLUMNS,
    SIZE_VALUES,
    CONTACT_TYPES,
    BOOLEAN_COLUMNS,
    INTEGER_COLUMNS,
    FLOAT_COLUMNS,
    TRUE_STRINGS,
    FALSE_STRINGS,
)


class ValidationError(Exception):
    """Raised with a list of human-readable row/column errors."""

    def __init__(self, errors):
        self.errors = errors
        super().__init__(f"{len(errors)} validation error(s) found")


def _parse_bool(raw, row_num, column, errors):
    if raw is None or raw.strip() == "":
        return None
    v = raw.strip().lower()
    if v in TRUE_STRINGS:
        return 1
    if v in FALSE_STRINGS:
        return 0
    errors.append(f"row {row_num}: column '{column}' has invalid boolean value '{raw}' (expected yes/no, true/false, 1/0)")
    return None


def _parse_int(raw, row_num, column, errors):
    if raw is None or raw.strip() == "":
        return None
    try:
        return int(raw.strip())
    except ValueError:
        errors.append(f"row {row_num}: column '{column}' has non-integer value '{raw}'")
        return None


def _parse_float(raw, row_num, column, errors):
    if raw is None or raw.strip() == "":
        return None
    try:
        return float(raw.strip())
    except ValueError:
        errors.append(f"row {row_num}: column '{column}' has non-numeric value '{raw}'")
        return None


def parse_contact_methods(raw, row_num, errors):
    """'email:a@b.com;mobile_phone:+82-10-1234-5678' -> [(type, value), ...]"""
    result = []
    if not raw or not raw.strip():
        return result
    for entry in raw.split(";"):
        entry = entry.strip()
        if not entry:
            continue
        if ":" not in entry:
            errors.append(f"row {row_num}: contact_methods entry '{entry}' must be 'type:value'")
            continue
        ctype, value = entry.split(":", 1)
        ctype = ctype.strip().lower()
        value = value.strip()
        if ctype not in CONTACT_TYPES:
            errors.append(f"row {row_num}: contact_methods type '{ctype}' not in {sorted(CONTACT_TYPES)}")
            continue
        if not value:
            errors.append(f"row {row_num}: contact_methods entry '{entry}' is missing a value")
            continue
        result.append((ctype, value))
    return result


def parse_feedback(raw, row_num, errors):
    """'source:rating:review_count:url' -> [(source, rating, review_count, url), ...].
    Only 'source' is required; trailing fields may be omitted, e.g. 'Reddit' alone,
    or 'TripAdvisor:4.5', or 'TripAdvisor:4.5:12:https://...'.
    """
    result = []
    if not raw or not raw.strip():
        return result
    for entry in raw.split(";"):
        entry = entry.strip()
        if not entry:
            continue
        parts = [p.strip() for p in entry.split(":")]
        source = parts[0]
        if not source:
            errors.append(f"row {row_num}: feedback entry '{entry}' is missing a source name")
            continue
        rating = None
        review_count = None
        url = None
        if len(parts) > 1 and parts[1]:
            rating = _parse_float(parts[1], row_num, "feedback.rating", errors)
        if len(parts) > 2 and parts[2]:
            review_count = _parse_int(parts[2], row_num, "feedback.review_count", errors)
        if len(parts) > 3 and parts[3]:
            url = ":".join(parts[3:])  # URLs contain ':' themselves (https://)
        result.append((source, rating, review_count, url))
    return result


def validate_and_normalize_row(raw_row, row_num, errors):
    """
    Takes a raw dict from csv.DictReader, returns a normalized dict with
    typed values (or None) for every column. Appends to `errors` in place
    rather than raising, so a whole file can be validated in one pass.
    """
    normalized = dict(raw_row)

    for col in REQUIRED_COLUMNS:
        if not raw_row.get(col, "").strip():
            errors.append(f"row {row_num}: required column '{col}' is empty")

    size = (raw_row.get("size") or "").strip()
    if size and size not in SIZE_VALUES:
        errors.append(f"row {row_num}: column 'size' has invalid value '{size}' (expected one of {sorted(SIZE_VALUES)})")
    normalized["size"] = size or None

    for col in BOOLEAN_COLUMNS:
        normalized[col] = _parse_bool(raw_row.get(col), row_num, col, errors)

    for col in INTEGER_COLUMNS:
        normalized[col] = _parse_int(raw_row.get(col), row_num, col, errors)

    for col in FLOAT_COLUMNS:
        normalized[col] = _parse_float(raw_row.get(col), row_num, col, errors)

    club_id_raw = (raw_row.get("club_id") or "").strip()
    normalized["club_id"] = int(club_id_raw) if club_id_raw else None

    lat, lng = normalized.get("gps_lat"), normalized.get("gps_lng")
    if (lat is None) != (lng is None):
        errors.append(f"row {row_num}: gps_lat and gps_lng must both be set or both be empty (partial GPS pair)")
    if lat is not None and not (-90 <= lat <= 90):
        errors.append(f"row {row_num}: gps_lat '{lat}' out of range [-90, 90]")
    if lng is not None and not (-180 <= lng <= 180):
        errors.append(f"row {row_num}: gps_lng '{lng}' out of range [-180, 180]")

    normalized["languages_spoken"] = [
        s.strip() for s in (raw_row.get("languages_spoken") or "").split(",") if s.strip()
    ]
    normalized["certifications"] = [
        s.strip() for s in (raw_row.get("certifications") or "").split(",") if s.strip()
    ]
    normalized["contact_methods"] = parse_contact_methods(raw_row.get("contact_methods"), row_num, errors)
    normalized["feedback"] = parse_feedback(raw_row.get("feedback"), row_num, errors)

    normalized["name"] = (raw_row.get("name") or "").strip()
    normalized["city"] = (raw_row.get("city") or "").strip()
    normalized["full_address"] = (raw_row.get("full_address") or "").strip() or None
    normalized["website_url"] = (raw_row.get("website_url") or "").strip() or None
    normalized["naver_map_url"] = (raw_row.get("naver_map_url") or "").strip() or None

    return normalized


def validate_rows(raw_rows):
    """Validate every row; raise ValidationError with all issues if any fail.
    Also checks for duplicate club_id values and duplicate (name, city) pairs
    across the file, which would otherwise silently overwrite each other.
    """
    errors = []
    normalized_rows = []
    seen_ids = {}
    seen_names = {}

    for i, raw_row in enumerate(raw_rows, start=2):  # row 1 is the header
        normalized = validate_and_normalize_row(raw_row, i, errors)
        normalized_rows.append(normalized)

        cid = normalized.get("club_id")
        if cid is not None:
            if cid in seen_ids:
                errors.append(f"row {i}: duplicate club_id {cid} (first seen at row {seen_ids[cid]})")
            else:
                seen_ids[cid] = i

        key = (normalized["name"].lower(), normalized["city"].lower())
        if key[0]:
            if key in seen_names:
                errors.append(f"row {i}: duplicate club name+city '{normalized['name']}' / '{normalized['city']}' (first seen at row {seen_names[key]})")
            else:
                seen_names[key] = i

    if errors:
        raise ValidationError(errors)

    return normalized_rows


if __name__ == "__main__":
    import csv
    import sys

    if len(sys.argv) != 2:
        print("Usage: python tools/validate.py <path-to-csv>")
        sys.exit(2)

    with open(sys.argv[1], newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    try:
        normalized = validate_rows(rows)
    except ValidationError as e:
        print(f"INVALID: {e}")
        for err in e.errors:
            print(f"  - {err}")
        sys.exit(1)

    print(f"OK: {len(normalized)} row(s) passed validation.")
