"""
Unit tests for tools/validate.py and tools/schema.py.

Focused on the highest-risk pure functions in the data pipeline:
boolean parsing (including the `active` blank-vs-invalid special case),
contact_methods and feedback pack/unpack, and cross-row invariants
(duplicate ids, duplicate name+city, partial GPS pairs).

Run:   pytest tools/test_validate.py
"""

import pytest

# tools/ is a flat module directory, not a package. The suite is run
# from the repo root, so we import as if we were in tools/.
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

import validate  # noqa: E402
from validate import (  # noqa: E402
    _parse_bool,
    parse_contact_methods,
    parse_feedback,
    validate_and_normalize_row,
    validate_rows,
    ValidationError,
)


# ---------- _parse_bool ------------------------------------------------------


class TestParseBool:
    def test_yes_variants_all_map_to_1(self):
        errors = []
        for raw in ("yes", "y", "true", "1", "YES", " True "):
            assert _parse_bool(raw, 2, "owns_boat", errors) == 1
        assert errors == []

    def test_no_variants_all_map_to_0(self):
        errors = []
        for raw in ("no", "n", "false", "0", "NO", " False "):
            assert _parse_bool(raw, 2, "owns_boat", errors) == 0
        assert errors == []

    def test_blank_stays_unknown_returns_none(self):
        errors = []
        assert _parse_bool("", 2, "owns_boat", errors) is None
        assert _parse_bool(None, 2, "owns_boat", errors) is None
        assert _parse_bool("   ", 2, "owns_boat", errors) is None
        assert errors == []

    def test_invalid_string_appends_error_and_returns_none(self):
        errors = []
        assert _parse_bool("maybe", 5, "tec_diving", errors) is None
        assert len(errors) == 1
        assert "row 5" in errors[0]
        assert "'maybe'" in errors[0]


# ---------- active column (the one non-tri-state boolean) --------------------


def _row(**overrides):
    base = {
        "club_id": "",
        "name": "Test Club",
        "city": "Seogwipo",
        "full_address": "",
        "gps_lat": "",
        "gps_lng": "",
        "website_url": "",
        "naver_map_url": "",
        "active": "",
        "size": "",
        "num_instructors": "",
        "years_of_existence": "",
        "owns_boat": "",
        "tec_diving": "",
        "freediving": "",
        "estimated_price_per_dive_krw": "",
        "languages_spoken": "",
        "certifications": "",
        "contact_methods": "",
        "feedback": "",
    }
    base.update(overrides)
    return base


class TestActiveColumn:
    def test_blank_active_defaults_to_true(self):
        errors = []
        row = validate_and_normalize_row(_row(active=""), 2, errors)
        assert row["active"] is True
        assert errors == []

    def test_yes_active_is_true(self):
        errors = []
        row = validate_and_normalize_row(_row(active="yes"), 2, errors)
        assert row["active"] == 1  # _parse_bool returns 1 for yes
        assert errors == []

    def test_no_active_is_false(self):
        errors = []
        row = validate_and_normalize_row(_row(active="no"), 2, errors)
        assert row["active"] == 0
        assert errors == []

    def test_invalid_active_errors_and_stays_none_not_true(self):
        # Regression guard: an unparseable `active` value must NOT
        # silently default to True. It must emit an error and keep the
        # normalized value as None so downstream code can refuse to
        # import it. This is the specific edge case #14 fixed.
        errors = []
        row = validate_and_normalize_row(_row(active="maybe"), 2, errors)
        assert row["active"] is None
        assert any("active" in e and "maybe" in e for e in errors)

    def test_other_booleans_stay_tri_state(self):
        # owns_boat / tec_diving / freediving must return None (unknown)
        # for a blank cell, not True.
        errors = []
        row = validate_and_normalize_row(_row(owns_boat=""), 2, errors)
        assert row["owns_boat"] is None


# ---------- contact_methods --------------------------------------------------


class TestParseContactMethods:
    def test_empty_returns_empty_list(self):
        errors = []
        assert parse_contact_methods("", 2, errors) == []
        assert parse_contact_methods(None, 2, errors) == []
        assert parse_contact_methods("   ", 2, errors) == []
        assert errors == []

    def test_single_email(self):
        errors = []
        result = parse_contact_methods("email:a@b.com", 2, errors)
        assert result == [("email", "a@b.com")]
        assert errors == []

    def test_multiple_methods_separated_by_semicolons(self):
        errors = []
        result = parse_contact_methods(
            "email:a@b.com;mobile_phone:+82-10-1234-5678;instagram:gotahunch", 2, errors
        )
        assert result == [
            ("email", "a@b.com"),
            ("mobile_phone", "+82-10-1234-5678"),
            ("instagram", "gotahunch"),
        ]
        assert errors == []

    def test_kakaotalk_value_may_contain_colons_because_url(self):
        # The value side is split on the FIRST ':' only, so
        # 'kakaotalk:https://open.kakao.com/o/gABC' must keep the
        # https:// intact. This is what packs the drawer's contact
        # links from the view.
        errors = []
        result = parse_contact_methods(
            "kakaotalk:https://open.kakao.com/o/gABC", 2, errors
        )
        assert result == [("kakaotalk", "https://open.kakao.com/o/gABC")]
        assert errors == []

    def test_missing_colon_reports_error(self):
        errors = []
        parse_contact_methods("emaila@b.com", 2, errors)
        assert len(errors) == 1
        assert "type:value" in errors[0]

    def test_unknown_type_reports_error(self):
        errors = []
        parse_contact_methods("fax:12345", 2, errors)
        assert len(errors) == 1
        assert "fax" in errors[0]

    def test_missing_value_reports_error(self):
        errors = []
        parse_contact_methods("email:", 2, errors)
        assert len(errors) == 1
        assert "missing a value" in errors[0]

    def test_instagram_bare_handle_stripped_of_leading_at(self):
        errors = []
        result = parse_contact_methods("instagram:@gotahunch", 2, errors)
        assert result == [("instagram", "gotahunch")]
        assert errors == []

    def test_instagram_url_rejected(self):
        errors = []
        parse_contact_methods("instagram:instagram.com/gotahunch", 2, errors)
        assert len(errors) == 1
        assert "bare handle" in errors[0]


# ---------- feedback ---------------------------------------------------------


class TestParseFeedback:
    def test_empty_returns_empty_list(self):
        errors = []
        assert parse_feedback("", 2, errors) == []
        assert parse_feedback(None, 2, errors) == []

    def test_source_only(self):
        errors = []
        result = parse_feedback("Reddit", 2, errors)
        assert result == [("Reddit", None, None, None)]
        assert errors == []

    def test_source_and_rating(self):
        errors = []
        result = parse_feedback("TripAdvisor:4.5", 2, errors)
        assert result == [("TripAdvisor", 4.5, None, None)]

    def test_full_entry_with_url_containing_colons(self):
        errors = []
        result = parse_feedback(
            "TripAdvisor:4.5:12:https://www.tripadvisor.com/foo/bar", 2, errors
        )
        assert result == [
            ("TripAdvisor", 4.5, 12, "https://www.tripadvisor.com/foo/bar"),
        ]
        assert errors == []

    def test_multiple_sources(self):
        errors = []
        result = parse_feedback("Reddit;TripAdvisor:4.5:12:https://x.com/y", 2, errors)
        assert len(result) == 2
        assert result[0][0] == "Reddit"
        assert result[1] == ("TripAdvisor", 4.5, 12, "https://x.com/y")

    def test_missing_source_reports_error(self):
        errors = []
        parse_feedback(":4.5", 2, errors)
        assert len(errors) == 1
        assert "missing a source name" in errors[0]

    def test_non_numeric_rating_reports_error(self):
        errors = []
        parse_feedback("TripAdvisor:great", 2, errors)
        assert len(errors) == 1
        assert "feedback.rating" in errors[0]


# ---------- cross-row invariants --------------------------------------------


class TestValidateRows:
    def test_valid_two_row_dataset(self):
        rows = [
            _row(club_id="1", name="Alpha", city="Seogwipo"),
            _row(club_id="2", name="Beta", city="Jeju"),
        ]
        result = validate_rows(rows)
        assert [r["name"] for r in result] == ["Alpha", "Beta"]

    def test_duplicate_club_id_is_rejected(self):
        rows = [
            _row(club_id="1", name="Alpha", city="Seogwipo"),
            _row(club_id="1", name="Different", city="Jeju"),
        ]
        with pytest.raises(ValidationError) as exc:
            validate_rows(rows)
        assert any("duplicate club_id" in e for e in exc.value.errors)

    def test_duplicate_name_city_pair_is_rejected(self):
        rows = [
            _row(club_id="1", name="Alpha", city="Seogwipo"),
            _row(club_id="2", name="alpha", city="SEOGWIPO"),  # case-insensitive
        ]
        with pytest.raises(ValidationError) as exc:
            validate_rows(rows)
        assert any("duplicate club name+city" in e for e in exc.value.errors)

    def test_partial_gps_pair_is_rejected(self):
        rows = [_row(name="Alpha", city="Seogwipo", gps_lat="33.5", gps_lng="")]
        with pytest.raises(ValidationError) as exc:
            validate_rows(rows)
        assert any("partial GPS pair" in e for e in exc.value.errors)

    def test_gps_out_of_range_is_rejected(self):
        rows = [_row(name="Alpha", city="Seogwipo", gps_lat="200", gps_lng="0")]
        with pytest.raises(ValidationError) as exc:
            validate_rows(rows)
        assert any("gps_lat" in e and "out of range" in e for e in exc.value.errors)

    def test_missing_required_column_is_rejected(self):
        rows = [_row(name="", city="Seogwipo")]
        with pytest.raises(ValidationError) as exc:
            validate_rows(rows)
        assert any("'name'" in e and "empty" in e for e in exc.value.errors)
