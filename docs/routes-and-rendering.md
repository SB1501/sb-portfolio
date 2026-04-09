# Routes And Rendering

This document maps each route to its implementation and explains how the page is produced.

## Global Shell

### Root layout

- File: [`app/layout.tsx`](../app/layout.tsx)
- Responsibilities:
  - imports global CSS
  - loads Google fonts
  - defines metadata and social previews
  - renders the site-wide video background
  - includes the header, footer, and analytics

Everything rendered by page routes sits inside this shared shell.

## Route Map

### `/`

- File: [`app/page.tsx`](../app/page.tsx)
- Role: homepage and canonical updates feed
- Behaviour:
  - reads all updates via `lib/updates.ts`
  - optionally filters by `?tag=`
  - mixes three kinds of feed cards:
    - post
    - video
    - status
  - renders a sidebar with curated links and filters

### `/updates`

- File: [`app/updates/page.tsx`](../app/updates/page.tsx)
- Role: compatibility redirect
- Behaviour:
  - redirects to `/`

### `/updates/[slug]`

- File: [`app/updates/[slug]/page.tsx`](../app/updates/%5Bslug%5D/page.tsx)
- Role: detail page for a markdown update
- Behaviour:
  - statically enumerates available slugs from markdown files
  - reads a matching markdown file from `content/updates`
  - parses frontmatter and markdown body
  - renders embedded YouTube iframe for `video` items when `youtubeId` exists
  - returns `notFound()` for missing slugs

### `/projects`

- File: [`app/projects/page.tsx`](../app/projects/page.tsx)
- Role: curated portfolio page
- Behaviour:
  - mostly static JSX
  - uses images and local videos from `public/`
  - currently content-driven by code, not markdown

### `/cv`

- File: [`app/cv/page.tsx`](../app/cv/page.tsx)
- Role: public CV page
- Behaviour:
  - static structured content defined directly in the route file
  - uses arrays in code for experience, education, skills, and courses

### `/cv-private`

- File: [`app/cv-private/page.tsx`](../app/cv-private/page.tsx)
- Protected by: [`middleware.ts`](../middleware.ts)
- Role: private expanded CV
- Behaviour:
  - checks for local markdown file `private-content/cv-private.md`
  - parses markdown to HTML if available
  - shows fallback guidance if the file is missing

### Not found handling

- File: [`app/not-found.tsx`](../app/not-found.tsx)
- Role: shared 404 experience

### Sitemap

- File: [`app/sitemap.ts`](../app/sitemap.ts)
- Role: exposes a small sitemap
- Current limitation:
  - only includes `/`, `/projects`, and `/updates`
  - does not currently include update detail pages or `/cv`

## Rendering Notes

- Route components are async where they need server-side content reads
- Content is read from the filesystem, so those reads happen server-side
- There are no client-only interactive flows driving the main architecture
- The site is primarily a server-rendered content app with rich presentation

## Change Impact Guide

When changing a route, understand which kind of change you are making:

- visual-only change
  - usually isolated to JSX and Tailwind classes
- content source change
  - affects `lib/updates.ts` or markdown files
- route contract change
  - affects links, sitemap, redirects, and user expectations
- auth boundary change
  - affects middleware and private content access

## Highest-Risk Route Areas

- [`app/page.tsx`](../app/page.tsx)
  Large homepage file with mixed rendering rules for multiple update types
- [`app/updates/[slug]/page.tsx`](../app/updates/%5Bslug%5D/page.tsx)
  Owns markdown rendering and dynamic route generation
- [`middleware.ts`](../middleware.ts)
  Defines the only route protection in the app
