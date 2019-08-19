import React, { Component } from 'react';
import { View } from 'react-native';
import Navigator from './components/navigation/Navigator';
import { Hello } from './components/tstest/Hello';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hello name='Shane' enthusiasmLevel={1} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  }
};

export default App;
