---
title: Recycling a Laptop LCD Screen into a Raspberry Pi Test Bench
date: 2014-12-15T18:30:45.000Z
author: Netopya
category: tutorials
tag: Tutorial
layout: post
og_image: http://www.netopyaplanet.com/gallery_images/5/full/full_IMG_6591.JPG
description: A quick and easy guide to use a Raspberry Pi to bring a broken laptop LCD back to life!
gallery_id: 5
overfold_content: |
  <div class="text-center"><img src="/gallery_images/5/lrg/lrg_IMG_6591.JPG" class="img-thumbnail mb-3"/></div><p>This project started off when trying to find a use for a broken laptop. The screen was perfectly fine so I decided to integrate it with a Raspberry Pi. The Raspberry Pi is a fascinating computer great for small multimedia projects. I had such a project in mind, but first I wanted to test out the Pi to see what it was capable of so I create a test bench. The arrangement was fairly simple with the Raspberry Pi, a laptop LCD display, and a LCD controller to connect the two together. This setup was a great way to tryout the Pi and to recycle an old computer into a new one.</p>
---

### List of Parts

- Raspberry Pi B+ ([RobotShop](http://www.robotshop.com/ca/en/raspberry-pi-model-b-plus-computer-board.html))
- 1.5A USB power supply ([RobotShop](http://www.robotshop.com/ca/en/raspberry-pi-power-supply.html))
- LCD Controller with 4A power supply ([e-qstore](http://www.ebay.com/itm/M-NT68676-2A-HDMI-DVI-VGA-Audio-LCD-Controller-Board-DIY-Kit-Power-Adapter-/121059321784))
- Laptop LCD screen (Recycled)
- HDMI cable ([Deal Extreme](http://www.dx.com/p/jjb-v1-4-hdmi-male-to-hdmi-male-connection-cable-black-1m-188441#.VI82_yvF-ao))
- Keyboard and mouse

### Getting the Components

I started off by following the disassembly instructions for the broken HP Pavilion dv6000 laptop I was taking the LCD panel from. I kept the screen's frame but did remove components such as Wi-Fi antennas and the webcam from the back. The frame was very useful for holding up the display while keeping it adjustable for this quick test. To make use of this display I needed an LCD controller to interface the display with common connectors such as VGA and HDMI. These devices are not the easiest to come by, but there are a few sellers on eBay which is where I got mine. The seller I contacted had great customer service and was able to point be to the appropriate controller for my LCD display.

### Assembly

Once I got all the parts, hooking it all up was really easy. All the components of the LCD controller came pre-connected, so all I had to connect was the LVDS and power connections to the LCD panel and the HDMI cable to the Raspberry Pi. For final assembly I fastened all the parts to a piece of plywood with plastic spacers.

<figure>
    <a href="/gallery_images/5/full/full_IMG_6599_anot.JPG">
        <img class="img-thumbnail" src="/gallery_images/5/lrg/lrg_IMG_6599_anot.JPG"/>
    </a>
    <figcaption>Assembled Parts</figcaption>
</figure>

### Final Thoughts

I have to say that I am really satisfied with the Raspberry Pi. It's amazing the form factors you can get computers in nowadays. Thinking back, one change I would have made to would be to turn the LCD panel so that it would be facing the other way and all the components would be hidden behind the display frame. Never the less I do enjoy having all the components in view. So far the test bench is working great and I'm looking forward to getting some projects up and running on the device.