import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SideMenu from '../../screens/SideMenu';
import StartWorkoutScreen from '../../screens/StartWorkoutScreen';
import CustomWorkoutScreen from '../../screens/CustomWorkoutScreen';

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
        style={styles.menuButtonStyle} 
        resizeMode='contain' 
      />
    </TouchableOpacity>
  );
}

const MainStack = createStackNavigator({
  StartWorkout: StartWorkoutScreen,
  CustomWorkout: CustomWorkoutScreen
},
{
  headerMode: 'none'
})

const DrawerStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen },
  StartWorkout: { screen: StartWorkoutScreen },
  CustomWorkout: { screen: CustomWorkoutScreen }
},
{
  // contentComponent: ({ navigation }) => ( <SideMenu navigation={navigation}/> ),
  contentComponent: SideMenu,
  drawerWidth: 250,
  initialRouteName: 'Home'
  // contentOptions: {
  //   activeTintColor: 'red',
  //   style: focusedTextStyle
  // }
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack },
  // MainStack: MainStack
},
{
  headerMode: 'float',
  gesturesEnabled: true,
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
  menuButtonStyle: {
    marginLeft: 10,
    width: 30,
    height: 30
  }
};

export default Navigator;
