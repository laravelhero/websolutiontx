/**
 * Global site configuration — the single source of truth for your
 * business identity, contact details, social links and SEO defaults.
 *
 * Edit anything here and it can be reused across every page. This file
 * is plain data: changing it does NOT alter any existing page until you
 * choose to import it (see CONTENT-GUIDE.md).
 */

export const site = {
  /** Brand / company name. */
  name: 'WebSolution',
  legalName: 'WebSolution Digital Marketing Agency',

  /**
   * Production URL of the site (no trailing slash). Used to build
   * absolute URLs for canonical tags, sitemaps and social cards.
   * Update this to your real domain when you deploy.
   */
  url: 'https://websolutiontx.com',

  /** Short tagline shown in hero / meta. */
  tagline: "Houston's Trusted Website Design, SEO, AI Optimization & Digital Marketing Agency",

  /** One-line description used as the default meta description. */
  description:
    'Get Found on Google, AI Search & Beyond. Complete Digital Growth Solutions for Houston Businesses.',

  /** Path (under /public) to the logo. */
  logo: '/images/websolution-logo.png',

  /** Default social-share image used when a page does not set its own. */
  defaultOgImage: '/images/heroSecion.png',

  /** Contact details — reused by the navbar, footer and contact page. */
  contact: {
    phone: '+1 (832) 266-7209',
    /** Used in tel: links — digits only, with country code. */
    phoneHref: 'tel:+18322667209',
    email: 'websolutiontx@gmail.com',
    emailHref: 'mailto:websolutiontx@gmail.com',
  },

  /** Physical location — powers the LocalBusiness structured data. */
  address: {
    city: 'Houston',
    region: 'TX',
    regionName: 'Texas',
    country: 'US',
  },

  /** Social profiles. Leave a value empty ('') to hide it. */
  social: {
    twitter: '',
    linkedin: '',
    instagram: '',
    facebook: '',
  },

  /** Areas you serve — used in copy and structured data. */
  serviceAreas: [
    'Houston',
    'Sugar Land',
    'Katy',
    'The Woodlands',
    'Austin',
    'Dallas',
    'San Antonio',
  ],
} as const;

export type Site = typeof site;
