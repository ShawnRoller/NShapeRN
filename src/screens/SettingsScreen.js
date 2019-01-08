import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, SimpleCell } from '../components/common/';

const CELLS = [
  {key: 'test1'},
  {key: 'test2'}
]

class SettingsScreen extends PureComponent {

  navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  testNavigate = () => {
    this.navigateToScreen('SetupExercises');
  }

  renderItem = ({item}) => {
    return (
      <SimpleCell>{item.key}</SimpleCell>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>This is the settings screen This is the settings screen This is the settings screen This is the settings screen</Text>
        <Button backgroundColor='#000' textColor='#fff' shadow fontSize={20} onPress={this.testNavigate}>This is a screen</Button>
        <FlatList
          data={CELLS}
          renderItem={this.renderItem}
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
