module.exports = {
  configurations: {
    "ios.sim.debug": {
      binaryPath:
        "ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app",
      build:
        "xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      type: "ios.simulator",
      device: {
        type: "iPhone 12",
      },
    },
    "android.emu.debug": {
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      type: "android.attached",
      device: {
        adbName: "emulator-5554",
      },
    },
    "android.att.release": {
      device: "android.attached",
      app: "android.release",
    },
    "android.genymotion.release": {
      device: "android.genycloud",
      app: "android.release",
    },
  },
};
