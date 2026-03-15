---
title: "Building an outage detector on AWS"
date: "2026-03-15"
tags: ["aws", "EventBridge", "Lambda", "resiliance", "project", "architecture", "SNS", "DynamoDB"]
excerpt: "Short one sentence summary of the post."
---

## Monitoring outages with AWS

This week I have started studying for the AWS Cloud Practitioner certificate. As a part of not just learning the theory, but trying to put it into practice, I have put together a simple 'down detector' email alert system using AWS and its free tier as the first in hopefully a number of small projects. 

---

## Tech Stack

![Tech Stack Diagram](/images/aws-status-tech-stack.png)

The project uses the below services, all except one are tools I've never used before in any capacity: 

- EventBridge 
- Lambda
- DynamoDB
- SNS Simple Notification Service
- Email Alerts


## How it Works
Every five minutes AWS will check for a 200 status from shanebunting.dev - if it gets anything but this response then it will fire an email to me to alert me that it's offline. The EventBridge defines and acts on this interval, Lambda holds the Python code block that actually defines the functions and performs the check for the status code itself. DynamoDB is set up with the most basic, simple record keeping time and event description. Simple Notification Service is what sends the email out to me. 

### CloudWatch Panel
![CloudWatch Panel](/images/cloudwatch-panel.png)

When setting this up and troubleshooting some issues, CloudWatch was useful in seeing logs and exactly what was happening. This is a tool I've used in working roles before but was interesting to use for a personal project. 

## Main Knowledge Gained
Although I was broadly aware of AWS having a tool for every aspect of computing under the sun... to actually set pieces of that up (albeit for something very simple) and see how these can be hooked up to work together - and how straightforward they make this - was quite interesting. 

I had some bother with the regions - defaulting to one, setting up the Lambda function and then the rest being on the correct UK region. It's all new to me but integral to how AWS works. 

As I had mentioned above I hadn't used AWS personally outside of work so being able to mess with it to do something somewhat practical and useful and add to the skill base is always worth the time. 

---

### Links


[Visit my GitHub](https://github.com/SB1501)

---
