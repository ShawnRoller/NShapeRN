'use strict';
import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ThemeColor from '../components/Theme';

class ActiveWorkoutScreen extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>
          This is the active workout screen
        </Text>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={100}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" 
        />
      </View>
    )
  }
}

export default ActiveWorkoutScreen;
