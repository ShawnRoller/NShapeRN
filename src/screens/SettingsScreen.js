import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, SimpleCell } from '../components/common/';

const CELLS = [
  {id: '1', title: 'Exercises', screen: 'SetupExercises', toggle: false},
  {id: '2', title: 'Sounds', screen: null, toggle: true},
  {id: '3', title: 'Credits', screen: 'Credits', toggle: false},
]

class SettingsScreen extends PureComponent {

  _navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _keyExtractor = (item, index) => item.id;

  _onItemTap = (item) => {
    if (item.screen && !item.toggle) {
      this._navigateToScreen(item.screen);
    }
    else if (item.toggle) {
      // Handle toggling the switch
    }
  }

  _renderItem = ({item}) => {
    return (
      <SimpleCell 
        key={item.id}
        onPressItem={this._onItemTap} 
        backgroundColor='#fff' 
        textColor='#333'
        textMarginLeft={50}
        height={50}
        fontSize={30}
        hasSwitch={item.toggle}
      >
        {item.title}
      </SimpleCell>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>This is the settings screen This is the settings screen This is the settings screen This is the settings screen</Text>
        <Button backgroundColor='#000' textColor='#fff' shadow fontSize={20}>This is a screen</Button>
        <FlatList
          data={CELLS}
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
