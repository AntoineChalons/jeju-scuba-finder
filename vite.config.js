import { defineConfig } from 'vite';

// GitHub Pages project sites are served from a subpath (e.g. /jeju-scuba-finder/),
// so asset URLs must be relative rather than absolute.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rolldownOptions: {
      output: {
        // Force a new entry URL for the public-data architecture release.
        // This prevents GitHub Pages caches from serving the earlier bundle.
        entryFileNames: 'assets/[name]-[hash]-public-data.js'
      }
    }
  }
});
