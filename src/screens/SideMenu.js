import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

class SideMenu extends PureComponent {
  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View>
        <View>
          <Text onPress={this.navigateToScreen('Home')}>Home</Text>
        </View>
        <View>
          <Text onPress={this.navigateToScreen('Profile')}>Profile</Text>
        </View>
        <View>
          <Text onPress={this.navigateToScreen('Settings')}>Settings</Text>
        </View>
      </View>
    );
  }

}

export default SideMenu;
