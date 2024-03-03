<h1>Save Editing</h1>

``adb backup`` and ``adb restore`` can normally be replaced by using [Helium](https://github.com/koush/support-wiki/wiki/Helium-Desktop-Installer-and-Android-App).

**PLEASE BE CONFIDENT IN EVERYTHING YOU DO. I AM NOT LIABLE FOR ANY DAMAGES THAT MAY EASILY OCCUR DURING THESE PROCESSES.**

Table of contents:
<div id="inline_toc" markdown="1">

* TOC
{:toc}

</div>

## NEWS! v7.2 did something...

It was a long time coming, but v7.2 did something. First of all, it should be called v7.20 and that bothers me.
But apart from ranting about its name (lol): It added an export/import button!
If you are using the **live** version (NOT **alpha**), then you might not have this patch yet.
However, for alpha users, this makes backups, restores and even cheating much easier:

### Backup

1. Export the save in-game using the button `Misc -> Export save file...`
2. The resulting file is your backup!

### Restore

1. Click the button `Misc -> Export save file...`
2. Select your save file which you had exported at some point using the procedure described above

### Cheating

1. Open a backup file which you obtained by following the instructions from the [Backup section](#backup) above and decode its contents using some Base64 decoder (e.g., [base64decode.org](https://www.base64decode.org/))
2. Take the resulting, decoded string and change all the values you want to change, but do **not** change or even break its [JSON](https://en.wikipedia.org/wiki/JSON) format!
3. Encode the new string again using some Base64 encoder (e.g., [base64encode.org](https://www.base64encode.org/))
4. Write the Base64 encoded string to some file on your phone
5. Import the save as described in the [Restore section](#restore) above

## Old procedures

In case you are looking for alternatives or solutions for old versions of Cookie Clicker Mobile, here you are!

### Backup [OLD INSTRUCTIONS]

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. You have to execute the following command in the terminal now: ``adb backup org.dashnet.cookieclicker`` and confirm on your phone, which creates a file "backup.ab"

### Restore [OLD INSTRUCTIONS]

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. You have to execute the following command in the terminal now: ``adb restore backup.ab`` and confirm on your phone, which will load the save from the file "backup.ab".

## Converting Alpha Save to Live Save

### Using Weird Z the Cppkiemeister's Script

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. On Windows, install the Git Bash or MinGW Bash
4. Download the Script in the [Discord Message](https://discordapp.com/channels/412363381891137536/581236824349868042/763114003064029245)
5. Do ``chmod +x ./restoreAlphaSave.sh`` to make it executable
6. Just do ``./restoreAlphaSave.sh`` and approve on your phone

### Manual conversion

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. You have to execute the following command in the terminal now: ``adb backup org.dashnet.cookieclicker`` and confirm on your phone, which creates a file "backup.ab"
4. Use the [Android Backup Extractor](https://github.com/nelenkov/android-backup-extractor/releases/download/20181012025725-d750899/abe-all.jar) to convert the ab-File to a tar-File using ``java -jar abe-all.jar unpack backup.ab backup.tar``
5. Extract the contents of the tar-file (using WinRAR, 7z or something like that) and copy the ``apps\org.dashnet.cookieclicker\f\CookieClickerSaveTest.txt`` as ``apps\org.dashnet.cookieclicker\f\CookieClickerSave.txt`` (this will basically override your live save with your test save)
6. Pack it into a tar-File again and convert it to an ab-File using ``java -jar abe-all.jar pack backup.tar backup.ab``
7. Do a ``adb restore backup.ab`` and confirm on your phone

## Cheating [OLD INSTRUCTIONS]

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. You have to execute the following command in the terminal now: ``adb backup org.dashnet.cookieclicker`` and confirm on your phone, which creates a file "backup.ab"
4. Use the [Android Backup Extractor](https://github.com/nelenkov/android-backup-extractor/releases/download/20181012025725-d750899/abe-all.jar) to convert the ab-File to a tar-File using ``java -jar abe-all.jar unpack backup.ab backup.tar``
5. Extract the contents of the tar-file (using WinRAR, 7z or something like that) and go into the folder ``apps\org.dashnet.cookieclicker\f``.
6. If you want to cheat on your Live save, edit the file ``CookieClickerSave.txt``.<br>
If you want to cheat on your Alpha save, edit the file ``CookieClickerSaveTest.txt``.
7. Pack it into a tar-File again and convert it to an ab-File using ``java -jar abe-all.jar pack backup.tar backup.ab``
8. Do a ``adb restore backup.ab`` and confirm on your phone

## Converting between Community Patches

1. Install [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/) if not installed already
2. Connect your phone to your computer via USB and [with Debugging enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)
3. Look up the package name of the patch, which you want to convert **FROM**. Let's say, in our case it was "org.dashnet.cookieclicker" (the original patch, just as an example)
4. You have to execute the following command in the terminal now: ``adb backup org.dashnet.cookieclicker`` and confirm on your phone, which creates a file "backup.ab"
5. Use the [Android Backup Extractor](https://github.com/nelenkov/android-backup-extractor/releases/download/20181012025725-d750899/abe-all.jar) to convert the ab-File to a tar-File using ``java -jar abe-all.jar unpack backup.ab backup.tar``
6. Look up the package name of the patch, which you want to convert **TO**. Let's say, in our case it was "org.dashnet.cookieclickerSuperDuperCommunityPatch" (some community patch, just as an example)
7. Extract the contents of the tar-file (using WinRAR, 7z or something like that) and rename the folder ``apps\org.dashnet.cookieclicker`` to ``apps\org.dashnet.cookieclickerSuperDuperCommunityPatch``
8. Rename the previous "backup.ab" and "backup.tar" to "backupOld.ab" and "backupOld.tar" respectively
9. You have to execute the following command in the terminal now: ``adb backup org.dashnet.cookieclickerSuperDuperCommunityPatch`` and confirm on your phone, which creates another file "backup.ab"
10. Use the [Android Backup Extractor](https://github.com/nelenkov/android-backup-extractor/releases/download/20181012025725-d750899/abe-all.jar) to convert the ab-File to a tar-File using ``java -jar abe-all.jar unpack backup.ab backup.tar``
11. Extract just the file ``backup.tar\apps\org.dashnet.cookieclickerSuperDuperCommunityPatch\_manifest`` and replace the ``apps\org.dashnet.cookieclickerSuperDuperCommunityPatch\_manifest`` from your previously extracted backup.
12. Pack the previously extracted folder into a tar-File again and convert it to an ab-File using ``java -jar abe-all.jar pack backup.tar backup.ab``
13. Do a ``adb restore backup.ab`` and confirm on your phone

## CCMobileToolbox (BROKEN FOR SOME DEVICES)

**DOES NOT WORK ON SOME DEVICES. ON MINE IT WORKS, BUT IT MAY NOT WORK ON YOURS!**<br>
The [Cookie Clicker Mobile Toolbox](toolbox) allows one to convert saves between patches and create backups and restore them.
