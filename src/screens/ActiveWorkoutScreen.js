'use strict';
import React from 'react';
import { View, Text, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from '../components/common/Button';
import * as Colors from '../components/Theme';
import Workout from '../models/Workout';
import Exercise from '../models/Exercise';

class ActiveWorkoutScreen extends React.PureComponent {

  isTimerRunning = false;
  isExercisePaused = false;
  timerFill = 100;

  constructor(props) {
    super(props);

    const newExercise1 = new Exercise('Push up', 5, 1);
    const newExercise2 = new Exercise('Pull up', 6, 5);
    const newExercise3 = new Exercise('Squat', 7, 4);
    const newExercise4 = new Exercise('Deadlift', 8, 3);
    const newExercise5 = new Exercise('Bench Press', 9, 2);

    const exercises = [newExercise1, newExercise2, newExercise3, newExercise4, newExercise5];
    const duration = exercises.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });

    const newWorkout = new Workout('Test1', exercises, duration);

    this.state = {
      exercises: newWorkout.exercises,
      currentExerciseIndex: 0,
      currentExercise: {}
    }
  }

  componentDidMount() {
    const exercises = this._getSortedExercises(this.state.exercises);
    this.setState({ exercises });
  }

  _getSortedExercises = (exercises) => {
    const sortedData = exercises.sort((a, b) => {
      return (a.order < b.order) ? -1 : (a.order > b.order) ? 1 : 0;
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
    if (this.isTimerRunning) {
      this._pauseExercise();
    } else if (this.isExercisePaused) {
      let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
      this._resumeExercise(exercise, this.timerFill);
    }
    else {
      let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
      this.isTimerRunning = true;
      this._startExercise(exercise);
    }
  }

  _pauseExercise = () => {
    this.isTimerRunning = false;
    this.isExercisePaused = true;
    this.circularProgress.pause();
  } 

  _resumeExercise = (exercise, remainingPercent) => {
    const remainingTime = (exercise.duration * (remainingPercent / 100)) * 1000;
    this.circularProgress.animate(1, remainingTime, Easing.linear);
    this.isExercisePaused = false;
    this.isTimerRunning = true;
  }

  _startExercise = (exercise) => {
    this.isTimerRunning = true;
    this.circularProgress.reAnimate(100, 1, exercise.duration * 1000, Easing.linear);
  }

  _onExerciseEnd = () => {
    const nextIndex = this.state.currentExerciseIndex + 1;
    const {exercise, exerciseIndex} = this._getExercise(this.state.exercises, nextIndex);
    console.log(exerciseIndex, exercise);
    this._setNextExercise(exerciseIndex, exercise);
  }

  _setNextExercise = (index, exercise) => {
    this.setState({ currentExerciseIndex: index, currentExercise: exercise }, () => {
      this._startExercise(exercise);
    });
  }

  _onAnimationEnd = () => {
    if (this.isTimerRunning) {
      this.isTimerRunning = false;
      this._onExerciseEnd();
    }
  }

  _getTimerString = (duration, fillPercent) => {
    const timeRemaining = Math.round((duration * fillPercent) / 100);
    let minutes = 0;
    let seconds = timeRemaining;
    if (timeRemaining > 60) {
      minutes = timeRemaining / 60;
      seconds = timeRemaining % 60;
    }

    let formattedTime = minutes + ':' + seconds;

    if (seconds < 10) {
      formattedTime = minutes + ':0' + seconds;
    }
    
    return formattedTime;
  }

  _renderProgress = () => {
    let { exercise, exerciseIndex } = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);

    return (
      <AnimatedCircularProgress
        ref={(ref) => this.circularProgress = ref}
        fill={100}
        rotation={-360}
        size={200}
        width={4}
        tintColor='red'
        onAnimationComplete={this._onAnimationEnd}
      >
      {(fill) => {
        this.timerFill = fill;
        return (
        <Text style={[styles.timerTextStyle, {color:Colors.DarkGray}]}>
          { exercise.name + this._getTimerString(exercise.duration, fill) }
        </Text>
      )}}
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
