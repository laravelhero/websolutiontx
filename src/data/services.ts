/**
 * Service offerings — structured, reusable data for the services page,
 * homepage service grid and footer.
 *
 * Add a new service by appending an object to the array below. Seeded
 * from your current /services page copy.
 */

export interface Service {
  /** URL-friendly id, handy for anchors or future detail pages. */
  slug: string;
  /** Service name / heading. */
  title: string;
  /** Short marketing description. */
  description: string;
  /** Optional emoji or icon key for the card. */
  icon?: string;
}

export const services: Service[] = [
  {
    slug: 'web-development-design',
    title: 'Web Development & Design',
    description:
      'We build high-converting, fast, and secure websites that work flawlessly across all devices. Designed from day one with SEO and user experience in mind to transform visitors into customers.',
    icon: '🖥️',
  },
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description:
      'Rank higher and capture buyers before your competitors do. We coordinate search positioning blueprints across tech architecture, high-value local pages, and backlinking.',
    icon: '📈',
  },
  {
    slug: 'ai-search-optimization',
    title: 'AI Search Optimization',
    description:
      'Get recommended by AI. We configure websites, citation references, and content structures so emerging AI platforms trust and refer your business.',
    icon: '🤖',
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    description:
      'Maximize visibility inside local search and maps. We manage reviews, local ranking setups, posts, and details to capture users looking to buy nearby.',
    icon: '📍',
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    description:
      'Keep your website secure, fast, and stable round-the-clock. We handle technical audits, backups, and security threats so you can focus on operations.',
    icon: '🛠️',
  },
  {
    slug: 'google-ads-ppc',
    title: 'Google Ads & PPC Marketing',
    description:
      'Drive immediate, high-quality targeted phone calls and form entries. We construct paid campaigns that optimize conversion values while lowering your CPA.',
    icon: '🎯',
  },
];
