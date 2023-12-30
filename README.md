# Cookie Clicker Mobile Wiki Generator

In order to extract the required values out of the app, follow these steps:

1. Acquire the Cookie Clicker APK by e.g., pulling it from the device:
   1. `adb shell pm path org.dashnet.cookieclicker`
   2. `adb pull <PATH_FROM_BEFORE> base.apk`
2. Make the APK debuggable
   1. You might need to adjust some paths within the `bat` files
   2. If the current keystore is invalid, do `./genNewKeystore.bat`
   3. `./makeDebuggable.bat`
3. Install the debuggable APK using `adb install -r baseDebuggable.apk`
4. Connect to the debugger via CDP
   1. Open `chrome://inspect/#devices` in a Chromium-based browser
   2. Inspect the Cookie Clicker application `index.html`
5. Export the required values as JSON
   1. Execute the commands from `export.js` using the console
   2. Copy the output as-is to the required files in the folder `json`
6. [Probably never needed] Adjust the formatter
   1. The formatter code can be found in `main.js` within `baseDebuggable.apk`
   2. Copy it out of there and replace it within `CCFormatter.java`
7. Execute the `Main` class and the Wiki files will be automatically generated
