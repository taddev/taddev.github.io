---
layout: post
title: Configuring pfSense for IPv6 on Midco
categories: sysadmin
description: A guide to configuring native IPv6 on Midcontinent Communications using a pfSense router and firewall.
---
Having a conversation recently with a friend the topic of IPv6 came up and he mentioned that Midcontinnent Communications has rolled out native support for IPv6 on their network. I hadn't noticed because no one at Midco made any noise about this and since I've been using a [6 over 4 tunnel](https://tunnelbroker.net) through [Hurricane Electric](https://he.net) for years I just never bothered to look at the WAN side of my router.<!-- more -->


### Enable IPv6 on the WAN Interface
The first thing I did was to remove all the HE prefix information from the LAN interface as well as deleted the GIF tunnel and interface assignment. With everything cleaned out I jumped over to the configuration page for the WAN interface and change the IPv6 type to DHCPv6. A quick save and the information page shows a very nice /128 address on the WAN interface. Huzza! native IPv6.

<span style="width:600px; float:center">![wan1](/images/20151017/midco-wan1.png)</span>

### Set the Prefix Delegation Size
Now that the WAN interface has a valid IPv6 address I wasn't sure how to get a prefix for the LAN side. I was overly hopeful and called tech support, unfortunately they were not able to give me any useful information. Undaunted I released I probably need to request a prefix, this is done further down on the WAN configuration page under the *DHCP6 client configuration* section. From the dropdown menu select a prefix size of 64. I tried larger sizes but none of them worked, looks like I can only get one subnet from Midco, oh well I tried.

<span style="width:600px; float:center">![wan2](/images/20151017/midco-wan2.png)</span>

### Configure the LAN Interface
In order for the router to advertise the prefix to the internal network the LAN interface has to be set to *Track Interface* for the IPv6 type. This opens a section further down the page where you can select which interface to track from and what index to use for the prefix. Since there is only one prefix available the default of 0 (zero) is the only option.

<span style="width:600px; float:center">![lan1](/images/20151017/midco-lan1.png)</span>

<span style="width:600px; float:center">![lan2](/images/20151017/midco-lan2.png)</span>

### Configure the Firewall
Lastly, once you have the internal interface set you should start seeing your clients auto assign themselves IP addresses inside the prefix assigned to the LAN interface. However, you might notice you can't get anywhere just yet. That is because you'll need to add a single firewall rule under the *LAN* section to allow all outbound IPv6 traffic to go out.

<span style="width:600px; float:center">![firewall2](/images/20151017/midco-fw2.png)</span>

<span style="width:600px; float:center">![firewall1](/images/20151017/midco-fw1.png)</span>

### Celebrate
You're now browsing the internet of the future, or something like that. Go ahead, try out [test-ipv6.com](http://test-ipv6.com/) you should get a solid 10/10. Enjoy!
