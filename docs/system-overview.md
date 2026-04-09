# System Overview

## Purpose

This repository contains a personal portfolio website for Shane Bunting. It presents:

- a homepage updates feed
- individual update pages
- a curated projects page
- a public CV
- a protected private CV

The system is intentionally lightweight. It uses local markdown files and static assets instead of a database or CMS, which keeps content ownership simple and hosting requirements low.

## System Style

This is a small content-driven web application built with the Next.js App Router. The architecture is best understood as three layers:

1. Content layer
   Markdown files and static media stored in the repo or local private content folders
2. Domain layer
   Server-side helpers that parse and normalize content into display-ready data
3. Presentation layer
   Route components and shared UI that render the user-facing pages

## High-Level Architecture

```text
Browser
  -> Next.js routes in app/
    -> shared layout and components
    -> route-specific page components
      -> server-side file reads for markdown content
        -> content/updates/*.md
        -> private-content/cv-private.md
      -> static assets from public/
```

## Main Responsibilities By Area

### `app/`

- Owns routes, metadata, page composition, redirects, and page-level rendering
- Contains the shared `layout.tsx` shell for the whole site

### `components/`

- Owns reusable visual building blocks such as the header, footer, logo, and sidebar card wrapper

### `lib/`

- Owns content parsing and normalization logic
- `lib/updates.ts` is the core domain helper for the homepage feed and update pages

### `content/updates/`

- Owns public updates content in markdown form

### `private-content/`

- Intended to own local-only private CV markdown
- Not part of the tracked public content flow

### `public/`

- Owns static assets such as images, logos, screenshots, and background video

### `middleware.ts`

- Owns request protection for `/cv-private`

## Runtime Behaviour

- The site primarily uses server-rendered React components
- Markdown content is read from the filesystem on the server
- Update detail routes are statically parameterized via `generateStaticParams()`
- Basic Auth is enforced before the private CV route is served

## Design Philosophy

The codebase appears to optimize for:

- directness over abstraction
- local file ownership over external services
- hand-crafted presentation over generic templates
- simplicity of publishing content over admin tooling

That is an appropriate shape for a personal site, but it means some route files now carry both presentation and content-assembly responsibilities.

## Core User Journeys

- Visitor lands on `/` and reads the latest updates
- Visitor opens an individual update page from the feed
- Visitor browses curated work on `/projects`
- Visitor reads the public CV on `/cv`
- Authorized viewer accesses `/cv-private`

## Current Strengths

- Simple mental model
- Few runtime dependencies
- Content updates do not require a CMS
- Clear separation between public and private CV content

## Current Weak Points

- Duplicate middleware implementation exists in two locations
- Homepage logic is concentrated in a single large route file
- The content schema is informal rather than centrally validated
- Operational knowledge previously lived mostly in code and convention

## What A New Engineer Should Understand First

If joining the project, the fastest route to competence is:

1. Understand `app/layout.tsx` because it defines the global shell and metadata.
2. Understand `lib/updates.ts` because it drives the content feed.
3. Understand `app/page.tsx` and `app/updates/[slug]/page.tsx` because together they define the public content experience.
4. Understand `middleware.ts` and `app/cv-private/page.tsx` because they define the auth boundary and private content path.
