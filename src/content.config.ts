import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog content collection.
 *
 * Add a new post by dropping a Markdown file into `src/content/blog/`.
 * The file name (without `.md`) becomes the post slug.
 * Everything between the `---` fences is the post's data; everything
 * below it is the article body (written in normal Markdown).
 *
 * This collection is fully self-contained — it does not change or render
 * any of your existing pages. See CONTENT-GUIDE.md for how to wire it up
 * to a page when you're ready.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** Post title (used in listings and the post hero). */
    title: z.string(),
    /** Short summary shown in the blog index cards. */
    excerpt: z.string(),
    /** Publish date — write as YYYY-MM-DD (e.g. 2026-05-31). */
    publishDate: z.coerce.date(),
    /** Human-readable reading time, e.g. "7 min read". */
    readTime: z.string(),
    /** Category label shown as a tag, e.g. "Dental Practices". */
    category: z.string(),
    /** Tailwind classes for the category tag gradient (optional). */
    tagColor: z.string().optional(),
    /** Longer headline shown at the top of the post (falls back to title). */
    heroHeadline: z.string().optional(),
    /** Author display name. */
    author: z.string().default('Texas SEO Expert Team'),
    /** Author sub-title / organisation. */
    authorTitle: z.string().default('Websolution Digital Marketing Agency'),
    /** SEO overrides — leave blank to fall back to title/excerpt. */
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    /** Optional social-share image (path under /public). */
    ogImage: z.string().optional(),
    /** Set true to hide the post from listings while you draft it. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
