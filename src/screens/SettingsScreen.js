import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/common/Button';

class SettingsScreen extends PureComponent {

  navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  testNavigate = () => {
    this.navigateToScreen('SetupExercises');
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>This is the settings screen This is the settings screen This is the settings screen This is the settings screen</Text>
        <Button backgroundColor='#000' textColor='#fff' shadow fontSize={20} onPress={this.testNavigate}>This is a screen</Button>
      </View>
    );
  }
}

const styles = {
  containerViewStyle: {
    flex: 1
  }
}

export default SettingsScreen;
