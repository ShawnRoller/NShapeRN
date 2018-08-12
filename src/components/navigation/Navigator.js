import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';

openDrawer = (navigation) => {
  navigation.toggleDrawer();
}

const DrawerStack = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
},
{
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Text onPress={() => this.openDrawer(navigation)}>Menu</Text>
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
  DrawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  initialRouteName: 'LoginStack'
});

export default Navigator;
