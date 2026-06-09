/**
 * Content & data layer — single import point.
 *
 *   import { site, services, projects, getSeo } from '../data';
 *
 * Everything your site's text and structured data lives under `src/data/`
 * (and blog posts under `src/content/blog/`). See CONTENT-GUIDE.md.
 */

export { site } from './site';
export type { Site } from './site';

export { seo, getSeo } from './seo';
export type { PageSeo } from './seo';

export { mainNav, footerColumns, legalNav } from './navigation';
export type { NavLink, FooterColumn } from './navigation';

export { services } from './services';
export type { Service } from './services';

export { projects } from './projects';
export type { Project } from './projects';

export {
  organizationSchema,
  articleSchema,
  breadcrumbSchema,
} from './structured-data';

// Page section text
export { home } from './pages/home';
export { about } from './pages/about';
export type { Value } from './pages/about';
export { contact } from './pages/contact';
export type { ProcessStep } from './pages/contact';
export { servicesPage, ourWorkPage, blogPage } from './pages/landing';
