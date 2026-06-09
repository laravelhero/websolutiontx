/**
 * JSON-LD structured-data builders.
 *
 * Search engines and AI engines use this machine-readable data to
 * understand your business, articles and breadcrumbs. These functions
 * return plain objects — render them inside a
 * `<script type="application/ld+json">` tag (the <Seo> component does
 * this for you).
 */

import { site } from './site';

/**
 * LocalBusiness / Organization schema for the whole site.
 * This is the most valuable schema for a local Houston agency.
 */
export function organizationSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    logo: site.url + site.logo,
    image: site.url + site.defaultOgImage,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceAreas.map((name) => ({ '@type': 'City', name })),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** Article schema for a blog post. */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishDate: Date;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? site.url + opts.image : site.url + site.defaultOgImage,
    datePublished: opts.publishDate.toISOString(),
    author: { '@type': 'Organization', name: opts.author ?? site.legalName },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: site.url + site.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  };
}

/** Breadcrumb schema from an ordered list of { name, path } items. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: site.url + item.path,
    })),
  };
}
