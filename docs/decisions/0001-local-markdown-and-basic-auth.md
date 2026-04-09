# ADR 0001: Use Local Markdown For Content And Basic Auth For The Private CV

## Status

Accepted

## Context

The site is a personal portfolio with a modest amount of content:

- public updates
- a public CV
- a private expanded CV
- curated project pages

The project does not currently need a database, editorial workflow system, or multi-user access model.

## Decision

- Store public updates as local markdown files in `content/updates`
- Store the private CV as local markdown in `private-content/cv-private.md`
- Protect `/cv-private` with Basic Auth using environment variables

## Why

- keeps the architecture simple
- avoids introducing CMS overhead
- makes content versioning straightforward for public updates
- keeps the private CV out of the main tracked public content path
- provides enough protection for a single low-volume private route

## Consequences

### Positive

- low operational complexity
- easy local editing
- direct control over content
- simple hosting model

### Negative

- no editorial UI
- no schema validation by default
- Basic Auth is limited compared with proper application auth
- some parsing logic is duplicated across files

## Revisit When

Reconsider this decision if any of the following become true:

- content volume grows significantly
- multiple people need to publish content
- the private CV becomes a broader protected content area
- richer access control or auditability is required
- content validation errors become a recurring problem
