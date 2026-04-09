# Stack Map

This document explains the technology choices in the repo and where each one appears in the codebase.

## Application Framework

### Next.js 16

- Used as the main web framework
- Provides the App Router, route files, layout system, metadata, redirects, sitemap support, and middleware
- Main locations:
  - [`app/layout.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/layout.tsx)
  - [`app/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/page.tsx)
  - [`app/updates/[slug]/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/updates/[slug]/page.tsx)
  - [`middleware.ts`](/Users/shanebunting/Developer/sb-portfolio/middleware.ts)

## UI Layer

### React 19

- Used for all page and component rendering
- Current code relies on server components by default for page routes

### Tailwind CSS 4

- Used for styling via utility classes
- Imported in [`app/globals.css`](/Users/shanebunting/Developer/sb-portfolio/app/globals.css)
- Typography plugin is enabled for markdown-rendered pages

### Lucide React

- Used for iconography
- Appears across route files and shared UI components

## Language And Tooling

### TypeScript

- Used throughout the app for route, component, and helper code
- Path alias `@/*` is configured in [`tsconfig.json`](/Users/shanebunting/Developer/sb-portfolio/tsconfig.json)

### ESLint

- Used for linting
- Configured with Next.js core web vitals and TypeScript rules in [`eslint.config.mjs`](/Users/shanebunting/Developer/sb-portfolio/eslint.config.mjs)

## Content And Parsing

### Markdown

- Public updates are authored as markdown files in `content/updates`
- Private CV content is expected as local markdown in `private-content/cv-private.md`

### `gray-matter`

- Parses frontmatter from markdown files
- Used in:
  - [`lib/updates.ts`](/Users/shanebunting/Developer/sb-portfolio/lib/updates.ts)
  - [`app/updates/[slug]/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/updates/[slug]/page.tsx)
  - [`app/cv-private/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/cv-private/page.tsx)

### `remark` and `remark-html`

- Convert markdown content into HTML for rendering
- Used in update detail pages and the private CV page

## Static Assets

### `public/`

- Stores screenshots, logos, app imagery, OG image, and background video
- Assets are referenced directly by route components and `next/image`

## Analytics

### Vercel Analytics

- Client-side analytics integration included in the root layout
- Used in [`app/layout.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/layout.tsx)

## Security

### Basic Authentication Middleware

- Request protection for `/cv-private`
- Credentials are read from environment variables
- Implemented in [`middleware.ts`](/Users/shanebunting/Developer/sb-portfolio/middleware.ts)

## Hosting Shape

The repo is structured like a typical Vercel-friendly Next.js app:

- build command: `next build`
- production start: `next start`
- analytics package already assumes Vercel usage

This does not prove Vercel is the only valid host, but the current setup is clearly optimized for that model.

## Important Absences

Understanding what is not here is also useful:

- no database
- no external CMS
- no API routes
- no test suite yet
- no schema validation layer for markdown frontmatter
- no role-based auth system beyond Basic Auth for one protected route

These absences reduce complexity, but they also define where future growth pressure is likely to show up first.
