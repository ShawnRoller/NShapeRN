import React from 'react';
import { SafeAreaView } from 'react-native';
import { SimpleTableView, Button, SubContainer } from '../components/common/';
import { ThemeColor } from '../components/Theme';

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
        {id: '4', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '5', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '6', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '7', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '8', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '9', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '10', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '11', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '12', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '13', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '14', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '15', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '16', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '17', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
        {id: '18', title: 'Exercise 2', screen: null, hasSwitch: true, toggled: true},
        {id: '19', title: 'Exercise 3', screen: null, hasSwitch: true, toggled: true},
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

  _onStartPress = () => {
    const navigateAction = this.props.navigation.navigate({
      routeName: 'ActiveWorkout'
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <SimpleTableView data={this.state.cells} onSwitchToggled={this._onSwitchToggled} onPressItem={() => {}}/>
        <SubContainer style={styles.footerStyle}>
          <Button shadow onPress={this._onStartPress} backgroundColor={ThemeColor} textColor='#fff' fontSize={20}>
            Start Workout
          </Button>
        </SubContainer>
      </SafeAreaView>
    );
  }

}

const styles = {
  containerStyle: {
    flex: 1
  },
  footerStyle: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default WorkoutPreviewScreen;
