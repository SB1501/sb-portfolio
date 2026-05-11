---
title: "Making Portfolio Updates Share Properly on Social Media"
date: "2026-05-11"
tags: ["portfolio", "socialmedia", "update", "web"]
excerpt: "Tweaking the site to be able to share content across the web."
type: "post"
coverImage: "/images/2026-05-11.webp"
---

One of the goals of this portfolio website is to be able to share updates on learning and tech projects I'm working on. This is a deliberate choice against posting my updates directly onto LinkedIn, X or other platforms. But why? 

There is no doubt that to reach the right people who might be interested in following this content that LinkedIn, X and others are THE number one places to be. That doesn't need to mean content originates on their third-party platforms, however. As I have long said, nothing beats a website. 

## Nothing beats a website. 
With a website I have control over what I post - I'm not at the mercy of an algorithm that prioritises, penalises or promotes my content in a specific way that serves the platform. If you're a freelancer or small business, you should give some thought into the same approach and ensure your most valuable output on the web is securely within your own control. 

Sharing content from your own website to those platforms is still one of the most powerful moves to ensure you don't miss out on exposure to and interaction with people and partners that exist there. 

Simply put, when a visitor lands here - they are looking at my work, my profile and my projects with no distraction. No algorithm or side feed promoting what it believes to be a more interesting similar project elsewhere. 


## Modifying the site to play nicely with social media feeds
As this site isn't just a template hosted on WordPress I had to manually ensure that sharing a URL gives social media feeds everything it needs to properly and nicely present it to anybody scrolling by. 

Global metadata on this site is handled by app/layout.tsx. When somebody shares a URL the other website will be able to read the site title, description, preview image, canonical site URL and has a 'card' which I defined from day one which appears as sort of a general 'SB Portfolio' business card like image. This was intentional and served well but to share URLs to posts like this regularly, it would become repetitive and begin to get boring fast. 

![The previous generic share card image](/images/generic-card.webp)

Within the app router configuration page for each actual update post like this app/updates/[slug]/page.tsx. I added dynamic per-update metadata so each post can publish its own title, excerpt, image, URL, tags and article information.

This was alongside the line of code which already handled the post image and ensured that a default image was used where a specific one was not provided. 

![The line of code for per-post metadata](/images/post-metadata-line.webp)

This enables each page to dynamically see not just the site, but the posts title, excerpt, URL, cover image, tags and that it is an article style page. 



### Links 
- [My LinkedIn Profile](https://www.linkedin.com/in/shane-b-9ba978239/)
- [Check out my Projects Page](https://shanebunting.dev/projects)
- [Why not Buy Me A Coffee?](https://buymeacoffee.com/shanebunting)