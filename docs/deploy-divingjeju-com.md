# Move jeju-scuba-finder from GitHub Pages to divingjeju.com

This guide records the migration of the site from
`https://antoinechalons.github.io/jeju-scuba-finder/` to
`https://divingjeju.com/`, published through Cloudflare.

The domain `divingjeju.com` was purchased at Spaceship for two years.
The Cloudflare account that already serves `capartencoree.com` is used
again. The publishing pattern uses the Cloudflare Workers Git
integration (build with `npm run build`, deploy with `npx wrangler deploy`
through `wrangler.jsonc` static assets). GitHub Actions only runs the CI
gate, the same separation as `AntoineChalons/matcast`.

## Current state after the automated changes

Done in this repository, by direct commit to `main`:

- `deploy.yml` is deleted. Nothing deploys to GitHub Pages from CI any more.
- `ci.yml` now runs on `push: main` and on pull requests against `main`
  (lint, unit tests, Vite build). This is the same gate that Cloudflare
  Pages relies on for a clean `main` branch.
- `vite.config.js` uses `base: '/'`. The site is served from the domain
  root, so asset URLs are absolute. This also prepares the ground for the
  nested prerendered routes planned in issue #25.
- The GitHub Pages site for this repository was unpublished through the
  GitHub API. The old `*.github.io/jeju-scuba-finder/` URL no longer
  serves the app.
- The README deployment section was updated.

Not affected:

- The database URL `https://antoinechalons.github.io/public-data/dive_clubs.db`
  is a publication of the separate `public-data` repository. It stays
  online. GitHub Pages sends `Access-Control-Allow-Origin: *`, so the app
  on `divingjeju.com` can continue to fetch it cross-origin.

## Consequence: temporary downtime

After the unpublish of GitHub Pages, the site is offline until step 5 of
the manual actions below completes. The site is not advertised yet and has
no known inbound links, so this is acceptable. If the old URL must answer,
republish a single redirect page instead; see the note at the end.

## Manual actions (no API access from here)

These steps need the Spaceship and Cloudflare dashboards and a browser
session. Do them in this order.

### 1. Add divingjeju.com to Cloudflare

1. Open the Cloudflare dashboard, `Add a domain`, enter `divingjeju.com`,
   select the Free plan.
2. Cloudflare shows the two assigned nameservers, for example
   `ada.ns.cloudflare.com` and `rick.ns.cloudflare.com`. Write them down.

### 2. Point the domain at Cloudflare (Spaceship)

1. Log in to Spaceship, open the `divingjeju.com` domain, `Nameservers`.
2. Change from Spaceship default to custom nameservers.
3. Enter the two Cloudflare nameservers from step 1.
4. Save. Propagation takes up to 24 hours; usually less than 1 hour.
   Cloudflare sends an email when the zone is active.

### 3. Create the Cloudflare project (Workers Git integration)

The dashboard uses the unified Workers flow (not the old Pages flow).
The project deploys through `npx wrangler deploy` and serves the `dist`
folder as static assets, configured by `wrangler.jsonc` in the repo root.

1. In Cloudflare, go to `Workers & Pages`, then `Create application`,
   then `Import a repository`.
2. Connect the GitHub account if needed, grant access to
   `AntoineChalons/jeju-scuba-finder`.
3. Select the repository. Set:
   - Project name: `divingjeju` — must match `name` in `wrangler.jsonc`
   - Production branch: `main`
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (default, leave it)
   - `Build for non-production branches`: off
   - `Protect with Cloudflare Access`: off
   - Add build variable `NODE_VERSION` = `24` if the form offers it
     (otherwise add it later under Settings → Builds → Variables)
4. Save and deploy. The first build runs on the current `main`.

### 4. Verify the preview URL

1. Open the `workers.dev` URL shown at the top of the deployment
   (`https://divingjeju.<account-subdomain>.workers.dev`).
2. Confirm that the club table loads, the map draws, and the language
   switcher works. If the database fetch fails, check the browser console
   for CORS errors; GitHub Pages must answer with
   `Access-Control-Allow-Origin: *`.

### 5. Attach the custom domain

1. Open the `divingjeju` Worker, then `Settings`, then
   `Domains & Routes`.
2. Click `Add`, then `Custom domain`, enter `divingjeju.com`, confirm.
3. The zone is on the same Cloudflare account, so the DNS record is
   created automatically. The certificate is issued within minutes.
4. Open `https://divingjeju.com/` and repeat the checks from step 4.
5. Optionally add `www.divingjeju.com` the same way, then add a redirect
   rule to the apex domain.

### 6. Update the GitHub Pages settings page

The Pages site was unpublished by API. In the repository, `Settings`,
`Pages`: confirm that the source shows no active publication. If any
custom domain remains in the settings, remove it so no redirect or DNS
check stays behind.

## Post-migration checks

- [ ] `https://divingjeju.com/` serves the app with a valid certificate
- [ ] The `workers.dev` URL also serves the app
- [ ] The club database loads (check the Network tab for
      `dive_clubs.db`, status 200)
- [ ] A push to `main` triggers both the GitHub Actions CI gate and a
      new Cloudflare build and deploy
- [ ] A pull request triggers the CI gate only
- [ ] The old GitHub Pages URL no longer serves the app (expected)

## Follow-up work in the SEO plan

- Issue #26: canonical URLs and `sitemap.xml` must use
  `https://divingjeju.com/`.
- Issue #27: register Google Search Console, Bing Webmaster Tools and
  Naver Search Advisor with the new domain.
- Issue #33: start the off-site links after the domain is live.

## Notes

- The old `*.github.io/jeju-scuba-finder/` URL now returns 404. GitHub
  cannot redirect it to the new domain once Pages is unpublished. Since
  the site is new, this is the clean cut. If inbound links exist later,
  publish a one-page static redirect at the old URL instead.
- Optional improvement: copy `dive_clubs.db` into `dist` during the
  Cloudflare build so the app loads first-party data. This removes the
  cross-origin dependency, but it changes `src/db-loader.js` and the
  data-publication contract. Do it only after the migration is stable.
- Cloudflare Pages free plan covers this traffic with no cost.
