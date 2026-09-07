import { defineConfig } from 'vite';

// The site is served from the domain root of divingjeju.com on Cloudflare
// Pages, so asset URLs use the standard absolute root path.
export default defineConfig({
  base: '/',
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
