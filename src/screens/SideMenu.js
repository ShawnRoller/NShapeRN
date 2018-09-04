import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class SideMenu extends PureComponent {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View>
          <Button color='#841584' title='Home' onPress={this.navigateToScreen('Home')}/>
        </View>
        <View>
          <Button color='#841584' title='Profile' onPress={this.navigateToScreen('Profile')}/>
        </View>
        <View>
          <Button color='#841584' title='Settings' onPress={this.navigateToScreen('Settings')}/>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 35,
    flex: 1
  },
  buttonStyle: {
    color: '#841584'
  }
}

export default SideMenu;
