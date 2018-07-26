import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <SafeAreaView><Text>Hello thar!Hello thar!Hello thar!Hello thar!Hello thar!Hello thar!Hello thar!Hello thar!</Text></SafeAreaView>
    );
  }
}

export default HomeScreen;
