import React, { Component } from 'react';
import { View } from 'react-native';
import Navigator from './components/navigation/Navigator';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
};

export default App;
