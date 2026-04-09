# Operations

This document captures the practical setup and operational assumptions for the site.

## Local Development

Install dependencies and start the Next.js dev server:

```bash
npm install
npm run dev
```

Useful scripts from [`package.json`](../package.json):

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Environment Variables

The app currently depends on these environment variables for private CV access:

- `CV_USER`
- `CV_PASS`

If either variable is missing, the private CV route fails closed and returns an authentication challenge.

## Private Content Setup

To enable the private CV locally:

1. Create `private-content/cv-private.md`
2. Set `CV_USER`
3. Set `CV_PASS`
4. Visit `/cv-private` and authenticate with those credentials

If the markdown file is missing, the route still loads after authentication but shows a fallback message.

## Deployment Assumptions

The repo shape suggests a standard hosted Next.js deployment:

- build with `next build`
- serve with `next start` or a platform-managed equivalent
- expose `CV_USER` and `CV_PASS` in the deployment environment
- ensure local private markdown is present only in environments where it should be available

## Security Notes

- Protection is Basic Auth for a single route, not a full user account system
- Credentials are static environment variables
- The route is deliberately unavailable when credentials are not configured
- Private content access depends on both middleware protection and the presence of local markdown

## Observability

- Vercel Analytics is enabled in the root layout
- There is no dedicated logging, alerting, or incident runbook yet

## Operational Risks

- Duplicate middleware logic exists in both root and app directories, which could confuse maintainers
- The sitemap is incomplete relative to the actual route surface
- There is no automated content validation step during build or CI
- There is no automated test suite to catch regressions

## Recommended Low-Cost Improvements

- Remove the duplicate `app/middleware.ts` to reduce confusion
- Expand the sitemap to include all intended public routes
- Add a lint or validation step for markdown frontmatter
- Add at least a small smoke-test layer for core routes

## If Production Starts Failing

First checks:

1. Run `npm run build`
2. Confirm `CV_USER` and `CV_PASS` are set in the environment
3. Confirm expected files exist in `content/updates` and, if relevant, `private-content/cv-private.md`
4. Check whether the failure is route-specific, content-specific, or environment-specific

For this repo, most failures are likely to fall into one of these categories:

- malformed markdown/frontmatter
- missing asset path
- missing private content file
- missing auth environment variables
- route/component rendering error introduced during UI edits
