import { registerRootComponent } from 'expo';
import App from './App';
import {name as appName} from './app.json';
import { AppRegistry } from 'react-native';


AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);

// import { registerRootComponent } from 'expo';
// import React from 'react';
// import { AppRegistry, View } from 'react-native';

// AppRegistry.registerComponent("main", () => Root)

// registerRootComponent(App);
