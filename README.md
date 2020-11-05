# Detector App with React Native

## Installation

## How to import modules?

It doesn't need to write a relative path, is set `src` as root. Can be imported from an absolute path based on `src`. 

```js
// before
import client from './src/services'

// after
import client from 'src/services'
```

## Navigator

@react-navigation

#### What's the differences with @react-navigation and react-native-navigation??

- @react-navigation
  - based on javascript
  - 300k downloads
  - v4 is used in previous projects (current version is v5)
- react-native-navigation
  - based on native (obj-c/swift, java/kotlin)
  - 30k downloads

## Styling

scss

## State Manager for local data

recoil

#### What is included in the local data??

- user logged in session

## Graphql client for remote data

apollo

#### What is included in the remote data??

- data fetched from rest of external