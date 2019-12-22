# Cookie Clicker Mobile Toolbox

## What is CCMobileToolbox?
It's a little program, written in Java, which enables support for:
- Transferring saves between different community patches (only Original -> Trixter's Patch supported for now)
- Cheating (Is possible in general, but there is still some TODO)
- Backup of saves
- Restoring old backups

## [Download](https://github.com/ThexXTURBOXx/CookieClickerMobileToolbox/releases)

## [Source Code](https://github.com/ThexXTURBOXx/CookieClickerMobileToolbox)

## How to use
You need a PC, which you can connect your smartphone to and then follow these instructions:

### Windows
1. Download a [community patch](patches.md) on your phone, install it and collect at least 1 cookie in there
2. Download the toolbox
3. [Install adb](https://www.xda-developers.com/install-adb-windows-macos-linux/), if not already installed
4. [Install Java](https://www.java.com/de/download/) (at least 8), if not already installed
5. Enable developer options on your phone and enable USB Debugging in the developer options
6. Connect your phone to your PC
7. Run my program with ``java -jar CCMobileSwitcher-1.0.0-shaded.jar``
8. Follow the instructions on your phone and on the PC
9. When it's done, the data should be transferred and you should have a backup on your PC

### Linux
1. Download a [community patch](patches.md) on your phone, install it and collect at least 1 cookie in there
2. Download my program on a Linux computer
3. Install adb with ``sudo apt install android-tools-adb``, if not already installed
4. Install Java (at least 8) with ``sudo apt-get install openjdk-8-jre``, if not already installed
5. Enable developer options on your phone and enable USB Debugging in the developer options
6. Connect your phone to your PC
7. Run my program with ``java -jar CCMobileSwitcher-1.0.0-shaded.jar``
8. Follow the instructions on your phone and on the PC
9. When it's done, the data should be transferred and you should have a backup on your PC

### Mac
Should be supported afaik, but I can't test it myself.<br>
In general, it should be nearly the same as on Linux, apart from installing adb, which is different.
