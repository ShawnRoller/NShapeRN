'use strict';
import React from 'react';
import { View, Text, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from '../components/common/Button';
import ThemeColor from '../components/Theme';

const DATA = [
  { name: 'Push up', duration: 30, order: 1, completed: false },
  { name: 'Pull up', duration: 25, order: 2, completed: false },
  { name: 'Sit up', duration: 20, order: 5, completed: false },
  { name: 'Chin up', duration: 15, order: 4, completed: false },
  { name: 'Squat', duration: 10, order: 3, completed: false },
]

class ActiveWorkoutScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      exercises: DATA,
      currentExerciseIndex: 0
    }
  }

  componentDidMount() {
    const exercises = this._getSortedExercises(this.state.exercises);
    this.setState({ exercises });
  }

  _getSortedExercises = (exercises) => {
    // TODO: test this
    const sortedData = exercises.sort((a, b) => {
      return a.order < b.order;
    });
    return sortedData;
  }

  _getExercise = (exercises, index) => {
    if (!exercises.length) {
      // TODO: handle no exercises
      console.log('fail');
      return;
    }

    let exerciseIndex = 0;
    let exercise = exercises[exerciseIndex];
    if (exercises.count > index) {
      exerciseIndex = index;
      exercise = exercises[exerciseIndex];
    }
    return {exercise, exerciseIndex};
  }

  _onButtonPress = () => {
    let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
    this._startExercise(exercise);
  }

  _startExercise = (exercise) => {
    this.circularProgress.animate(1, exercise.duration * 1000, Easing.quad);
  }

  _onExerciseEnd = () => {
    let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
    this.setState({ currentExerciseIndex: exerciseIndex }, () => {
      this._startExercise(exercise);
    });
  }

  _renderProgress = () => {
    return (
      <AnimatedCircularProgress
          ref={(ref) => this.circularProgress = ref}
          rotation={-360}
          size={200}
          width={4}
          fill={100}
          tintColor='red'
          onAnimationComplete={() => console.log('onAnimationComplete')}
        />
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          This is the active workout screen
        </Text>
        <Button onPress={this._onButtonPress}>start timer</Button>
        {this._renderProgress()}
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
