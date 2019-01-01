---
layout: post
published: true
title: '[Magisk] Gcam MIUI 10 Fix for Redmi 4A/5A '
subtitle: MIUI 10 Breaks Camera2 API Support Here's Magisk Module Fix It
date: '2018-12-23'
share-img: 'https://i.imgur.com/Ah7kgM0.png'
tags:
  - Android
  - Magisk
---
## MIUI 10 Breaks Camera2 API Support

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40AzimsLives)](https://twitter.com/AzimsLives)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/AzimsTech)
[![](https://img.shields.io/github/downloads/:user/:repo/:tag/total.svg)](https://github.com/AzimsTech/Camera2API-MIUI10-Fix-Redmi4A/releases/download/1/Camera2API-MIUI10-Fix-Redmi4A.zip)


![cover](https://i.imgur.com/Ah7kgM0.png)

Starting with the MIUI 10 update, Xiaomi decided to remove camera2 api files in system. As such, Redmi 4A/5A users which uses MIUI will not able to enable camera 2 API support. MIUI 10 lacks lib file which is require for camera2 api functionality to work.

I just found and picked up the necessary file for Camera2API to work from MIUI10. Thanks to the guy @ 4pda forum

    system\lib\hw\camera.msm8937.so
  
This module also adds camera2api support in the build.prop systemlessly, so you don't have to. This is done by editing build.prop to add or enable "persist.camera.HAL3.enabled=1". 

# Trobleshooting
1. Install Camera2 Probe from playstore to check if it working. Level 3 means it is working.

![example](https://i.imgur.com/o8IvgzV.png)
2. If your gcam app still doesn't work please use another one from [https://www.celsoazevedo.com/files/android/google-camera/](https://www.celsoazevedo.com/files/android/google-camera/)

# Research
- [Redmi 4A thread - 4pda forum](https://w3bsit3-dns.com/forum/index.php?showtopic=788220&st=26980)
- [Question thread - offical MIUI forum](https://en.miui.com/thread-4448807-1-1.html)

