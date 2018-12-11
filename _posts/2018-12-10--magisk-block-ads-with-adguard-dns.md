---
layout: post
published: true
title: '[Magisk] Block Ads With AdGuard DNS'
subtitle: Hosts file ad-blocking alternative
date: '2018-12-10'
share-img: 'https://i.imgur.com/0etFpkn.png'
tags:
  - Android
  - Magisk
---
### Large hosts file will causes massive performance loss, AdGuard DNS is the solution!

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40AzimsLives)](https://twitter.com/AzimsLives)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/AzimsTech)

![AdGuard](https://i.imgur.com/0etFpkn.png)

HOSTS file was never designed to be an ad-blocking solution. CPU usage will rising very high because the dns service tries to resolve all domains one by one which is ineffective.

The only we can do is use ad blocking DNS server which is more efficient when it comes to blacklisting domains.

AdGuard DNS is an alternative approach to ad blocking based on intercepting and filtering DNS requests. It can be used for free on virtually any device or router.

AdGuard DNS Magisk Module
============================
Thank to our friend at [XDA](https://forum.xda-developers.com/apps/magisk/module-adguarddns-ad-free-experience-t3848166), AdGuard DNS now can be enabled systemlessly in Android Devices with this Magisk Module available to download below.

[Original XDA Thread](https://forum.xda-developers.com/apps/magisk/module-adguarddns-ad-free-experience-t3848166)

[Download AdGuard DNS Module Here](https://drive.google.com/uc?id=108t_u0FfcMpToOxBCi9nbcHMSl43XtwK)

Research
=======================
- [https://github.com/StevenBlack/hosts/issues/93](https://github.com/StevenBlack/hosts/issues/93)
- [https://forum.xda-developers.com/android/general/adblocking-android-huge-hosts-file-t3300882az](https://forum.xda-developers.com/android/general/adblocking-android-huge-hosts-file-t3300882az)
