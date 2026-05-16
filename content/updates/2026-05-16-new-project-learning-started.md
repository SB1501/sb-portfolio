---
title: "A new project has begun."
date: "2026-05-16"
tags: ["development", "app", "ios", "swift", "learning", "video", "swiftui", "swiftdata"]
excerpt: "The early stages of my first commercial project is in full swing."
type: "video"
youtubeId: "Yiq-hdhLzVM"
---

This week I began the early planning stages of what will be my first for-sale commercial app project. From a few ideas I couldn't decide between, this was the one I deemed to have the biggest potential to be launched with the potential to recover some of the costs I've put into the hobbyist programming so far - namely the Apple Developer License which I've just renewed for a second year. The goal last year was to make back the £79 - one I didn't achieve. My apps are largely free or with 8BallWatch, 99p. I know a social media marketing campaign would no doubt get user numbers up but WatchOS is a funny platform (most people I know with Apple Watches were surprised you could actually install apps on them!) and of course, Mindful Check-In is free and I couldn't imagine making a wellbeing tool at a cost. 

## A new project has begun. 
I won't spill all details of the new project all at once but at its core it is an expense tracker tool aimed at freelancers and small business owners across pretty much any discipline. 

This app will be built using all modern Apple platforms - Swift, SwiftUI and SwiftData. And it requires a lot of learning. This week I retraced the early design stages we used in college projects. Diagrams, figuring out 'entities' from a data model perspective and drawing up UI screens, flows and processes that will make the final product work. This is another one that will be managed all-on device so no web or server element.

## A lot of learning.
The start of the week consisted of many, many SwiftData data modelling tutorials and reading of the Apple Documentation - which I'm getting better at now. At some points, I had to throw away the early prototype attempt I made and build a separate proof of concept just to follow along of how things work in Swift. Thankfully... it's much easier than SQL. It is more forgiving. From what I can gather, a lot of modern DB approaches are like this - designed to hit the ground running and evolve and change rapidly in the early stages and be more forgiving. Many things in Swift are handled automatically - saving, relationships, things like unique IDs - all handled, you can explicitly call or modify behaviours to fit your use case, but if you don't, it's 'safe'. I like that and sure enough, more of my mental energy is going toward the actual goal and app than the nuances of the platform. 

## Rabbit holes.
That bloated up into... how do I handle attachments. I naively chased that string and ended up dragging myself into the approaches used to... pick files from the system, the security scoping / access needed to do that, doing that for a few different file types, persisting that, showing a preview... I went quite far down a rabbit hole, assisted by AI, to end up with something that could show a preview of PDFs imported... It worked... but it was no good to not physically have dragged my brain through every piece of it. 

The video shared here was a breakthrough tutorial for me, completely informing me (alongside an Apple FileManager document found on Wednesday) on the paradigms used to work with local file storage on iOS with Swift. 

I am ending this week quite proud that the part I truly dreaded - databases - went well and with a few documentation articles, tutorials and guided articles online I started to notice repetition and ways in which it fits my app. And that the new world of 'how do I handle files', and having to essentially teach the app and the system precisely where to look, what to do and how to behave for every single action, has also went smoothly until now. 

I have still not found a tutorial or article that's exactly what I need. That was the same with the data model and SwiftData. But between a lot of attempts and practice eventually I had a good handle on getting a prototype data model and a few forms made up that functioned.

I encountered a few good YouTube channels this week but one in particular that has taught me the most is this one linked from Swiftful Thinking. Right into the content. Covering many bases. No long silly intro or pitch to sell a course. It reminds me of the golden age of YouTube tutorials before everybody was running a gig to get subscribers paying for their course. Looking forward to watching more of his content where it becomes relevant. 

## A commercial venture. 
This project will hopefully pay the bills of my programming hobby. It's one I can also promote and put out there and develop on an ongoing basis. The theoretical money coming in from this would justify time spent outside of work putting a lot of energy into it. For now, it's a great excuse to study close up and understand the little mechanisms underpinning all of the apps and services I use every day and applying it for myself. The journey in itself justifies the effort. If the end result is commercially successful, to any extent, then all the better. 


- [Check out the tutorial video from Swiftful Thinking](https://www.youtube.com/watch?v=Yiq-hdhLzVM)
- [Apple - iOS Storage Guidelines](https://developer.apple.com/documentation/foundation/optimizing-your-app-s-data-for-icloud-backup)
- [Apple - iOS File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)
