import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Button, Container, SubContainer } from '../components/common';

const { width, height } = Dimensions.get('window');
const LoginType = {
  select: 0,
  login: 1,
  signup: 2
};
const ThemeColor = '#da3732'

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginType: LoginType.select
    };
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  static navigationOptions = {
    header: null
  };

  navigateToHome() {
    this.props.navigation.navigate('Home');
  }

  chooseRenderType() {
    var render;
    switch (this.state.loginType) {
      case 0:
        render = this.renderSelectState();
        break;
      case 1:
        render = this.renderLoginState();
        break;
      case 2:
        render = this.renderLoginState();
        break;
    }
    return render;
  }

  renderSelectState() {
    console.log('select state');
    return (
      <View>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onButtonPress.bind(this)}>Sign Up</Button>
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </SubContainer>
      </View>
    );
  }

  renderLoginState() {
    console.log('login state');
    return (
      <View>
        <SubContainer>
          <Input 
            placeholder='password'
            secureTextEntry={true}
            onChangeText={value => this.props.passwordChanged(value) }
            onSubmitEditing={this.onButtonPress.bind(this)}
            value={this.props.password}
          />
        </SubContainer>
        <SubContainer>
          <Input />
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onButtonPress.bind(this)}>Login</Button>
        </SubContainer>
      </View>
    );
  }

  onButtonPress() {
    var newState = LoginType.select;
    switch (this.state.loginType) {
      case 0:
        newState = LoginType.login;
        break;
      case 1:
        newState = LoginType.signup;
        break;
      case 2:
        newState = LoginType.select;
        break;
    }
    this.setState({ loginType: newState });
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Container style={{paddingBottom: height / 3}}>
          <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode="contain" />
          {this.chooseRenderType()}
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoStyle: {
    width: width,
    height: height / 4
  }
};

export default LoginScreen;
