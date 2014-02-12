---
layout: post
title:  "Another New Move, Finally"
date:   2014-02-01 22:17
categories: personal
---

Well over a year ago I wrote about wanting to migrate my blogging platform to something new to replace Wordpress. Well since then I have moved my blog but I'm honestly not happy with what I've moved to. I don't have anything particularity bad to say about Ghost, I just don't like it.<!-- more --> Maybe it's because things aren't quite finished yet for Ghost. The other thought I have is that Ghost is still too much for my liking. The other thing I've wanted to do for a long time is figure out how to take advantage of the *github* pages to host my site and that requires to either go back to building my own static sites again (does anyone actually do that anymore?) or man up and dive into [jekyll](http://jekyllrb.com). And this site was born, again.

I've only started to scratch the surface of what *jekyll* can do, but I do see the potential and I have the added bonus of using markdown which I've always wanted to do. The idea that I can write posts and pages without needing to have a web page open is pretty nice I must say, and using git to publish the site is pretty elegant too.

The one piece that I needed to figure out was how to keep my SSL requirement met by the site. Then it dawned on me that I can use the custom site name feature of the github pages and pare it with an Nginx reverse proxy. After a few minutes digging on the *Google* I found this little piece of config.

{% gist 8872330 %}

What this means is that I'll still need my own web server to handle the SSL termination and initiate the reverse proxy but this gives me much more control over how the page is accessed and if I'm really concerned about an outage of my home server I can always add a *Digital Ocean* droplet as a DNS round-robin endpoint. This also gives me the ability to maintain my IPV6 functionality since I'll be handling the hand-off to the back-end over IPV4 but visitors will be able to talk to my servers with native IPV6 support and don't need to no anything about how the site gets to them.

Well, that's the news from me for now. I'm sure there is a lot that can be fixed here and as always this will continue to be a work in progress, but I'm hopeful again.