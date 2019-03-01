'use strict';
import React from 'react';
import { View, Text, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from '../components/common/Button';
import ThemeColor from '../components/Theme';

class ActiveWorkoutScreen extends React.PureComponent {

  _onButtonPress = () => {
    this.circularProgress.animate(10, 8000, Easing.quad);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          This is the active workout screen
        </Text>
        <Button onPress={this._onButtonPress}>start timer</Button>
        <AnimatedCircularProgress
          ref={(ref) => this.circularProgress = ref}
          rotation={-360}
          size={200}
          width={4}
          fill={100}
          tintColor='red'
          onAnimationComplete={() => console.log('onAnimationComplete')}
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
