## WearON  
[WearON](http://umbrellium.co.uk/initiatives/wearon/) is a prototyping platform for wearable designers to connect their devices quickly and simply to a smartphone, to the web and to each other.

## About WearON mobile phone app 

The app was developed with the latest up to date cordova version 6.3.1. It supports android version: 
* Android version >6.0.1 

## Note

This app is developed using Arduino Uno connected to Ble mini and also on Blend Micro board 

If you are using Blend Micro board, please comment out:
* line 191 in scan_for_device.js
* line 718-722 in global.js

## Deploying the app on an android phone locally using Terminal
* Clone the project from github. 
* Go to https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html to download the various dependencies in ogrder to set up your SDK environment to deploy Cordova apps for Android devices. 
* Alternatively, you can also check out our [Wiki](https://github.com/umbrellium/WearON-android-app/wiki) for instructions on installing the various dependencies using our method
* Open a new terminal window.
* Redirect to the source code directory, run the following command to check whether any dependencies are missing
```bash
$ cordova build android
```
* if the build is successful. Connect your android phone to your computer, make sure the following setting on your phone is enabled:
* In `Settings` -> `Security` -> enable `Unknown sources`
* In `Settings` -> `Developer options` -> enable `USB debugging`
* Run the app via Terminal onto your mobile phone
```bash
$ cordova run android
```
## Creating apk file
* If you have make changes to the source code and would like to build a new apk file
* Open a new terminal window.
* Redirect to the source code directory
* Build a new apk file
```bash
$ cordova build --release
```
* The apk file can be found in `platforms` -> `android` -> `build` -> `outputs` -> `apk` -> `android-release-unsigned.apk`

## About
WearON is an open source initiative created by [Umbrellium](http://umbrellium.co.uk/) built for the community and for us to quickly prototype connected wearables and iot devices. Join us in improving the project by contributing through github or simply drop us a message if there is any question or issue with using the platform!







