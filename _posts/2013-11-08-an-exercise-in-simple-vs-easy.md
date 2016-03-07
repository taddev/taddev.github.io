---
layout: post
title:  "An Exercise in Simple vs. Easy"
categories: code
---

For the past several months I've been working on a simple premise, **Simple != Easy** or for the non programmers of the world **Simple is not Easy**. I've take this ideology from a presentation by Rich Hickey titled [_Simple Made Easy_](http://www.infoq.com/presentations/Simple-Made-Easy). Rich is mainly talking to programmers and software designers in his presentation but I believe the information is valid in all frames of life. With this idea of simplicity in mind I go looking for things that I can *simplify* knowing that sometimes the simply solution is not easy to get to. <!-- more -->

Several months ago I put together some basic BASH scripts that I used to manage the permissions on my the files and folders of my Wordpress site. These scripts allow me to easily change the permissions to read/write so I can do things like install themes and plugins or update the site. Once I've finished making changes to the site I could run another script to change the permissions back to read-only so I don't have writable files facing the internet.

Fast-forward a few months and I've built a new web server and moved my site as well as all the files I use to manage the site, including the scripts to manage file and folder permissions. I logged into the admin page and found several updates waiting for plugins and even a core update to Wordpress itself, so off I set to use my trusty scripts to "lock" and "unlock" the folders so I could run the updates. I realized at this point that the four scripts I had built, which were pretty *easy* to build were not exactly *easy* to maintain. The fact that there were four different files instead of just one means that if I want to change a setting that affects all four files I have to edit all four files. Once I realized that I had done the *easy* thing instead of the *simple* thing I set out to fix it.

## Easy ##
The easy solution consists of four files with their own settings, variables, and small amount of error handling. As you can see it was easy to build these four files since there is a lot of repeated code, but that doesn't mean it's good coding standard. The biggest problem with these files is that the `LOCKFILE` and `WPDIR` variables are defined in each file and only slightly different between files. This is unfortunate because if I want to change either of the variables I have to change 4 files with 2 variables each for a total of 8 edits, instead of 2 variables in 1 file for a total of 2 edits.

### lock_wp.sh ###
{% gist 8809515 lock_wp.sh %}

### unlock_wp.sh ###
{% gist 8809515 unlock_wp.sh %}

### lock_wp-content.sh ###
{% gist 8809515 lock_wp-content.sh %}

### unlock_wp-content.sh ###
{% gist 8809515 unlock_wp-content.sh %}

## Simple ##
The simple solution is actually more complex, as you would expect after understanding that complex is the opposite of easy not simple. Right off you're notice there is a lot more code, more than just combining the four files above. The primary reason for this is that I've added some sanity checking and a lot more functionality. Where the top four files essentially only worked on two folder, this simple solution works on any folder under the `WPDIR` path. There is also error catching for how the script is called so to prevent incorrect flags messing things up. This solution is more complex also because it uses more powerful BASH commands to addresses various conditional environments and since I've never really written much in BASH I had to google a lot of the methods as well as much trial and error.

### wp_secure.sh ###
{% gist 7237241 %}

## Conclusion ##
I know there is a lot of code displayed here but I would just like to note that this method is not just about coding, the code is just an example that I was working with. This concept of *Simple vs. Easy* is something that I'm trying to work into every aspect of my life. This is just one example of an ongoing attempt to make my life simple, not neccesarily easy.


<!-- X4rBlub4fgPicizTpMvh -->
