// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your live custom domain. Used for canonical URLs, the sitemap,
  // social-share links and JSON-LD structured data.
  site: 'https://websolutiontx.com',

  // IMPORTANT: do NOT set `base` here.
  // A custom apex domain (websolutiontx.com) serves the site from the
  // root "/", so assets must load from "/_astro/...". Setting a base such
  // as "/websolutiontx" would make CSS/JS load from "/websolutiontx/_astro/..."
  // which 404s on the custom domain — that was the cause of the missing CSS.

  // Treat "/about" and "/about/" the same.
  trailingSlash: 'ignore',

  // Speed up navigation by prefetching links as they enter the viewport.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Image optimization defaults (matches our other projects). Plain <img>
  // tags are unaffected; this applies when you use Astro's <Image>/<Picture>.
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },

  // Generates /sitemap-index.xml + /sitemap-0.xml at build time (great for SEO).
  integrations: [sitemap()],
});
