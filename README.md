# SB Portfolio Website

Personal portfolio site built with Next.js, TypeScript, Tailwind CSS, and markdown-driven content.

## What This Repo Contains

- Updates feed on the homepage
- Individual update pages from markdown
- Project showcase
- Public CV
- Basic-auth protected private CV

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `gray-matter` for frontmatter parsing
- `remark` + `remark-html` for markdown rendering
- Vercel Analytics

## Docs

- Engineering docs index: [`docs/README.md`](/Users/shanebunting/Developer/sb-portfolio/docs/README.md)
- System overview: [`docs/system-overview.md`](/Users/shanebunting/Developer/sb-portfolio/docs/system-overview.md)
- Routes and rendering: [`docs/routes-and-rendering.md`](/Users/shanebunting/Developer/sb-portfolio/docs/routes-and-rendering.md)
- Content model: [`docs/content-model.md`](/Users/shanebunting/Developer/sb-portfolio/docs/content-model.md)
- Operations: [`docs/operations.md`](/Users/shanebunting/Developer/sb-portfolio/docs/operations.md)

## Development

```bash
npm run dev
```

## Production Notes

- Update posts live in `content/updates`
- Private CV auth uses `CV_USER` and `CV_PASS`
- Private CV markdown is expected at `private-content/cv-private.md`

## Link

https://www.shanebunting.dev/
