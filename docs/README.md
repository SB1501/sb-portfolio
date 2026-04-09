# Engineering Docs

This folder is the working documentation set for the portfolio site. It is written to help a new engineer understand the system, operate it locally, and make safe changes without reverse-engineering the whole repo first.

## Reading Order

1. [`system-overview.md`](/Users/shanebunting/Developer/sb-portfolio/docs/system-overview.md)
2. [`stack-map.md`](/Users/shanebunting/Developer/sb-portfolio/docs/stack-map.md)
3. [`routes-and-rendering.md`](/Users/shanebunting/Developer/sb-portfolio/docs/routes-and-rendering.md)
4. [`content-model.md`](/Users/shanebunting/Developer/sb-portfolio/docs/content-model.md)
5. [`operations.md`](/Users/shanebunting/Developer/sb-portfolio/docs/operations.md)
6. [`handover-notes.md`](/Users/shanebunting/Developer/sb-portfolio/docs/handover-notes.md)

## Why This Exists

Inline code comments are best for local complexity. Repo understanding, system shape, and maintenance guidance belong here instead.

## Document Set

- [`system-overview.md`](/Users/shanebunting/Developer/sb-portfolio/docs/system-overview.md)
  High-level system purpose, responsibilities, and architecture.
- [`stack-map.md`](/Users/shanebunting/Developer/sb-portfolio/docs/stack-map.md)
  Main technologies, where they are used, and why they matter.
- [`routes-and-rendering.md`](/Users/shanebunting/Developer/sb-portfolio/docs/routes-and-rendering.md)
  Page-by-page route map and rendering behaviour.
- [`content-model.md`](/Users/shanebunting/Developer/sb-portfolio/docs/content-model.md)
  Markdown content structure, frontmatter, and data flow.
- [`operations.md`](/Users/shanebunting/Developer/sb-portfolio/docs/operations.md)
  Setup, environment variables, deployment assumptions, and operational risks.
- [`handover-notes.md`](/Users/shanebunting/Developer/sb-portfolio/docs/handover-notes.md)
  Practical guidance for the next developer maintaining the site.
- [`decisions/0001-local-markdown-and-basic-auth.md`](/Users/shanebunting/Developer/sb-portfolio/docs/decisions/0001-local-markdown-and-basic-auth.md)
  Short architecture decision record for the current content/auth approach.

## Maintenance Rule

When the site structure changes, update the smallest number of docs that describe the changed truth:

- system shape changes: update `system-overview.md`
- route or rendering changes: update `routes-and-rendering.md`
- content schema changes: update `content-model.md`
- environment or deployment changes: update `operations.md`
- significant architectural choice: add a new ADR in `docs/decisions/`
