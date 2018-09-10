import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { ThemeColor } from '../components/Theme';

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
  }
}

export default SideMenu;
