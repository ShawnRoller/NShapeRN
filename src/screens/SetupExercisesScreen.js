import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { SimpleCell } from '../components/common/';

const DATA = [
  {id: '1', title: 'Bench Press', screen: 'Edit Exercise', hasSwitch: true, toggled: true},
  {id: '2', title: 'Abdominal Crunch', screen: 'Edit Exercise', hasSwitch: true, toggled: true},
  {id: '3', title: 'Squat', screen: 'Edit Exercise', hasSwitch: true, toggled: true},
  {id: '4', title: 'Deadlift', screen: 'Edit Exercise', hasSwitch: true, toggled: true},
  {id: '5', title: 'Pull Up', screen: 'Edit Exercise', hasSwitch: true, toggled: true},
]

class SetupExercises extends PureComponent {

  static navigationOptions = {
    title: 'Exercises',
  }

  constructor(props) {
    super(props);
    this.state = {
      cells: DATA
    }
  }

  _keyExtractor = (item) => item.id;

  _onItemTap = (item) => {
    console.log(item);
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
        textMarginLeft={30}
        height={40}
        fontSize={20}
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
      <View>
        <FlatList
          data={this.state.cells}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

}

export default SetupExercises;
