import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ThemeColor } from '../components/Theme';

class SideMenu extends PureComponent {
  constructor(props) {
    super(props);
    // console.log(props.navigation._childrenNavigation.Home.isFocused());
    // console.log(props.navigation._childrenNavigation.Profile.isFocused());
    // this.renderMenuItems(this.props.navigation._childrenNavigation);
    
    var items = [];
    for (child in props.navigation._childrenNavigation) {
      items.push(child);
    }

    this.state = {
      items
    }

    console.log(items);

  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  renderMenuItems(children) {
    console.log(children);
    for (child in children) {

      console.log(children[child].isFocused());
    }
  }

  renderItem = (item) => {
    console.log(item);
    // const textStyle = item.isFocused() ? styles.focusedTextStyle : styles.textStyle;
    return (
      <TouchableOpacity keyExtractor={item.item.index} style={styles.buttonStyle} onPress={this.navigateToScreen(item.item)}>
        <Text style={styles.textStyle}>{item.item}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.state.items}
          renderItem={( item ) => (
            this.renderItem(item)
          )}
        />
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
