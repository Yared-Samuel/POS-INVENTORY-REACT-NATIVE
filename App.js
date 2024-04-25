import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from "./redux/store"
// axios.defaults.withCredentials = true
export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
