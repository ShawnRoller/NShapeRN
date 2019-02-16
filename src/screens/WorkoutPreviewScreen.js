import React from 'react';
import { View } from 'react-native';
import { SimpleTableView } from '../components/common/';

class WorkoutPreviewScreen extends React.PureComponent {

  static navigationOptions = {
    title: 'Preview',
  }

  constructor(props) {
    super(props);
    this.state = {
      cells : [
        {id: '1', title: 'Exercise 1', screen: null, hasSwitch: true, toggled: true},
        {id: '2', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '3', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
      ]
    }
  }

  _onSwitchToggled = (item) => {
    const cells = Object.assign([], this.state.cells);
    const cellIndex = cells.findIndex((cell) => {
      return item.id === cell.id;
    });
    const cell = cells[cellIndex];
    cell.toggled = !cell.toggled;
    cells[cellIndex] = cell;
    this.setState({ cells });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <SimpleTableView data={this.state.cells} onSwitchToggled={this._onSwitchToggled} />
      </View>
    );
  }

}

const styles = {
  containerStyle: {
    flex: 1
  }
}

export default WorkoutPreviewScreen;
