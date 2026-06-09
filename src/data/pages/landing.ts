/**
 * Simple hero / heading text for the remaining pages.
 *
 * Section detail for these pages currently lives inline in the .astro
 * files. As you centralise more copy, expand these objects (e.g. add a
 * `sections` array) the same way home/about/contact are structured.
 */

export const servicesPage = {
  hero: {
    headline: 'All the Digital Services Your Business Needs.',
  },
  // Individual services live in `src/data/services.ts`.
};

export const ourWorkPage = {
  hero: {
    headline: 'Projects That Speak for Themselves.',
  },
  // Individual projects live in `src/data/projects.ts`.
};

export const blogPage = {
  hero: {
    badge: 'Websolution Blog',
    headlineLead: 'Insights for',
    headlineHighlight: 'Local Dominance.',
    subheading:
      'Expert blueprints, SEO strategies, and digital marketing guides engineered to help Texas dental clinics, law firms, contractors, and businesses double their local lead volume.',
  },
  // Individual posts live in `src/content/blog/*.md`.
};
