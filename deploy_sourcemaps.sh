#!/bin/bash

APP_VERSION=$1

echo "----> Generating sourcemaps for iOS..."

react-native bundle \
    --platform ios \
    --dev false \
    --entry-file index.js \
    --bundle-output sourcemaps/ios-release.bundle \
    --sourcemap-output sourcemaps/ios-release.bundle.map

echo "----> Done!"

echo "----> Generate sourcemaps for Android..."

react-native bundle \
    --platform android \
    --dev false \
    --entry-file index.js \
    --bundle-output sourcemaps/android-release.bundle \
    --sourcemap-output sourcemaps/android-release.bundle.map

echo "----> Done!"

echo "----> Uploading iOS sourcemaps to Bugsnag..."

bugsnag-sourcemaps upload --api-key 679da4947e65c72a8ce121acc5b5a832 --app-version ${APP_VERSION} --minified-file sourcemaps/ios-release.bundle --source-map sourcemaps/ios-release.bundle.map --minified-url main.jsbundle

echo "----> Done!"

echo "----> Uploading Android sourcemaps to Bugsnag..."

bugsnag-sourcemaps upload --api-key 679da4947e65c72a8ce121acc5b5a832 --app-version ${APP_VERSION} --minified-file sourcemaps/android-release.bundle --source-map sourcemaps/android-release.bundle.map --minified-url index.android.bundle

echo "----> Done!"