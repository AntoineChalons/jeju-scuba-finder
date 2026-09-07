# Jeju Dive Club Finder

A static, browser-based dashboard for comparing scuba-diving and
freediving clubs on Jeju Island.

## Features

- Sortable club comparison table.
- Club type filter (scuba-diving or freediving).
- Filters for certification, club size, language, price, boat ownership,
  and technical diving.
- Interactive MapLibre map.
- Club detail drawer with contacts and feedback.
- English, Chinese, Japanese, and Korean UI.
- Client-side SQLite queries through sql.js.
- Static Cloudflare Pages deployment on divingjeju.com with no application server.

## Data architecture

The project uses three repositories:

| Repository | Visibility | Purpose |
|---|---|---|
| `AntoineChalons/jeju-scuba-finder` | Public | Static Vite application and UI tests |
| `AntoineChalons/jeju-scuba-data` | Private | Source CSV files, research report, validation, tests, and SQLite tools |
| [`AntoineChalons/public-data`](https://github.com/AntoineChalons/public-data) | Public | Generated `dive_clubs.db` artifact |

The CSV files in the private data repository are the source of truth. A GitHub
Actions workflow validates them, builds `dive_clubs.db`, checks its integrity,
and publishes only the database to `public-data`.

The production app loads:

```text
https://antoinechalons.github.io/public-data/dive_clubs.db
```

Do not add source CSV files, research reports, Python data tools, or generated
database files to this repository.

## Project structure

```text
.
├── .github/workflows/
│   └── ci.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── db-diagnostics.js
│   ├── db-loader.js
│   ├── drawer-controller.js
│   ├── feedback.js
│   ├── filter-bar.js
│   ├── filters.js
│   ├── main.js
│   ├── map-controller.js
│   ├── state.js
│   ├── table-controller.js
│   └── i18n/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Runtime data flow

```text
private clubs.csv and feedback.csv
  -> validation and SQLite build
  -> public-data/dive_clubs.db
  -> src/db-loader.js
  -> application state
  -> filters, table, map, and detail drawer
```

`src/db-loader.js` downloads the complete database, opens it with sql.js, and
queries `v_club_dashboard`. It also loads platform feedback and local-diver
quotes for the detail drawer.

The database URL can be changed at build time with `VITE_DATABASE_URL`.

## Data model

The normalized SQLite schema is maintained in the private data repository:

- `clubs`: core club profiles and active status.
- `contact_methods`: contact channels for each club.
- `languages` and `club_languages`: supported languages.
- `certifications` and `club_certifications`: supported certifications.
- `feedback_sources` and `club_feedback`: platform feedback.
- `diver_quotes`: local-diver feedback.
- `v_club_dashboard`: flattened read model for the app.

Club data is intentionally not translated. The multilingual files translate UI
labels and application messages only.

## Inactive clubs

Inactive clubs remain in the database so IDs, URLs, and the research trail stay
stable. The frontend loads only rows where `active = 1`, so inactive clubs do
not appear in the map, table, filters, or result counts.

Inactive-club evidence and decisions belong in
`data/jeju_club_research_report.md` in the private data repository.

## Local development

### Requirements

- Node.js 24 or later.
- npm.
- A modern browser.

### Install and run

```bash
npm install
npm run dev
```

The local app uses the published database by default.

To test a locally built database, start a static server in the private data
repository and set the build-time URL:

```bash
VITE_DATABASE_URL=http://localhost:8001/dive_clubs.db npm run dev
```

The database server must allow cross-origin requests.

### Quality checks

```bash
npm run lint
npm test
npm run build
```

The public application CI runs these checks for pull requests. The private data
repository runs Python tests and data validation independently.

## Update club data

Data changes belong in the private `jeju-scuba-data` repository.

1. Edit `data/clubs.csv` for club profiles and capabilities.
2. Edit `data/feedback.csv` for platform summaries or local-diver quotes.
3. Update `data/jeju_club_research_report.md` when research decisions change.
4. Run the validation and tests documented in that repository.
5. Commit and push to `main`.
6. Confirm that the `Publish scuba database` workflow succeeds.
7. Confirm that `public-data/dive_clubs.db` was updated.

Do not edit `dive_clubs.db` directly. The next publication run will replace it.

## Application deployment

The site is published on Cloudflare Pages at `https://divingjeju.com/`.
Cloudflare Pages is connected to this repository and builds `main` with
`npm run build` (output directory `dist`).

Every push to `main` and every pull request against `main` also runs the
GitHub Actions CI gate (ESLint, JavaScript unit tests, Vite build).

The application deployment does not build or publish club data. The private
data workflow owns that responsibility. The production app loads its database
from the `public-data` GitHub Pages URL, which is a different publication and
stays online.

The migration steps are recorded in `docs/deploy-divingjeju-com.md`.

## Failure behavior

The loader rejects non-successful database responses. The existing application
error state then reports that data could not be loaded instead of trying to
open an invalid response as SQLite.

## Contributing

Use issues and pull requests in this repository for application changes. Data
changes require access to the private `jeju-scuba-data` repository.

## License

MIT
