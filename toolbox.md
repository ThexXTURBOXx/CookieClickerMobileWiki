# Cookie Clicker Mobile Toolbox

## What is CCMobileToolbox?
It's a little program, written in Java, which enables support for:
- Transferring saves between different community patches (since 1.1.0 full support)
- Transferring and copying saves between devices
- Cheating (since 1.1.0 full support for manual cheating, e.g. editing files yourself)
- Backup of saves
- Restoring old backups

## [Download](https://github.com/ThexXTURBOXx/CookieClickerMobileToolbox/releases)

## [Source Code](https://github.com/ThexXTURBOXx/CookieClickerMobileToolbox)

## Install and preparations

### Windows
1. Download a [community patch](patches.md) on your phone, install it and collect at least 1 cookie in there
2. Download the toolbox
3. [Install adb](https://www.xda-developers.com/install-adb-windows-macos-linux/), if not already installed and add it to your ``PATH``
4. [Install Java](https://www.java.com/de/download/) (at least 8), if not already installed
5. Enable developer options on your phone and enable USB Debugging in the developer options

### Linux
1. Download a [community patch](patches.md) on your phone, install it and collect at least 1 cookie in there
2. Download my program on a Linux computer
3. Install adb with ``sudo apt install android-tools-adb``, if not already installed and add it to your ``environment``
4. Install Java (at least 8) with ``sudo apt-get install openjdk-8-jre``, if not already installed
5. Enable developer options on your phone and enable USB Debugging in the developer options

### Mac
Should be supported afaik, but I can't test it myself.<br>
In general, it should be nearly the same as on Linux, apart from installing adb, which is different.

## How to use

### Backups
1. Make sure, your phone is connected to the PC via USB and you have followed the "Installation and preparation" steps (also, if you use ``adb`` yourself, make sure, there is no emulator and no second device running or something like that)
2. Start the toolbox and click on the "Backup" button
3. Choose the patch you want to backup your save from and click the "Choose" button
4. Go to your desired backup location and press on "Save"
5. Your phone should get a popup message, click on "Backup" or something similar and **DON'T TYPE IN ANY PASSWORD**
6. Your backup should be saved in your chosen folder

### Restore an old backup
1. Make sure, your phone is connected to the PC via USB and you have followed the "Installation and preparation" steps (also, if you use ``adb`` yourself, make sure, there is no emulator and no second device running or something like that)
2. Start the toolbox and click on the "Restore" button
3. Go to the backup location and open the ``package.list`` in there
4. Your phone should get a popup message, click on "Restore" or something similar and **DON'T TYPE IN ANY PASSWORD**
5. Your backup should now have been restored

### Converting a Backup to another patch
1. Make sure, your phone is connected to the PC via USB and you have followed the "Installation and preparation" steps (also, if you use ``adb`` yourself, make sure, there is no emulator and no second device running or something like that)
2. Click on the "Convert save" button
3. Go to the save location, which should be converted, and open the ``package.list`` in there
4. Go to your desired target location and press on "Save"
5. Choose the patch you want to convert your save to and click the "Choose" button
6. Your phone should get a popup message, click on "Backup" or something similar and **DON'T TYPE IN ANY PASSWORD**
7. Your save should have been converted now and the old save should still be available

### Cheating
If you want to cheat yourself cookies, buildings or anything else: Well, here you go:
1. Create a backup of your save with the toolbox as described here on this page (you may want to create 2, as you can quickly brick your save and consequently wipe it)
2. Go to the folder with your backup and go into ``apps/org.dashnet.cookieclicker*/f``
3. If you want to edit your live slot, edit the file ``CookieClickerSave.txt``. If you want to edit your alpha slot, edit the file ``CookieClickerSaveTest.txt``
4. Edit everything you want to edit in there
5. Restore the save with the toolbox as described here on this page
