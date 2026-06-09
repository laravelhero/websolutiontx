/**
 * Per-page SEO metadata — one entry per route.
 *
 * This is where you edit the <title> and meta description for every page,
 * plus optional canonical paths and social-share images. Keeping it all in
 * one file makes the whole site auditable at a glance and keeps your SEO
 * consistent.
 *
 * The titles/descriptions below mirror what your pages currently use, so
 * nothing changes visually. Use `getSeo('/about')` (see helper at the
 * bottom) when you wire a page up to read from here.
 */

import { site } from './site';

export interface PageSeo {
  /** Browser tab + search result title. Keep under ~60 characters. */
  title: string;
  /** Search result snippet. Aim for 150–160 characters. */
  description: string;
  /** Canonical path (e.g. '/about'). Defaults to the route itself. */
  canonical?: string;
  /** Social-share image path under /public. Falls back to site default. */
  ogImage?: string;
  /** Set true to ask search engines not to index this page. */
  noindex?: boolean;
}

/** SEO config keyed by route path. */
export const seo: Record<string, PageSeo> = {
  '/': {
    title: "WebSolution | Houston's Trusted Web Design, SEO & AI Agency",
    description:
      'Get Found on Google, AI Search & Beyond. Complete Digital Growth Solutions for Houston Businesses.',
    ogImage: '/images/heroSecion.png',
  },
  '/about': {
    title: 'About WebSolution | Houston Digital Marketing Agency',
    description:
      'Meet the Houston-based team helping forward-thinking brands design, build, and grow their online presence with web design, SEO and AI optimization.',
    ogImage: '/images/about-team.png',
  },
  '/services': {
    title: 'Services | Web Design, SEO, AI Optimization & PPC | WebSolution',
    description:
      'Web development, SEO, AI Search Optimization, Google Business Profile, website maintenance and Google Ads management for Texas businesses.',
  },
  '/our-work': {
    title: 'Our Work | WebSolution Portfolio & Case Studies',
    description:
      'See how WebSolution helps brands grow — from luxury e-commerce redesigns to fintech dashboards, SaaS landing pages and HIPAA-compliant healthcare portals.',
    ogImage: '/images/our-work-hero.png',
  },
  '/contact': {
    title: 'Contact WebSolution | Free Consultation for Houston Businesses',
    description:
      'Talk to our Houston digital marketing team about web design, SEO, AI search optimization, Google Maps and PPC. Call (832) 266-7209 for a free consultation.',
  },
  '/blog': {
    title: 'Insights & Local Search Marketing Blog | WebSolution',
    description:
      'Advanced digital marketing guides, local SEO tutorials, AI Search Optimization (AISO) tips, and local ranking checklists for Texas business growth.',
  },
  '/small-business-website-design-services': {
    title: 'Small Business Website Design Services in Texas | WebSolution',
    description:
      'Affordable, high-converting website design for Texas small businesses — built for speed, SEO and lead generation from day one.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | WebSolution',
    description: 'How WebSolution collects, uses and protects your personal information.',
    noindex: true,
  },
  '/terms-of-service': {
    title: 'Terms of Service | WebSolution',
    description: 'The terms and conditions governing the use of WebSolution services and website.',
    noindex: true,
  },
};

/**
 * Resolve the SEO config for a route, filling in sensible defaults from
 * `site` so callers always get a complete object.
 */
export function getSeo(path: string): Required<Omit<PageSeo, 'noindex'>> & { noindex: boolean } {
  // Normalise: strip trailing slash (except root).
  const key = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  const entry = seo[key] ?? {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  };
  return {
    title: entry.title,
    description: entry.description,
    canonical: site.url + (entry.canonical ?? key),
    ogImage: entry.ogImage ?? site.defaultOgImage,
    noindex: entry.noindex ?? false,
  };
}
