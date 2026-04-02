---
title: "Launching My Portfolio Website"
date: "2026-03-11"
tags: ["portfolio", "nextjs", "vercel", "deployment"]
excerpt: "Setting up my developer portfolio with Next.js, Vercel and automatic GitHub deployments."
type: "post"

---

Welcome to my portfolio website. This site is itself the first project I can post an update about, and it will serve as a place to document what I’m working on and learning.

## Hosting

I chose to host the site using **Vercel**, which allows automatic deployments from GitHub. Under their *Hobby* plan the site can be hosted for £0 per month while still including useful features such as:

- global CDN
- automatic HTTPS
- automated builds and deployments

Perfect for a small developer portfolio.

## Deployment

The setup was straightforward. I simply connected my GitHub repository and allowed Vercel to auto-detect the project configuration and build command before hitting **Deploy**.

Now every time I push updates to GitHub, Vercel automatically:

1. pulls the latest commit  
2. builds the site  
3. deploys it globally

## Domain

Adding my custom domain was also painless. SSL certificates were automatically provisioned.

The only small detail to configure was ensuring the `www.` version of the domain redirects to the main site.

## Platform Observations

The Vercel dashboard is very reminiscent of tools I’ve used professionally for monitoring and deployments. It includes detailed logs, deployment history and a range of configuration settings covering domains, integrations, usage statistics and security.

## Next Steps

The next goals for the site are:

- improving the visual design and layout
- adding project listings
- continuing to post technical updates here
- releasing the **Mindful Check-In** iOS app