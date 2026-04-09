# Content Model

This document describes how content is stored, parsed, and rendered.

## Public Content Sources

### Updates

- Location: `content/updates/*.md`
- Consumed by:
  - [`lib/updates.ts`](../lib/updates.ts)
  - [`app/page.tsx`](../app/page.tsx)
  - [`app/updates/[slug]/page.tsx`](../app/updates/%5Bslug%5D/page.tsx)

Each markdown file becomes one update item. For `post` and `video` items, that also means a detail page under `/updates/[slug]`.

## Private Content Sources

### Private CV

- Location: `private-content/cv-private.md`
- Consumed by:
  - [`app/cv-private/page.tsx`](../app/cv-private/page.tsx)

This file is intentionally kept outside the public content area and is expected to exist only in environments where the private CV is needed.

## Update Frontmatter

The code currently supports these main fields:

```md
---
title: "Example Update"
date: "2026-04-09"
tags: ["next.js", "typescript"]
type: "post"
excerpt: "Short summary shown in feed cards."
coverImage: "/images/example.webp"
youtubeId: "abcdefghijk"
---
```

## Field Behaviour

- `title`
  - Display title for the update
  - Falls back to slug if missing
- `date`
  - Used for sorting and display
  - Sorting assumes values can be converted to valid dates
- `tags`
  - Accepts an array or comma-separated string
  - Normalized to lowercase
- `type`
  - Supported values:
    - `post`
    - `video`
    - `status`
  - Unknown values fall back to `post`
- `excerpt`
  - Used in the feed card when present
  - Falls back to the first meaningful content line when absent
- `coverImage`
  - Used for non-video cards
  - Defaults to `/images/default-coverimage.webp` for non-status items
- `youtubeId`
  - Used only for `video` entries

## Content Processing Flow

### Feed processing

1. `lib/updates.ts` reads markdown filenames from `content/updates`.
2. Each file is parsed with `gray-matter`.
3. Frontmatter is normalized into the `Update` type.
4. Excerpts and tags are cleaned up.
5. Updates are sorted newest-first.
6. The homepage consumes the resulting array.

### Detail page processing

1. `/updates/[slug]` resolves a markdown file path from the slug.
2. Frontmatter is parsed.
3. Markdown body content is converted to HTML with `remark`.
4. The page renders metadata and content.

### Private CV processing

1. The private route checks whether `private-content/cv-private.md` exists.
2. Frontmatter is parsed but only the markdown content body is rendered.
3. Markdown is converted to HTML with `remark`.

## Important Conventions

- Tag display labels are defined in [`lib/updates.ts`](../lib/updates.ts)
- Tags are normalized internally even if the source markdown uses mixed casing
- Status updates are intentionally displayed on the homepage as feed snippets, not navigable detail experiences

## Weaknesses In The Current Model

- There is no formal schema validation for frontmatter
- Invalid or inconsistent dates could affect sort order
- A missing image path would fail only at render/use time, not at content validation time
- The same parsing rules are partly duplicated between the homepage helper and the detail route

## Safe Content Editing Rules

- Keep `date` in ISO-like format such as `YYYY-MM-DD`
- Keep `type` to one of the supported values
- Prefer lowercase tags even though normalization exists
- Add `coverImage` for richer non-video cards
- Use `youtubeId` only for video entries

## Future Improvement Options

- Add frontmatter validation with a schema library
- Move repeated update parsing into a shared helper
- Introduce a content lint/check step for malformed markdown metadata
