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

  render() {
    return (
      <View style={styles.containerStyle}>
        <SimpleTableView data={this.state.cells} />
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
