# Jeju Dive Club Comparator

A static, browser-based dashboard for comparing Jeju scuba diving clubs from a normalized SQLite database. The app is designed to help users compare operators such as MJ, Nautilus, Sealife, and BigBlue33 by contact methods, certifications, language support, boat access, pricing, and feedback sources.

## Features

- Sortable comparison table for Jeju dive clubs.
- SQLite-backed data model with normalized tables for clubs, contacts, languages, certifications, and feedback.
- Client-side dashboard that runs entirely in the browser.
- GitHub Pages compatible deployment with no backend required.
- Read-only database access from a static `.db` file.
- Extensible schema for adding more clubs, languages, certifications, and review sources.

## Project Structure

```text
repo-root/
├── index.html
├── dive_clubs.db
├── README.md
└── .gitignore
```

## Technology Stack

- HTML, CSS, and JavaScript.
- SQLite for the source data store.
- sql.js for browser-side SQLite querying.
- GitHub Pages for static hosting.

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

- A modern browser.
- A local static file server.

### Run locally

Do not open `index.html` directly with `file://` because browser fetch behavior can block access to the SQLite file. Serve the directory with a local web server instead:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If you prefer Node.js tooling, any static server works as long as it serves `index.html` and `dive_clubs.db` from the same directory.

## How It Works

The frontend loads `dive_clubs.db` in the browser, opens it with sql.js, and queries the `v_club_dashboard` view. The resulting rows are rendered into a sortable HTML table, so the dashboard works without a backend API or build pipeline.

The current implementation is read-only. Updates happen by editing the SQLite database locally, regenerating the `.db` file if needed, and committing it back to the repository.

## Deployment to GitHub Pages

1. Push `index.html` and `dive_clubs.db` to the repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Save the settings and wait for GitHub Pages to publish the site.

Because the app uses relative paths, it will work correctly from a GitHub Pages project URL as long as the HTML and SQLite file remain in the published folder.

## Adding or Updating Clubs

1. Edit the SQLite source data locally.
2. Keep the schema normalized; avoid adding new columns for every new contact or certification type.
3. Rebuild or replace `dive_clubs.db`.
4. Commit the updated database and push to GitHub.
5. GitHub Pages redeploys automatically.

## Recommended SQLite Constraints

- Keep `clubs.name` unique where possible.
- Use foreign keys between `clubs` and child tables.
- Use check constraints for controlled values such as `size`, `contact_type`, and boolean flags.
- Add indexes on commonly filtered fields if the dataset grows.

## Known Limitations

- Some clubs may have incomplete public data.
- Feedback data is only as good as the latest manual or scripted update.
- The dashboard is static and read-only in the browser.
- Large SQLite databases may need a chunked loading approach such as `sql.js-httpvfs`.

## Roadmap

- Add filters for certification, size, language support, and price range.
- Add map links and address grouping by city or area.
- Add a club detail drawer with feedback summaries.
- Add import/export tooling for CSV and SQLite regeneration.
- Add automated data validation for required fields.

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
