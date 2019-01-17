---
layout: post
published: true
title: How I Control System Volume With My Logitech Mouse
subtitle: Simple trick I use
tags:
  - Tips
  - Windows
share-img: 'https://i.imgur.com/pVN3hAo.png'
---
It's so frustrating to keep adjusting volume everytime video you are watching is suddenly louder/quitter. 

![](https://i.imgur.com/VRAcFjz.jpg)

Even more, annoying if your keyboard doesn't have a dedicated volume button or you need to press both keys in order to adjust the volume. 

Thankfully my Logitech mouse comes with software which allows me to set custom commands for every key on my Logitech mouse. 

### Here's my solution:

![Setup](https://i.imgur.com/8Hwnesf.gif)

Download & install [**Logitech Gaming Sofware**](https://support.logitech.com/en_us/software/lgs)  
Copy paste this:  

    C:/Windows/System32/SndVol.exe -f 99490633

## It Works!

By doing this simple setup, now I can click my assigned button (I use DPI button) anywhere then using the scroll wheel to increase or decrease system volume. Nice!

![It Works!](https://i.imgur.com/HFIww6f.gif)

## Research

- [Microsoft SndVol32 documentation](https://docs.microsoft.com/en-us/windows/desktop/devnotes/sndvol32-exe-)
- [SevenForums Thread](https://www.sevenforums.com/tutorials/198083-volume-mixer-shortcut-create.html)