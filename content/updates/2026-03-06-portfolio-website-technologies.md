---
title: "The Tech Stack of this Portfolio Website"
date: "2026-03-06"
tags: ["technologies", "website", "portfolio", "nodejs", "react", "typescript", "tailwind", "markdown"]
excerpt: "A quick look at the technology stack used on my portfolio site."
type: "post"
coverImage: "/images/2026-03-06.webp"

---

## Introduction
This portfolio site was an opportunity to explore some technologies I had not previously used, notably Node.js, React and the tooling required to deploy a modern web application. Although it will grow and evolve over time, it's deliberately simple for now. It's more important to me that I understand how everything works and can expand it as I learn more. That's why I didn't use WordPress or one of the off-the-shelf DIY website builders. Where's the fun in that?

## Next.js
The site is built using Next.js, a React framework that runs on Node.js. It handles routing, page rendering and static generation of content from Markdown files.
Next.js allows articles such as this one to be generated from Markdown files and served as static pages, which keeps the site fast and simple without requiring a database.
It also enables middleware which I use to protect the private CV section of the site.

## App Router
Next.js uses a modern routing system called the App Router. Pages are defined inside the app/ directory and nested folders automatically create URL routes. This makes it straightforward to organise sections like the Updates articles and their individual pages.

### fs and path modules
These built-in Node.js modules allow the application to read Markdown files from disk and construct paths to them.
They are used to scan the updates directory, read the article files and generate the site pages dynamically.

### Middleware
A middleware.ts file intercepts requests before a page is served.
This is currently used to protect the private CV section of the site with simple authentication before the page is delivered.

## React
The user interface is built using React components. Shared elements such as the header and footer are reusable components. React also allows conditional logic within the UI — for example showing only articles that match a selected tag. Most of the rendering for this site happens server-side through Next.js.

## TypeScript
The project is written in TypeScript rather than plain JavaScript. TypeScript provides type checking and better editor support in VS Code, helping catch mistakes earlier and making the code easier to maintain.

## Tailwind CSS
The styling across the site is handled with Tailwind CSS.
Instead of writing traditional CSS classes, styling is applied directly in the markup using utility classes. This controls spacing, layout, typography, borders, hover states and responsive behaviour. Markdown content is styled using the Tailwind Typography plugin, which provides clean formatting for article text.

## Markdown Articles
Each article on the site is simply a Markdown file.
This keeps content creation simple and avoids the need for a database or CMS.

### gray-matter
The gray-matter package parses the Markdown files and extracts metadata such as the article title, date, tags and excerpt.

### remark and remark-html
These libraries convert Markdown into HTML.
When an article is opened, the Markdown content is processed and rendered into the page's content area.

## Git, GitHub & Vercel
Development happens locally using Git for version control. Changes are pushed to GitHub, which is connected to Vercel for hosting. Every push triggers an automatic build and deployment pipeline. Vercel runs the production build and deploys the updated site within seconds.
Environment variables and other sensitive configuration are kept outside of the repository.

### Links
[Visit my GitHub to view the site Repo](https://github.com/SB1501/sb-portfolio)