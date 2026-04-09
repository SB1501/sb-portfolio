# SB Portfolio

Personal portfolio site built with Next.js, TypeScript and Tailwind CSS.

## What is here

- Homepage updates feed
- Markdown-driven update pages
- Projects page
- Public CV
- Private CV behind basic auth

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `gray-matter`
- `remark` and `remark-html`
- Vercel Analytics

## Local development

```bash
npm install
npm run dev
```

## Useful scripts

```bash
npm run lint
npm run validate:content
npm run smoke
npm run build
```

## Notes

- Public update posts live in `content/updates`
- Private CV auth uses `CV_USER` and `CV_PASS`
- Private CV content is expected at `private-content/cv-private.md`

## Live site

https://www.shanebunting.dev/
