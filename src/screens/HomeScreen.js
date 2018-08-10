import React, { PureComponent } from 'react';
import { Image, Dimensions, Slider, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ThemeColor } from '../components/Theme';
import { Button, SubContainer } from '../components/common';

const { width, height } = Dimensions.get('window');

class HomeScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      minutes: 15
    }
  }

  componentDidMount() {
    this.refs.slider.setNativeProps({ value: this.state.minutes });
  }

  onSliderChanged(value) {
    this.setState({ minutes: value });
  }

  onStartButtonPressed() {
    console.log('start');
  }

  onCustomButtonPressed() {
    console.log('custom');
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.subViewStyle}>
          <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode='contain' />
        </View>
        <View style={styles.subViewStyle}>
          <SubContainer>
            <Text style={styles.textStyle}>{this.state.minutes} minutes</Text>
          </SubContainer>
          <SubContainer>
            <Slider 
              ref='slider'
              style={styles.sliderStyle} 
              maximumValue={60} 
              minimumValue={7} 
              step={1} 
              thumbTintColor={ThemeColor} 
              minimumTrackTintColor={ThemeColor}
              onValueChange={(value) => this.onSliderChanged(value)}
            />
          </SubContainer>
        </View>
        <View style={styles.subViewStyle}>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20} onPress={this.onStartButtonPressed.bind(this)}>Start Workout</Button>
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20} onPress={this.onCustomButtonPressed.bind(this)}>Custom Workout</Button>
        </SubContainer>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  subViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    width,
    height: height / 3,
  },
  sliderStyle: {
    width: width - 40,
    height: 20,
    paddingBottom: 40
  },
  textStyle: {
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    fontSize: 20
  }
};

export default HomeScreen;
