'use strict';
import React from 'react';
import { View, Text, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from '../components/common/Button';
import * as Colors from '../components/Theme';

const DATA = [
  { name: 'Push up', duration: 10, order: 1, completed: false },
  { name: 'Pull up', duration: 9, order: 2, completed: false },
  { name: 'Sit up', duration: 8, order: 5, completed: false },
  { name: 'Chin up', duration: 7, order: 4, completed: false },
  { name: 'Squat', duration: 6, order: 3, completed: false },
]

class ActiveWorkoutScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      exercises: DATA,
      currentExerciseIndex: 0,
      isTimerRunning: false,
      timerFill: 100,
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
    if (exercises.length > index) {
      exerciseIndex = index;
      exercise = exercises[exerciseIndex];
    }
    return {exercise, exerciseIndex};
  }

  _onPlayButtonPress = () => {
    if (this.state.isTimerRunning) {
      this._pauseExercise();
    } else {
      let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
      this.setState({ isTimerRunning: true}, () => {
          this._startExercise(exercise);
      });
    }
  }

  _pauseExercise = () => {
    // this.circularProgress.animate(this.state.timerFill, this.state.timerFill, 0, Easing.bounce);
  }

  _startExercise = (exercise) => {
    this.circularProgress.reAnimate(100, 1, exercise.duration * 1000, Easing.linear);
  }

  _onExerciseEnd = () => {
    let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex + 1);
    console.log(exerciseIndex, exercise);
    this.setState({ currentExerciseIndex: exerciseIndex }, () => {
      this._startExercise(exercise);
    });
  }

  _onAnimationEnd = () => {
    if (this.state.isTimerRunning) {
      this._onExerciseEnd();
    }
  }

  _getTimerString = (duration, fillPercent) => {
    return Math.round(duration * (fillPercent / 100));
  }

  _renderProgress = () => {
    let { exercise, exerciseIndex } = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);

    return (
      <AnimatedCircularProgress
        ref={(ref) => this.circularProgress = ref}
        fill={this.state.timerFill}
        rotation={-360}
        size={200}
        width={4}
        tintColor='red'
        onAnimationComplete={this._onAnimationEnd}
      >
      {(fill) => (
        <Text style={[styles.timerTextStyle, {color:Colors.DarkGray}]}>
          { this._getTimerString(exercise.duration, this.state.timerFill) }
        </Text>
      )}
      </AnimatedCircularProgress>
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.exercisesContainerStyle}>
          <Button onPress={this._onPlayButtonPress}>start timer</Button>
        </View>
        <View style={styles.clockContainerStyle}>
          {this._renderProgress()}
        </View>
        <View style={styles.controlsContainerStyle}>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainerStyle: {
    flex: 1,
  },
  exercisesContainerStyle: {
    flex: 1,
  },
  controlsContainerStyle: {
    flex: 1
  },
  timerTextStyle: {
    fontSize: 49,
  }
}

export default ActiveWorkoutScreen;
