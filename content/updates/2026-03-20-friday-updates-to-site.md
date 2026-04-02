---
title: "Friday Updates to the Portfolio Website"
date: "2026-03-20"
tags: ["website", "portfolio", "nodejs", "react", "typescript", "tailwind"]
excerpt: "Sidebar Added, Width Extended and Tag Cloud Moved"
type: "post"

---

This post is less of a write-up, more of a change update. 

## Dark Mode Text Readability
The site uses Tailwind CSS and the Tailwind Typography plugin to handle text appearance, hierarchy, and light/dark mode styling. Markdown articles were not inheriting the same dark mode behaviour, and text (including headings) appeared too dark to read clearly against the background.

This was fixed by applying Tailwind’s 'dark:' utilities to UI elements and overriding Typography styles for '.prose', ensuring text across the site is readable in both light and dark modes.

## Sidebar Added
To introduce a sidebar with a short profile summary (to be improved further in future updates), I used Tailwind’s CSS Grid utilities to restructure the layout into a main content column and a right-hand sidebar.

The tag cloud was moved from the top of the page into the sidebar, where it scales more naturally as the number of technologies and topics increases.

## Standardised Tags
Tags were previously appearing inconsistently (e.g. 'react' and 'React'). To fix this, I introduced a function in 'updates.ts' that normalises tags to lowercase and deduplicates them at load time. A separate mapping function formats tags for display (e.g. 'nodejs' → 'Node.js'), ensuring consistency while maintaining readability.

## New GitHub Link
Given this is a developer portfolio, I added a link to the GitHub repository in the navigation bar.

### Links
[Visit my GitHub to view the site Repo](https://github.com/SB1501/sb-portfolio)