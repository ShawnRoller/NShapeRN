# NShape

NShape is a cross-platform workout app built using React Native

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to run NShape in the simulator or on an iOS device, you must run on macOS and install these prerequisites.

* Xcode 11

* Homebrew (package manager)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* React Native 0.59
```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

npm install -g react-native-cli
```

### Installing

In the project root, install npm packages

```
npm i
```

### Common issues

React Native and Xcode don't always get along, and as a result, getting the application running locally may require some addtional troubleshooting steps.

* If you have more than one version of Xcode installed, you need to specify the path to the correct version by running `xcode-select`.  The name of the Xcode application cannot have a space in it, e.g. Xcode 11 needs to be Xcode11

* If you have errors referencing `glog`, you may need to run the glog-init script manually.

* When in doubt, clean the project in Xcode (cmd+shift+k), delete the `derived data` folder.  You may also need to delete and reinstall node_modules, and link the React Native frameworks to the Xcode project:
```
npm run clean
```

## Running the tests

To run the React Native jest unit tests, from the project root:
```
npm run test
```

## Built With

* [React Native](https://facebook.github.io/react-native/docs/0.59/getting-started) - React Native is an open-source framework for developing cross-platform applications using JavaScript
* [React Native Navigation](https://reactnavigation.org/)

## Versioning

NShape uses [SemVer](http://semver.org/) for versioning.

## Authors

* **Shawn Roller**
