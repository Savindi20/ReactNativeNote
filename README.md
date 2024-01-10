## **React Native** ##

## Step 1: Create React Native Project 

```bash
# using npm
npx react-native init project_name
```

## Step 2: Check Common and Android Features and set all features

```bash
# using npm
npx react-native doctor
```

Common
 ✓ Node.js - Required to execute JavaScript code  --(latest version)
 ✓ npm - Required to install NPM dependencies
 ● Metro - Metro Bundler is not running

Android
 ✖ Adb - No devices and/or emulators connected. Please create emulator with Android Studio or connect Android device.
 ✓ JDK - Required to compile Java code  --(version should be 17)
 ✓ Android Studio - Required for building and installing your app on Android
 ✓ ANDROID_HOME - Environment variable that points to your Android SDK installation
 ✓ Gradlew - Build tool required for Android builds
 ✓ Android SDK - Required for building and installing your app on Android

### For Android

```bash
# using npm
npx react-native run-android
```
 ✓ use git bash in the project foler and build metro 