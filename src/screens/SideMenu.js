import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ThemeColor } from '../components/Theme';

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
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Home')}>
          <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Profile')}>
          <Text style={styles.textStyle}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Settings')}>
          <Text style={styles.textStyle}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  buttonStyle: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 36,
    color: '#4a4a4a',
    // fontFamily: 'Gotham-Book'
  }
}

export default SideMenu;
