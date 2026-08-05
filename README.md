# Jeju Dive Club Comparator

A static, browser-based dashboard for comparing Jeju scuba diving clubs from a normalized SQLite database. The app is designed to help users compare operators such as MJ, Nautilus, Sealife, and BigBlue33 by contact methods, certifications, language support, boat access, pricing, and feedback sources.

## Features

- Sortable comparison table for Jeju dive clubs.
- Filter bar for certification, size, language, and max price per dive.
- SQLite-backed data model with normalized tables for clubs, contacts, languages, certifications, and feedback.
- Client-side dashboard that runs entirely in the browser.
- GitHub Pages compatible deployment with no backend required.
- Read-only database access from a static `.db` file.
- Extensible schema for adding more clubs, languages, certifications, and review sources.

## Project Structure

```text
repo-root/
├── index.html          # Vite entry HTML
├── package.json
├── vite.config.js
├── src/                 # Application source (bundled by Vite)
│   ├── main.js
│   ├── state.js          # Centralized state container (single store + subscribe)
│   ├── filters.js         # Pure filter-option derivation and filter-apply logic
│   ├── filter-bar.js       # Filter bar DOM rendering and event wiring
│   ├── db-loader.js
│   ├── db-diagnostics.js
│   ├── map-controller.js
│   ├── table-controller.js
│   └── utils.js
├── public/              # Static assets copied as-is to dist/
│   └── dive_clubs.db
├── tools/               # Python data-pipeline scripts (build/scrape/validate)
│   ├── build_db.py
│   ├── scrape_clubs.py
│   └── validate_schema.py
├── README.md
└── .gitignore
```

## Technology Stack

- HTML, CSS, and JavaScript, bundled with [Vite](https://vitejs.dev/).
- npm-managed dependencies: `leaflet` and `sql.js` (no CDN `<script>` tags).
- SQLite for the source data store.
- sql.js for browser-side SQLite querying, loaded via its WebAssembly build.
- GitHub Pages for static hosting.

## State Management

The app uses a small, explicit state container instead of scattered module-level globals (`src/state.js`):

- A single `state` object holds `clubs`, `sortKey`, `sortAsc`, `selectedClubId`, and `filters`.
- `setState(patch)` merges a partial update and notifies every subscriber; `setFilter(key, value)` is a convenience wrapper for updating one filter field immutably.
- `subscribe(fn)` registers a callback invoked after every state change. `main.js` registers exactly one subscriber — a `render(state)` function — so the table, map, and filter bar always stay in sync and re-render in a single, predictable pass instead of being manually called in the right order after each event handler.

This keeps new features (the filter bar, and future additions like a detail drawer or URL-synced state) additive: they read from `getState()` and write via `setState()`/`setFilter()` without threading extra parameters through every render call.

## Filtering

The filter bar (certification, size, language, max price per dive) is built from three small, focused modules:

- `src/filters.js` — pure functions with no DOM access: `buildFilterOptions(clubs)` derives the distinct dropdown values from the loaded dataset, and `applyFilters(clubs, filters)` returns the subset matching all active filters (AND logic across fields). Certification and language are comma-joined text fields in the database, so filtering matches against the split list rather than doing a substring match.
- `src/filter-bar.js` — renders the `<select>`/`<input>` options, keeps the controls in sync with state, and wires user interaction to a single `onChange(key, value)` callback. It has no dependency on the state store itself, so it stays easy to reuse or test in isolation.
- `main.js` wires it together: filter changes call `setFilter()`, the state subscriber recomputes `applyFilters()` then `sortClubs()` on every change, and the result feeds both the table and the map. A club missing `estimated_price_per_dive_krw` is excluded once a max-price filter is active, since it can't be confirmed to satisfy the constraint.

## Data Model

The database uses a normalized schema so the project can grow without becoming a wide, fragile spreadsheet:

- `clubs`: core club profile data.
- `contact_methods`: one row per contact channel.
- `languages` and `club_languages`: many-to-many language support.
- `certifications` and `club_certifications`: many-to-many certification support.
- `feedback_sources` and `club_feedback`: ratings and review metadata per platform.
- `v_club_dashboard`: a view that flattens the schema for the frontend dashboard.

## Local Development

### Prerequisites

- Node.js 18+ and npm.
- A modern browser.

### Setup

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). Open it in a browser — hot module reload is enabled, so edits to files in `src/` refresh automatically.

Do not open `index.html` directly with `file://`; browser fetch behavior blocks access to the SQLite file. Always go through the Vite dev server or a build preview.

### Build for production

```bash
npm run build
```

This bundles `src/` into `dist/`, copies everything in `public/` (including `dive_clubs.db`) alongside it, and hashes asset filenames for cache-busting.

### Preview the production build locally

```bash
npm run preview
```

## How It Works

The frontend fetches `dive_clubs.db` (served from `public/` at build time) in the browser, opens it with sql.js's WebAssembly build, and queries the `v_club_dashboard` view. The resulting rows are rendered into a sortable HTML table, so the dashboard works without a backend API.

The current implementation is read-only. Updates happen by editing the SQLite database locally (or via the scripts in `tools/`), regenerating the `.db` file, dropping it into `public/dive_clubs.db`, and committing it back to the repository.

## Deployment to GitHub Pages

This project now uses a build step, so GitHub Pages must serve the built `dist/` output rather than the repository root.

**Recommended: GitHub Actions (build + deploy on every push)**

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Add a workflow that runs `npm ci`, `npm run build`, and publishes `dist/` using `actions/upload-pages-artifact` + `actions/deploy-pages`.
4. Push to `main` — GitHub Pages rebuilds and redeploys automatically.

**Alternative: manual `dist/` deploy**

1. Run `npm run build` locally.
2. Publish the contents of `dist/` to a `gh-pages` branch (e.g. with the `gh-pages` npm package) or configure Pages to deploy from that branch/folder.

Because `vite.config.js` sets `base: './'`, the built assets use relative paths and work correctly from a GitHub Pages project URL subpath.

## Adding or Updating Clubs

1. Edit the SQLite source data locally (see `tools/build_db.py`, `tools/scrape_clubs.py`, `tools/validate_schema.py`).
2. Keep the schema normalized; avoid adding new columns for every new contact or certification type.
3. Rebuild or replace the database, then copy it to `public/dive_clubs.db`.
4. Commit the updated database and push to GitHub.
5. GitHub Pages redeploys automatically via the Actions workflow.

## Recommended SQLite Constraints

- Keep `clubs.name` unique where possible.
- Use foreign keys between `clubs` and child tables.
- Use check constraints for controlled values such as `size`, `contact_type`, and boolean flags.
- Add indexes on commonly filtered fields if the dataset grows.

## Known Limitations

- Some clubs may have incomplete public data.
- Feedback data is only as good as the latest manual or scripted update.
- The dashboard is static and read-only in the browser.
- Large SQLite databases may need a chunked loading approach such as `sql.js-httpvfs` — currently the whole `.db` file is fetched into memory on load.

## Roadmap

- ~~Add filters for certification, size, language support, and price range.~~ Done — see [Filtering](#filtering).
- ~~Introduce a central state container as filters/drawer land.~~ Done — see [State Management](#state-management).
- Add map links and address grouping by city or area.
- Add a club detail drawer with feedback summaries.
- Add import/export tooling for CSV and SQLite regeneration.
- Add automated data validation for required fields.
- Switch to `sql.js-httpvfs` with chunked loading once the database grows.
- Add TypeScript or JSDoc types, ESLint, and Vitest-based tests.

## Contributing

Contributions are welcome. Good contribution candidates include:

- Adding or correcting club data.
- Improving the schema or adding indexes.
- Enhancing the dashboard UI and accessibility.
- Adding import scripts or validation checks.

When contributing data, verify the source and keep the schema consistent with the existing normalized design.

## License

Choose a license before public release. If this repository is private or personal, you can keep it unlicensed until you are ready to publish.

## Acknowledgments

- Jeju dive operators and public map/review listings used as data sources.
- SQLite and sql.js for enabling browser-side database access.
- GitHub Pages for static deployment.


## Map and Sorting Behavior

The dashboard includes a Leaflet map that displays clubs with known GPS coordinates. The map and the table are synchronized:

- Clicking a column header changes the active sort criterion.
- Whenever the sorting criterion changes, the table re-renders and the map updates to reflect the same sorted club set.
- Clicking a table row highlights the matching club marker on the map.
- Clicking a map marker highlights the corresponding row in the table.

A **Suggest edits** link is included in the interface and points to the repository issue tracker so users can report incorrect data or missing clubs.

## Filter Bar Behavior

- Filters combine with AND logic: selecting a certification and a max price shows only clubs matching both.
- Certification and language filters match against individual values in the comma-joined `certifications`/`languages_spoken` fields, not a substring of the raw text.
- Clubs with no recorded price are excluded once a max-price filter is set, since their eligibility can't be confirmed.
- The summary line ("Showing X of Y clubs") and the table/map both update together, since they're driven by the same filtered-and-sorted list computed from state on every change.
- "Reset filters" clears all four filters at once and is disabled whenever the filter bar is already at its default state.
