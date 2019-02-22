import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SimpleTableView } from '../components/common/';

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

  render() {
    return (
      <View>
        <SimpleTableView data={this.state.cells} onSwitchToggled={this._onSwitchToggled} onPressItem={this._onItemTap} />
      </View>
    );
  }

}

export default SetupExercises;
