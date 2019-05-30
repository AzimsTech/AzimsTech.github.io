---
layout: post
published: true
title: A Noob Guide to Youtube-dl
Tags:
  - Software
  - Microsoft Edge
  - Download
Share-img:
  - 'https://i.imgur.com/AqRlb9F.png'
share-img: 'https://i.imgur.com/AqRlb9F.png'
tags:
  - How-to
  - Software
  - Windows
subtitle: Use YouTube-dl the easy way
date: '2019-05-30'
---
![GitHub issues](https://img.shields.io/github/watchers/AzimsTech/Youtube-dl-guide.svg?style=social) ![GitHub issues](https://img.shields.io/github/last-commit/AzimsTech/Youtube-dl-guide.svg)

## Objectives
##### TLDR: I just want to share how I use YouTube-dl. ✌
<details>
  <summary>I you like reading</summary>
  
  The main goal of this guide to help me & others understand the `fundamental` skill of using this powerful tool. I think the official documentation is too big, and useful tips are hard to find (not really, but people are lazy). 
  
  I'm aware there's few decent [**GUI** version](https://github.com/MrS0m30n3/youtube-dl-gui/releases) out there, but by using and learning **CLI** version gives more flexibility and new idea in my opinion.  
  
  By creating this guide, I hope I can master the program entirely, which is helpful to me if I want to `contribute` to the project someday.   
</details>

<br>

![](http://i.imgur.com/8Fkp3hS.png)

## Guide philosophy
- This is **not a wiki**. I try to cover everything but also I won't explain it all.
- Documented in a newbie perspective.
- I believe every person has different preferences.
- Package Manager is a must.

## Installing Youtube-dl & Ffmpeg

#### 1. Run Windows PowerShell as Admin
**Win** + **X** ⭢ Windows PowerShell (Admin)
![](https://i.imgur.com/cSDp66D.png)


Hit `Yes` when `User Account Control` pop-up comes up.

#### 2. Install chocolatey package manager
Copy & paste the following command into `PowerShell`:
~~~
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
~~~

You can refer official install guide here.

#### 3. Install youtube-dl & ffmpeg package
Enter this command into `PowerShell`:
~~~
choco install youtube-dl ffmpeg -y
~~~

#### 4. Install aria2 package (Optional)
For faster dowload speeds, I recommend you install aria2 download accelerator.
~~~
choco install aria2 -y
~~~




## Creating the configuration file
#### 1. Navigate to User's Folder
**Win** + **R** ⭢ Type **%HomePath%** ⭢ **Enter**

![](https://i.imgur.com/uYATtIV.png)


#### 2. Create youtube-dl.conf file
`Create a new text file` and rename it to `youtube-dl.conf`

![](https://i.imgur.com/dgqE2Yv.png)

![](https://i.imgur.com/SvHrIZ9.png)


`Open` `youtube-dl.conf` with `Notepad` and paste this code in it:
~~~
-o "C:\example\videos\%(upload_date)s-%(uploader)s_-_%(title)s.%(ext)s"
--external-downloader aria2c
--external-downloader-args "-j 12 -s 12 -x 12 -k 5M"
~~~


#### 3. Change the download location
Notice that `C:\example\videos\` in first line of code above, you can change it with your 
desired download location. 

![](https://i.imgur.com/JA8QPhq.png)

**Example:**

`D:\Youtube-dl\`

Now every videos/audio you downloaded wil be placed into this folder.

## Downloading the video

Open `Windows PowerShell` and type this command:
~~~
youtube-dl video_url
~~~

Replace `video_url` to your youtube video links you want to download.

**Example:** 
~~~
youtube-dl https://www.youtube.com/watch?v=dKmzyj-ovkg
~~~

Youtube-dl will start download the video from the link you provide at the **best quality available**.

### Selecting a different video quality
In addition to downloading the highest quality, you can show all available video formats by typing this command:

~~~
youtube-dl -F video_url
~~~

For **example**, you will get something like this:

![](https://i.imgur.com/ZWqf30e.png)

Pay attention to numbers on the left, `18`, `43`, `18`, and `43` are the ones with video and audio. Others are **video and audio separately.**

Example, to download this video in `720p` just type:

~~~
youtube-dl -f 22 https://www.youtube.com/watch?v=dKmzyj-ovkg
~~~

### Selecting a specific video quality
If you want a very specific video & audio quality you have to `combine` two numbers together. 

**Example**, to download a `480p` `267kbps` `mp4`  video **(397)** and `128kbps` audio **(140)**.

![](https://i.imgur.com/sYGvFbl.png)

All you need to type is:
~~~
youtube-dl -f 397+140 https://www.youtube.com/watch?v=dKmzyj-ovkg
~~~

#### Tips when selecting a specific video quality
For best results, you want to look for a video with `av01` **codec** and `mp4a.30.2` codec for audio as it offers **the best video quality to file size ratio.**

### Downloading multiple videos from a list
You can create a text file with youtube video links (or any of the other 800+ [supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)), one line at a time using youtube-dl to download a multiple video without having to do it manually. **Example:** 
~~~
youtube-dl -a "D:\download_list.txt"
~~~

## To-do 
- [ ] FAQ section later.
- [ ] Add my own video  quality & size comparision into #tips-when-selection-a-specific-video-quality section
- [ ] More configuration.
- [ ] You tell me..

## Research

- [Official Youtube-dl Documentaion](https://github.com/ytdl-org/)
- [Chocolatey install guide](https://chocolatey.org/install)
- [Chocolatey community packages repository](https://chocolatey.org/packages/youtube-dl)
- [Excelent article by XDA about AV1 codec](https://www.xda-developers.com/av1-future-video-codecs-google-hevc/)
- ["AV1 Beats VP9 and HEVC on Quality"- Moscow State University ](https://www.streamingmedia.com/Articles/News/Online-Video-News/AV1-Beats-VP9-and-HEVC-on-Quality-if-Youve-Got-Time-says-Moscow-State-122945.aspx)
- [All the memes are from /r/SiliconValleyHBO subreddit](https://www.reddit.com/r/SiliconValleyHBO)
