import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SideMenu from '../../screens/SideMenu';
import StartWorkoutScreen from '../../screens/StartWorkoutScreen';
import CustomWorkoutScreen from '../../screens/CustomWorkoutScreen';
import SetupExercisesScreen from '../../screens/SetupExercisesScreen';
import CreditsScreen from '../../screens/CreditsScreen';
import WorkoutPreviewScreen from '../../screens/WorkoutPreviewScreen';
import ActiveWorkoutScreen from '../../screens/ActiveWorkoutScreen';

const TESTING = true;
const TEST_ROUTE = 'ActiveWorkout';
const TEST_SCREEN = 'Home';

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
  CustomWorkout: CustomWorkoutScreen,
  SetupExercises: SetupExercisesScreen,
  Credits: CreditsScreen,
  WorkoutPreview: WorkoutPreviewScreen,
  ActiveWorkout: {
    screen: ActiveWorkoutScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none',
      title: 'test',
    })
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const DrawerStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen }
},
{
  contentComponent: SideMenu,
  drawerWidth: 250,
  initialRouteName: TESTING ? TEST_SCREEN :'Home'
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => ({
      headerLeft: this.renderMenuButton(navigation)
    })
  },
  MainStack
},
{
  headerMode: 'float',
  gesturesEnabled: true,
});

const LoginStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen }
}, 
{
  headerMode: 'float'
});

const AppNavigator = createStackNavigator({
  LoginStack: { screen : LoginStack },
  DrawerNavigation: { screen: DrawerNavigation },
  MainStack: { screen: MainStack },
  ActiveWorkout: {
    screen: ActiveWorkoutScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none',
      title: 'test',
    })
  }

}, {
  headerMode: 'none',
  initialRouteName: TESTING ? TEST_ROUTE : 'LoginStack'
});

const Navigator = createAppContainer(AppNavigator);

const styles = {
  menuButtonStyle: {
    marginLeft: 10,
    width: 30,
    height: 30
  }
};

export default Navigator;
