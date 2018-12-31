---
layout: post
published: true
title: 'Gcam MIUI 10 Fix for Redmi 4A/5A '
subtitle: MIUI 10 Breaks Camera2 API Support Here's How to Fix It
date: '2018-12-23'
share-img: 'https://i.imgur.com/Ah7kgM0.png'
tags:
  - Android
---
## MIUI 10 Breaks Camera2 API Support

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40AzimsLives)](https://twitter.com/AzimsLives)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/AzimsTech)

![Cover pic](https://i.imgur.com/Ah7kgM0.png)

Starting with the MIUI 10 update, Xiaomi decided to remove camera2 api files in system. As such, Redmi 4A/5A users wich uses MIUI will not able to enable camera 2 API support. MIUI 10 lacks lib file which is require for camera2 api functionality to work.

Here The Solution
=======================

I just found and picked up the necessary module for cam2api to work from MIUI10.
<pre>
<a href="https://drive.google.com/file/d/15RK3JUlvT2tpCRjrfbeIbVrCVxQID-H-/view?usp=sharing">FixPatch-Cam2API.zip</a>
</pre>
the fix itself does not activate the camera. For that, you will need to flash another file.  
<pre>
<a href="https://drive.google.com/file/d/1EjXKmKM7xg8AcScIEYTN2MEuPxrGOTUf/view?usp=sharing">Camera_2API_addon.zip</a>
</pre>
If you already enabled camera2 api through build.prop or magisk module you not need to flash this file.

**Make sure your phone is already rooted and have trwp recovery installed.**

### It worked!
![It worked!](https://i.imgur.com/o8IvgzV.png)

Research
================

- [Redmi 4A thread - 4pda forum](https://w3bsit3-dns.com/forum/index.php?showtopic=788220&st=26980)
- [Question thread - offical MIUI forum](https://en.miui.com/thread-4448807-1-1.html)

