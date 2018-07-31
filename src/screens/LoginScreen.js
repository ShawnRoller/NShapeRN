import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Button, Container, SubContainer, LoadingOverlay } from '../components/common';

const { width, height } = Dimensions.get('window');
const LoginType = {
  select: 'Select',
  login: 'Login',
  signup: 'Signup'
};
const ThemeColor = '#f10026'

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginType: LoginType.select,
      email: '',
      password: '',
      loading: false
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
      case 'Select':
        render = this.renderSelectState();
        break;
      case 'Login':
        render = this.renderLoginState();
        break;
      case 'Signup':
        render = this.renderLoginState();
        break;
    }
    return render;
  }

  renderLoading() {
    if (this.state.loading) {
      return (
        <LoadingOverlay />
      );
    }
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

  onEmailChange = email => this.setState({ email });
  onPasswordChange = password => this.setState({ password });

  renderLoginState() {
    return (
      <View>
        <SubContainer>
          <Input 
            placeholder='email'
            onChangeText={this.onEmailChange}
          />
        </SubContainer>
        <SubContainer>
          <Input 
              placeholder='password'
              secureTextEntry={true}
              onChangeText={this.onPasswordChange}
              onSubmitEditing={this.onButtonPress.bind(this)}
            />
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onButtonPress.bind(this)}>{this.state.loginType}</Button>
        </SubContainer>
      </View>
    );
  }

  onLoginPress() {
    this.setState({ loading: true });
    var newState = LoginType.select;
    switch (this.state.loginType) {
      case 'Select':
        newState = LoginType.login;
        break;
      case 'Login':
        newState = LoginType.signup;
        break;
      case 'Signup':
        newState = LoginType.select;
        break;
    }
    this.setState({ loginType: newState });
  }

  onSignupPress() {
    var newState = LoginType.select;
    switch (this.state.loginType) {
      case 'Select':
        newState = LoginType.login;
        break;
      case 'Login':
        newState = LoginType.signup;
        break;
      case 'Signup':
        newState = LoginType.select;
        break;
    }
    this.setState({ loginType: newState });
  }

  onButtonPress() {
    var newState = LoginType.select;
    switch (this.state.loginType) {
      case 'Select':
        newState = LoginType.login;
        break;
      case 'Login':
        newState = LoginType.signup;
        break;
      case 'Signup':
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
        {this.renderLoading}
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoStyle: {
    width: width,
    height: height / 4
  }
};

export default LoginScreen;
