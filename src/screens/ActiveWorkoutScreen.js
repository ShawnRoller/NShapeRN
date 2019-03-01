'use strict';
import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ThemeColor from '../components/Theme';

class ActiveWorkoutScreen extends React.PureComponent {

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          This is the active workout screen
        </Text>
        <AnimatedCircularProgress
          size={200}
          width={4}
          fill={100}
          tintColor='red'
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor='#fff'
        />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default ActiveWorkoutScreen;
