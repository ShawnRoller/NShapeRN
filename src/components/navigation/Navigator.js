import React from 'react';
import { Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';

openDrawer = (navigation) => {
  navigation.toggleDrawer();
}

const DrawerStack = DrawerNavigator({
  HomeScreen: { screen: HomeScreen }
});

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
},
{
  headerMode: 'none',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Text onPress={() => this.openDrawer(navigation)}>Menu</Text>
  })
});

const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen }
}, 
{
  headerMode: 'float'
});

const Navigator = StackNavigator({
  LoginStack: { screen : LoginStack },
  DrawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  initialRouteName: 'LoginStack'
});

export default Navigator;
