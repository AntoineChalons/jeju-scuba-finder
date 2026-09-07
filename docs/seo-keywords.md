# SEO keyword map (issue #32)

One primary phrase per page. Titles, H1 and meta descriptions agree on
that phrase; each phrase occurs naturally, never stuffed.

| Query | Target page | Locale | Title |
|---|---|---|---|
| jeju scuba diving | `/` | en | Jeju Scuba Diving — Compare Dive Clubs on Jeju Island |
| jeju dive club | `/` | en | (same page, secondary phrase in description) |
| dive jeju / scuba jeju | `/` | en | (secondary phrases in intro copy) |
| jeju PADI | `/#PADI-list` (home page section) | en | "PADI dive clubs in Jeju" H2 + club pages |
| jeju SSI | `/#SSI-list` (home page section) | en | "SSI dive clubs in Jeju" H2 + club pages |
| `<club> jeju` (long tail) | `/clubs/<slug>/` | en | `<club> — scuba diving club in <city>, Jeju Island` |
| 제주 스쿠버 다이빙 | `/` (document.title via i18n) | ko | 제주 스쿠버 다이빙 — 제주 다이빙 샵 비교 |
| 済州島 ダイビング | `/` (document.title via i18n) | ja | 済州島ダイビング — 済州島ダイビングショップ比較 |
| 济州岛 潜水 | `/` (document.title via i18n) | zh | 济州岛潜水 — 济州岛潜水俱乐部对比 |

## Deferred

- ko/ja/zh static copy for the content sections (needs native-quality
  translation; only the document title is translated today).
- Locale-specific club page URLs (e.g. `/ko/clubs/<slug>/`) and the
  `hreflang` links that depend on them (see #26).
- `og:image` — no suitable image asset exists yet.
