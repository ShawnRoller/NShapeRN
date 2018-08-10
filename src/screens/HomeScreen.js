import React, { Component } from 'react';
import { Image, Dimensions, Slider } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ThemeColor } from '../components/Theme';
import { Button, SubContainer } from '../components/common';

const { width, height } = Dimensions.get('window');

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode='contain' />
        <SubContainer>
          <Slider style={styles.sliderStyle} maximumValue={60} minimumValue={7} step={1} thumbTintColor={ThemeColor} minimumTrackTintColor={ThemeColor} />
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20}>Start Workout</Button>
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20}>Custom Workout</Button>
        </SubContainer>
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logoStyle: {
    width,
    height: height / 4,
    marginTop: height / 8
  },
  sliderStyle: {
    width: width - 40,
    height: 20,
    paddingBottom: height / 4
  }
};

export default HomeScreen;
