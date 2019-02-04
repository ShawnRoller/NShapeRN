import React from 'react';
import { View, FlatList } from 'react-native';
import { SimpleCell } from '../components/common/';

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

  _keyExtractor = (item) => item.id;

  _onSwitchToggled = (newItem) => {

  }

  _renderItem = ({item}) => {
    return (
      <SimpleCell 
        key={item.id}
        item={item}
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
      <View style={styles.containerStyle}>
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
  containerStyle: {
    flex: 1
  }
}

export default WorkoutPreviewScreen;
