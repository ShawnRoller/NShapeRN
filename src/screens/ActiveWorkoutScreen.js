'use strict';
import React from 'react';
import { View, Text } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';
import ThemeColor from '../components/Theme';

class ActiveWorkoutScreen extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>
          This is the active workout screen
        </Text>
        <CountdownCircle
          seconds={60}
          radius={30}
          borderWidth={8}
          color={ThemeColor}
          bgColor='#fff'
          textStyle={{ fontSize: 20 }}
          onTimeElapsed={() => console.log('Elapsed!')}
        />
      </View>
    )
  }
}

export default ActiveWorkoutScreen;
