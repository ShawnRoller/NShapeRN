import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, SimpleCell } from '../components/common/';

class SettingsScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      cells: [
        {id: '1', title: 'Exercises', screen: 'SetupExercises', hasSwitch: false, toggled: false},
        {id: '2', title: 'Sounds', screen: null, hasSwitch: true, toggled: false},
        {id: '3', title: 'Credits', screen: 'Credits', hasSwitch: false, toggled: false},
      ]
    }
  }

  _navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _keyExtractor = (item) => item.id;

  _onItemTap = (item) => {
    console.log(item);
    if (item.screen && !item.hasSwitch) {
      this._navigateToScreen(item.screen);
    }
    else if (item.hasSwitch) {
      // Handle toggling the switch
    }
  }

  _onSwitchToggled = (newItem) => {
    const newCells = Object.assign([], this.state.cells);
    let foundIndex = newCells.findIndex((item) => item.id === newItem.id);
    newCells[foundIndex] = newItem;
    this.setState({ cells: newCells });
  }

  _renderItem = ({item}) => {
    return (
      <SimpleCell 
        key={item.id}
        item={item}
        onPressItem={this._onItemTap} 
        backgroundColor='#fff' 
        textColor='#333'
        textMarginLeft={50}
        height={50}
        fontSize={30}
        hasSwitch={item.hasSwitch}
        onSwitchToggled={this._onSwitchToggled}
        switchToggled={item.toggled}
      >
        {item.title}
      </SimpleCell>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.cells}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = {
  containerViewStyle: {
    flex: 1
  }
}

export default SettingsScreen;
