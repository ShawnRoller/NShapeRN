import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SimpleTableView } from '../components/common/';

class CustomWorkoutScreen extends PureComponent {

  static navigationOptions = {
    title: 'Custom Workout',
  }

  constructor(props) {
    super(props);
    this.state = {
      cells: [
        {id: '1', title: 'Workout 1', screen: 'WorkoutPreview', hasSwitch: false, toggled: false },
        {id: '2', title: 'Workout 2', screen: 'WorkoutPreview', hasSwitch: false, toggled: false },
        {id: '3', title: 'Workout 3', screen: 'WorkoutPreview', hasSwitch: false, toggled: false },
      ]
    }
  }

  _navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _onItemTap = (item) => {
    if (item.screen) {
      this._navigateToScreen(item.screen);
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <SimpleTableView data={this.state.cells} onPressItem={this._onItemTap} />
      </View>
    );
  }

}

const styles = {
  containerStyle: {
    flex: 1
  }
}

export default CustomWorkoutScreen;
