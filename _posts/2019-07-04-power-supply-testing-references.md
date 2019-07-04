---
layout: post
published: true
title: Power Supply Testing References
Tags:
  - PC Hardware
  - Guide
Share-img:
  - 'https://i.imgur.com/UdsSZya.png'
share-img: 'https://i.imgur.com/UdsSZya.png'
tags:
  - PC Hardware
  - Guide
subtitle: By using a Multimeter
date: '2019-07-05'
---

**Warning: the following procedures might damage your PSU or connected devices. Do it at your own risk!**

![cover](https://i.imgur.com/UdsSZya.png)

## Requirments
- A Multimeter.
- A small metal wire like paper clip or a short wire.
- Any single device to plug in into SATA or Molex connectors for adding load to PSU.

## Prepare
1. Unplug power cord from PSU.
2. Use a bare metal paperclip, or a wire, to connect the green pin (PS_ON) shown here to any of the black pins (Ground). [Example](http://acidx.net/wordpress/wp-content/uploads/2011/12/psu_test_002.jpg)
3. To give a load to PSU, plug any device into molex or sata connector such as fans, Hard Drive, Led strip.
3. Plug the power to turn on the PSU.
4. Check if PSU fan spin.
4. Insert your black probe of the multimeter to any black wire socket of any molex connector.
6. Use red probe to start testing all 5 outputs from 24pin connector.


## Connector References

![24-pin ATX References](https://i.imgur.com/Bux2s8g.png)

![Peripherals](https://i.imgur.com/VSHF5hm.jpg)


## Voltage References
Compare your measured values to these to ensure your PSU is within tolerance:


Output | Tolerance | Minimum | Nominal | Maximum | Color
------|---------|-------|-------|-------|----
+12 V | ±5% | 11.40 V | +12.00 V | 12.60 V | Yellow
-12 V | ±10% | -10.80 V | -12.00 V | -13.20 V | Blue
+5 V | ±5% | 4.75 V | +5.00 V | 5.25 V | Red/Gray/Purple
-5 V | ±5% | 4.75 V | +5.00 V | 5.25 V | White
+3.3 V | ±5% | 3.14 V | +3.30 V | 3.47 V | Orange

## Research
- https://www.reddit.com/r/techsupport/wiki/psutesting
- http://www.smpspowersupply.com/connectors-pinouts.html




