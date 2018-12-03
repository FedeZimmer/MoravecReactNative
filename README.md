# Moravec

## Running integration tests

Just set ENVFILE var to '.env.test' before running the app.

On Webstorm, you can duplicate the original app runner and set this Environment variable on the configuration window 
for the copy.

Tests results will appear in log console. 


## Playing tutorial videos

Create a new file named 'secrets.js' on the root directory.

On secrets.js, add a constant with name 'YOUTUBE_API_KEY' that contains the api key of YouTube API for Moravec
by adding the following line:

    export const YOUTUBE_API_KEY = "paste_key_here";

## Build a new production release for Android

Copy APK signature config (gradle.properties and .keystore file) into android/app.

Change app version accordingly.

Build with:

    cd android
    ENVFILE=.env.production ./gradlew assembleRelease
    
Build and install release:

    cd android
    ENVFILE=.env.production ./gradlew installRelease

Finally, generate the release sourcemaps and upload them to Bugsnag. 
Docs: https://docs.bugsnag.com/platforms/react-native/showing-full-stacktraces/#uploading-source-maps