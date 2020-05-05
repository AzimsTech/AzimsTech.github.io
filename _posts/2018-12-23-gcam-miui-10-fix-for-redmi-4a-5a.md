---
layout: post
published: true
title: '[Magisk] Gcam MIUI 10 Fix for Redmi 4A/5A '
subtitle: MIUI 10 Breaks Camera2 API Support Here's Magisk Module Fix It
date: '2020-01-13'
share-img: 'https://i.imgur.com/Ah7kgM0.png'
tags:
  - Android
  - Magisk
---

# Fix Camera2API in MIUI10 (Redmi4A/5A)
## MIUI 10 Breaks Camera2 API Support Here's Magisk Module to Fix It

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40AzimsLives)](https://twitter.com/AzimsLives)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/AzimsTech)
[![Download Here](https://img.shields.io/github/downloads/AzimsTech/Cam2API-Redmi4A/total.svg)](https://github.com/AzimsTech/Cam2API-Redmi4A/releases/download/2/Cam2API-Redmi4A.zip)

[⬇ __**Download Here!**__](https://github.com/AzimsTech/Cam2API-Redmi4A/releases/download/2/Cam2API-Redmi4A.zip)

![cover](https://i.imgur.com/Ah7kgM0.png)

Starting with the MIUI 10 update, Xiaomi decided to remove camera2 api files in system. As such, Redmi 4A/5A users which uses MIUI will not able to enable camera 2 API support. MIUI 10 lacks lib file which is require for camera2 api functionality to work.

I just found and picked up the necessary file for Camera2API to work from MIUI10. Thanks to the guy @ 4pda forum

    system\lib\hw\camera.msm8937.so
  
This module also adds camera2api support in the build.prop systemlessly, so you don't have to. This is done by editing build.prop to add or enable "persist.camera.HAL3.enabled=1". 

# Trobleshooting
1. Install Camera2 Probe from playstore to check if it working. Level 3 means it is working.

<img width="360px" src="https://i.imgur.com/o8IvgzV.png">

2. If your GCam of choices doesn't work, please use another one from [https://www.celsoazevedo.com/files/android/google-camera/](https://www.celsoazevedo.com/files/android/google-camera/). For Redmi 4A, I recomend installing [GCam-5.1.018-Pixel2Mod-Arnova8G2-V8.3b1.apk](https://www.celsoazevedo.com/files/android/google-camera/dev-arnova8G2/).

# Research
- [Redmi 4A thread - 4pda forum](https://w3bsit3-dns.com/forum/index.php?showtopic=788220&st=26980)
- [Question thread - offical MIUI forum](https://en.miui.com/thread-4448807-1-1.html)
- [Collection of Google Camera mods by Celso Azevedo](https://www.celsoazevedo.com/files/android/google-camera/)
- Magisk module install script is taken from [gjf/miui10camapi2](https://github.com/gjf/miui10camapi2)


