# Content & Data Guide

This project now has a central place to manage **all text, posts, SEO and
structured data** — without touching your existing page designs.

> **Important:** Adding this layer changed **nothing** on your current pages.
> Every page still renders exactly as before. The files below are a library
> you *opt into*, page by page, whenever you're ready.

---

## 📍 Where everything lives

| What you want to edit | File |
|---|---|
| Business name, phone, email, address, social links | `src/data/site.ts` |
| Page titles & meta descriptions (SEO) for every page | `src/data/seo.ts` |
| Header & footer menu links | `src/data/navigation.ts` |
| Services list | `src/data/services.ts` |
| Portfolio / "Our Work" projects | `src/data/projects.ts` |
| Homepage hero & section text | `src/data/pages/home.ts` |
| About page text & company values | `src/data/pages/about.ts` |
| Contact page text & process steps | `src/data/pages/contact.ts` |
| Services / Our Work / Blog hero text | `src/data/pages/landing.ts` |
| **Blog posts** | `src/content/blog/*.md` |
| Google/AI structured data (JSON-LD) builders | `src/data/structured-data.ts` |

Everything is also re-exported from `src/data/index.ts` so you can import in one line:

```ts
import { site, services, projects, getSeo } from '../data';
```

---

## ✍️ Adding a new blog post

1. Create a file in `src/content/blog/`, e.g. `my-new-post.md`.
   The file name becomes the URL slug.
2. Fill in the front-matter and write the body in Markdown:

```markdown
---
title: "My New Post Title"
excerpt: "A one-line summary shown on the blog index."
publishDate: 2026-06-10
readTime: "5 min read"
category: "Local SEO"
tagColor: "from-blue-500/20 to-teal-500/10 text-blue-400 border-blue-500/20"
draft: false
---

Your article content goes here. Use normal Markdown:

## A heading

A paragraph with **bold** and *italic* text.

- bullet points
- like this
```

3. Save. The post is validated automatically (you'll get an error if a
   required field is missing). Set `draft: true` to keep it hidden.

> The 5 existing blog posts have already been migrated into
> `src/content/blog/` as Markdown, so you can manage them all from there.

---

## 🔍 Editing SEO

All page titles and meta descriptions are in **`src/data/seo.ts`**, one entry
per route. Edit the text there. `site.url` in `src/data/site.ts` should be set
to your real domain before launch — it's used to build canonical URLs and
social-share links.

---

## 🔌 How to "wire up" a page (optional, when you're ready)

Your pages currently have their text written inline. To make a page read from
this central data instead, import what you need. Nothing forces you to do this
all at once — migrate one piece at a time.

**Example — give every page rich SEO tags + Google structured data.**
Your `Layout.astro` already exposes a `head` slot, so you don't need to change
the layout at all:

```astro
---
import Layout from '../layouts/Layout.astro';
import Seo from '../components/Seo.astro';
import { getSeo, organizationSchema } from '../data';

const meta = getSeo(Astro.url.pathname);
---
<Layout title={meta.title} description={meta.description}>
  <Seo slot="head" {...meta} jsonLd={[organizationSchema()]} />

  <!-- your existing page content, untouched -->
</Layout>
```

**Example — render the services grid from data:**

```astro
---
import { services } from '../data';
---
{services.map((s) => (
  <div>
    <h3>{s.title}</h3>
    <p>{s.description}</p>
  </div>
))}
```

**Example — list blog posts from the collection** (replaces the hard-coded
array in `src/pages/blog/index.astro` when you choose to):

```astro
---
import { getCollection } from 'astro:content';
const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
---
{posts.map((post) => (
  <a href={`/blog/${post.id}`}>{post.data.title}</a>
))}
```

---

## 🧱 Files added (summary)

```
src/
├── content.config.ts          # blog collection schema
├── content/blog/*.md           # 5 posts (your real content)
├── components/Seo.astro        # opt-in SEO <head> block
└── data/
    ├── index.ts                # one-line import barrel
    ├── site.ts                 # business identity + contact + SEO defaults
    ├── seo.ts                  # per-page title/description
    ├── navigation.ts           # header + footer links
    ├── services.ts             # services
    ├── projects.ts             # portfolio
    ├── structured-data.ts      # JSON-LD builders
    └── pages/
        ├── home.ts
        ├── about.ts
        ├── contact.ts
        └── landing.ts
```

Nothing else in the project was modified.
```
