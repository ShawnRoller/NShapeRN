import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { DrawerItems } from 'react-navigation';
import { ThemeColor } from '../components/Theme';
import FirebaseAPI from '../components/api/FirebaseAPI';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    
    var items = [];
    var index = 0;
    for (child in props.navigation._childrenNavigation) {
      const item = { child, index };
      items.push(item);
      index++;
    }

    this.state = {
      items
    }
  }

  componentWillUpdate() {
    console.log(this.props.activeItemKey);
    this.render();
  }

  navigateToScreen = (route) => () => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

    attemptLogout = () => {
      var api = new FirebaseAPI({
        success: () => {
          this.props.navigation.popToTop();
        },
        failure: (error) => {
          this.logoutFailure(error);
        }
      });

    try {
      api.logout();
    } catch (error) {
      console.log(`Could not connect to firebase: ${error}`);
    }
  }

  logoutFailure = (error) => {
    if (error) {
      console.log('Error: ' + JSON.stringify(error));
      Alert.alert('Whoops!', error);
    }
    else {
      Alert.alert('Whoops!', 'Something went wrong.');
    }
  }

  onLogoutPressed = () => {
    this.attemptLogout();
  }

  renderItem = (item) => {
    const textStyle = item.child === this.props.activeItemKey ? styles.focusedTextStyle : styles.textStyle;
    console.log(item.child + this.props.activeItemKey);
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen(item.child)}>
        <Text style={textStyle}>{item.child}</Text>
      </TouchableOpacity>
    );
  }

  getStyle = (item) => {
    return ( 
      item === this.props.activeItemKey ? styles.focusedTextStyle : styles.textStyle
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
          {/* <FlatList
            data={this.state.items}
            extraData={this.state}
            renderItem={( item ) => (
              this.renderItem(item.item)
            )}
            keyExtractor={ item => item.index.toString() }
          /> */}
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Home')}>
          <Text style={this.getStyle('Home')}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Profile')}>
          <Text style={this.getStyle('Profile')}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToScreen('Settings')}>
          <Text style={this.getStyle('Settings')}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.footerContainerStyle}>
          <TouchableOpacity onPress={this.onLogoutPressed}>
            <Text style={styles.logoutTextStyle}>Logout</Text>
          </TouchableOpacity>
          <Text style={styles.versionTextStyle}>v0.1.0</Text>
        </View>
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
    fontWeight: '300'
  },
  focusedTextStyle: {
    alignSelf: 'center',
    fontSize: 36,
    color: ThemeColor,
    fontWeight: '300'
  },
  footerContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  logoutTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: ThemeColor,
    fontWeight: '300'
  },
  versionTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#4a4a4a',
    fontWeight: '300',
    alignSelf: 'flex-end'
  }
}

export default SideMenu;
