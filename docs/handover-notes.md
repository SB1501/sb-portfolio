# Handover Notes

This document is written for the next developer asked to maintain or extend the site.

## What To Understand First

- The homepage is the main product surface, not a secondary feed page
- Content is local-file driven, so markdown structure matters
- The private CV is the only authenticated area
- Many pages are intentionally hand-crafted rather than generated from shared data models

## Where To Start Reading In Code

Read these files in this order:

1. [`app/layout.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/layout.tsx)
2. [`lib/updates.ts`](/Users/shanebunting/Developer/sb-portfolio/lib/updates.ts)
3. [`app/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/page.tsx)
4. [`app/updates/[slug]/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/updates/[slug]/page.tsx)
5. [`middleware.ts`](/Users/shanebunting/Developer/sb-portfolio/middleware.ts)
6. [`app/cv-private/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/cv-private/page.tsx)

## Common Maintenance Tasks

### Add a new update

- Add markdown in `content/updates`
- Confirm metadata is correct
- Check homepage display
- Check update detail page

### Change homepage layout

- Work mainly in [`app/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/page.tsx)
- Be careful not to break special rendering for `status` and `video` items
- Verify tag filtering still works

### Change project entries

- Work in [`app/projects/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/projects/page.tsx)
- This page is currently curated directly in JSX

### Change CV content

- Public CV: edit [`app/cv/page.tsx`](/Users/shanebunting/Developer/sb-portfolio/app/cv/page.tsx)
- Private CV: edit local markdown at `private-content/cv-private.md`

### Change private access

- Work in [`middleware.ts`](/Users/shanebunting/Developer/sb-portfolio/middleware.ts)
- Avoid changing auth behaviour without checking the deployment environment variables

## Known Sharp Edges

- `app/middleware.ts` duplicates root middleware logic and should likely be removed
- `app/page.tsx` is large and mixes data selection with rendering branches
- `app/updates/[slug]/page.tsx` repeats some parsing logic already implied by `lib/updates.ts`
- Public route coverage in the sitemap is incomplete

## Good First Refactors

If asked to improve maintainability without changing the product much, start here:

1. Remove duplicate middleware implementation
2. Extract homepage feed card variants into smaller components
3. Centralize update parsing logic to reduce duplication
4. Add frontmatter validation for markdown content

## Team-Style Working Notes

If this were a company codebase, these would be my practical rules before shipping changes:

- run lint before merging
- test the homepage, one update page, `/projects`, `/cv`, and `/cv-private`
- confirm image/video assets still load
- check auth still fails closed when credentials are missing
- update docs when route contracts or content shape change

## Mental Model For Safe Change

Before editing, decide which category your task belongs to:

- content change
- presentation change
- route change
- auth change
- operational change

That classification usually tells you which files and docs must be reviewed together.
