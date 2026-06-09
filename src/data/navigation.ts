/**
 * Site navigation — the links used in the header and footer.
 *
 * Add, remove or reorder links here in one place. Matches your current
 * navbar and footer exactly.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Primary header navigation. */
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/** Footer link columns. */
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'App Development', href: '/services' },
      { label: 'UI/UX Design', href: '/services' },
      { label: 'Digital Marketing', href: '/services' },
      { label: 'SEO Optimization', href: '/services' },
      { label: 'Brand Strategy', href: '/services' },
    ],
  },
];

/** Legal links shown in the footer bottom bar. */
export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];
