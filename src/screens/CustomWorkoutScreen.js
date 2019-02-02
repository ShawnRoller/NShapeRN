import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { SimpleCell } from '../components/common/';

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

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => {
    return (
      <SimpleCell
        key={item.id}
        item={item}
        onPressItem={this._onItemTap}
        backgroundColor='#fff'
        textColor='#333'
        textMarginLeft={30}
        height={50}
        fontSize={30}
        hasSwitch={item.hasSwitch}
      >
        {item.title}
      </SimpleCell>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.cells}
          renderItem={this._renderItem}
        />
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
