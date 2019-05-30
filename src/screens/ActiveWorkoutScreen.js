'use strict';
import React from 'react';
import { View, Text, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from '../components/common/Button';
import * as Colors from '../components/Theme';
import Workout from '../models/Workout';
import Exercise from '../models/Exercise';

class ActiveWorkoutScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    const newExercise1 = new Exercise('Push up', 10, 1);
    const newExercise2 = new Exercise('Pull up', 11, 5);
    const newExercise3 = new Exercise('Squat', 12, 4);
    const newExercise4 = new Exercise('Deadlift', 13, 3);
    const newExercise5 = new Exercise('Bench Press', 14, 2);

    const exercises = [newExercise1, newExercise2, newExercise3, newExercise4, newExercise5];
    const duration = exercises.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });

    const newWorkout = new Workout('Test1', exercises, duration);

    this.state = {
      exercises: newWorkout.exercises,
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
    return Math.round((duration * fillPercent) / 100);
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
          { exercise.name + this._getTimerString(exercise.duration, fill) }
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
