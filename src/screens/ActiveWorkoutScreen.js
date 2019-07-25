'use strict';
import React from 'react';
import { Image, SafeAreaView, View, Text, Easing, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BaseButton, TransparentCard } from '../components/common';
import * as Colors from '../components/Theme';
import Workout from '../models/Workout';
import Exercise from '../models/Exercise';

const pauseImagePath = '../images/activeWorkout/pause.png';
const playImagePath = '../images/activeWorkout/play.png';
const rewindImagePath = '../images/activeWorkout/rewind.png';
const fastforwardImagePath = '../images/activeWorkout/fastforward.png';
const screenWidth = Dimensions.get('window').width;

class ActiveWorkoutScreen extends React.PureComponent {

  isTimerRunning = false;
  isExercisePaused = true;
  timerFill = 100;

  constructor(props) {
    super(props);

    const newExercise1 = new Exercise('Push up', 5, 1);
    const newExercise2 = new Exercise('Pull up', 6, 5);
    const newExercise3 = new Exercise('Squat', 7, 4);
    const newExercise4 = new Exercise('Deadlift', 8, 3);
    const newExercise5 = new Exercise('Bench Press', 9, 2);
    const newExercise6 = new Exercise('Hoodilly Crushers', 10, 6);

    const exercises = [newExercise1, newExercise2, newExercise3, newExercise4, newExercise5, newExercise6];
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
    const { currentExerciseIndex } = this.state;
    const currentExercise = exercises.length > currentExerciseIndex ? exercises[currentExerciseIndex] : {}
    this.setState({ exercises, currentExercise });
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

    if (index < 0) {
      index = 0;
    }
    
    let exerciseIndex = 0;
    let exercise = exercises[exerciseIndex];
    if (exercises.length > index) {
      exerciseIndex = index;
      exercise = exercises[exerciseIndex];
    } else {
      // This is the end of the road
      exerciseIndex = -1;
    }
    return {exercise, exerciseIndex};
  }

  _onPlayButtonPress = () => {
    if (this.isTimerRunning) {
      this._pauseExercise();
    } else if (this.isExercisePaused) {
      let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
      if (exerciseIndex === -1) {
        // TODO: end the workout?

      }
      this._resumeExercise(exercise, this.timerFill);
    }
    else {
      let {exercise, exerciseIndex} = this._getExercise(this.state.exercises, this.state.currentExerciseIndex);
      if (exerciseIndex === -1) {
        // TODO: end the workout?

      }
      this.isTimerRunning = true;
      this._startExercise(exercise);
    }
  }

  _onPreviousButtonPress = () => {
    this._pauseExercise();
    this._onExerciseEnd(true);
  }

  _onNextButtonPress = () => {
    this._pauseExercise();
    this._onExerciseEnd();
  }

  _pauseExercise = () => {
    if (!this.isTimerRunning || this.isExercisePaused) {
      return;
    }
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
    this.isExercisePaused = false;
    this.circularProgress.reAnimate(100, 1, exercise.duration * 1000, Easing.linear);
  }

  _onExerciseEnd = (goToPrevious) => {
    const nextIndex = goToPrevious ? this.state.currentExerciseIndex - 1 : this.state.currentExerciseIndex + 1;
    const {exercise, exerciseIndex} = this._getExercise(this.state.exercises, nextIndex);
    console.log(exerciseIndex, exercise);
    this._setNextExercise(exerciseIndex, exercise);
  }

  _setNextExercise = (index, exercise) => {
    this.setState({ currentExerciseIndex: index, currentExercise: exercise }, () => {
      if (!this.isExercisePaused) { this._startExercise(exercise); }
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

    if (exerciseIndex === -1) {
      // TODO: end the workout?

    }

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
          { this._getTimerString(exercise.duration, fill) }
        </Text>
      )}}
      </AnimatedCircularProgress>
    )
  }

  _renderButtonControls = () => {
    return (
      <View style={styles.controlsContainerStyle}>
        <BaseButton onPress={this._onPreviousButtonPress}>
          <Image 
            source={require(rewindImagePath)} 
            style={styles.controlButtonStyle} 
            resizeMode='contain' 
          />
        </BaseButton>
        <BaseButton onPress={this._onPlayButtonPress}>
          {this._renderPausePlayButton()}
        </BaseButton>
        <BaseButton onPress={this._onNextButtonPress}>
          <Image 
            source={require(fastforwardImagePath)} 
            style={styles.controlButtonStyle} 
            resizeMode='contain' 
          />
          </BaseButton>
      </View>
    );
  }

  _renderPausePlayButton = (isExercisePaused, isTimerRunning) => {
    if (isExercisePaused || !isTimerRunning) {
      return (
        <Image 
          source={require(playImagePath)} 
          style={styles.controlButtonStyle} 
          resizeMode='contain' 
        />
      );
    } else {
      return (
        <Image 
          source={require(pauseImagePath)} 
          style={styles.controlButtonStyle} 
          resizeMode='contain' 
        />
      );
    }
  }

  _renderExerciseName = (name) => {
    return (
      <TransparentCard style={styles.titleContainerStyle}>
        <Text style={styles.titleTextStyle}>{name}</Text>
      </TransparentCard>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.exercisesContainerStyle}>
          {this._renderExerciseName(this.state.currentExercise.name)}
        </View>
        <View style={styles.clockContainerStyle}>
          {this._renderProgress()}
        </View>
        {this._renderButtonControls()}
      </SafeAreaView>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  clockContainerStyle: {
    flex: 1,
  },
  exercisesContainerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  exerciseTextStyle: {
    fontSize: 49,
  },
  controlsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerTextStyle: {
    fontSize: 49,
  },
  controlButtonStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  titleContainerStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: screenWidth - 100,
    height: 100,
    backgroundColor: Colors.ThemeColor
  },
  titleTextStyle: {
    alignSelf: 'center',
    fontSize: 49,
    color: '#ffffff'
  }
}

export default ActiveWorkoutScreen;
