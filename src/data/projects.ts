/**
 * Portfolio / case-study items shown on the "Our Work" page.
 *
 * Add a project by appending to the array. Drop its image into
 * /public/images and reference it by path. Seeded from your current
 * /our-work page.
 */

export interface Project {
  /** Project / case-study title. */
  title: string;
  /** Category or discipline tag, e.g. "UI/UX", "E-Commerce". */
  category: string;
  /** Short result-focused description. */
  description: string;
  /** Image path under /public (optional). */
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Redesign',
    category: 'E-Commerce',
    description:
      'Complete redesign of a luxury fashion e-commerce store resulting in 47% increase in conversion rate.',
    image: '/images/project-ecommerce.png',
  },
  {
    title: 'Fintech Dashboard',
    category: 'Web App',
    description:
      'Real-time financial analytics dashboard serving 10,000+ active portfolio managers.',
    image: '/images/project-fintech.png',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Conversion',
    description:
      'High-converting SaaS landing page with A/B tested copy that reduced bounce rate by 38%.',
    image: '/images/project-saas.png',
  },
  {
    title: 'Healthcare Portal',
    category: 'Web App',
    description:
      'HIPAA-compliant patient portal with appointment booking and telemedicine integration.',
  },
  {
    title: 'Real Estate App',
    category: 'Mobile App',
    description:
      'Cross-platform property listing and management app with map-based search.',
  },
  {
    title: 'Brand Refresh',
    category: 'Branding',
    description:
      'Complete brand identity overhaul including visual guidelines, website, and digital campaigns.',
  },
];
