import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  navigateToHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello thar!</Text>
        <Button onPress={this.navigateToHome.bind(this)} title="Press me" />
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
