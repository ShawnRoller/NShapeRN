import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';

const TESTING = false;
const TEST_ROUTE = 'DrawerNavigation';

openDrawer = (navigation) => {
  console.log(navigation.state);
  navigation.toggleDrawer();
}

renderMenuButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => this.openDrawer(navigation)}>
      <Image 
        source={require('../../images/NSettings.png')} 
        style={styles.menuStyle} 
        resizeMode='contain' 
      />
    </TouchableOpacity>
  );
}

const DrawerStack = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
},
{
  headerMode: 'float',
  gesturesEnabled: false,
  navigationOptions: ({ navigation }) => ({
    headerLeft: this.renderMenuButton(navigation)
  })
});

const LoginStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen }
}, 
{
  headerMode: 'float'
});

const Navigator = createStackNavigator({
  LoginStack: { screen : LoginStack },
  DrawerNavigation: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  initialRouteName: TESTING ? TEST_ROUTE : 'LoginStack'
});

const styles = {
  menuStyle: {
    marginLeft: 10,
    width: 30,
    height: 30
  }
};

export default Navigator;
