import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SideMenu from '../../screens/SideMenu';

const TESTING = true;
const TEST_ROUTE = 'DrawerNavigation';

openDrawer = (navigation) => {
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
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen }
},
{
  // contentComponent: ({ navigation }) => ( <SideMenu navigation={navigation}/> ),
  contentComponent: SideMenu,
  drawerWidth: 250,
  // contentOptions: {
  //   activeTintColor: 'red',
  //   style: focusedTextStyle
  // }
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
