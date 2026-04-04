---
title: "Website Video Posts and Sidebar Improvements"
date: "2026-03-28"
tags: ["portfolio", "nextjs", "typescript", "ui", "content"]
excerpt: "Improved the updates page layout, added support for video posts, and refined the sidebar."
type: "post"
coverImage: "/images/2026-03-28.webp"

---

Tonight I spent some time refining the updates feed on the homepage and making it possible to post video updates as quite a lot of the time, I'd watch tutorials and learn a lot so keeping a record of what made each useful on here is something, alongside these updates, I wanted to be able to do. 

Update cards on the homepage were starting to look too text heavy and repetitive. Even now, I am planning further updates so the site overall but am still defining core content and focus. Tonight the structure is improved a little to self contain content, handling YouTube video players and being fully 'clickable' - not just the title text string. 

The underlying post model now supports optional specifying of a 'Video' type post and a YouTube URL part, along with minor write up underneath. I watched a GitHub Copilot event earlier today and had the idea to be able to share things like that to my update section. Written models are handled as they were before and the site's model handles everything not specified as a video post as one of those. It also didn't require me to update the previous update files manually to avoid errors or inconsistencies. 

You'll notice a photo on the top right sidebar now! This is a first version, I will also improve this but it builds out and takes another section from text to something more visual and unique in terms of page space usage. 

Some key, hand picked public GitHub repos now appear on the right - as time goes on I promise there'll be more interesting projects and code here to check out. 

In summary, this is just one of many little steps in bringing this website together. As I was doing it I had a few stronger ideas in giving it a true visual identity and style to write home about. For now... the journey continues. 