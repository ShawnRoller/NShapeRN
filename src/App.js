import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

export default App;
