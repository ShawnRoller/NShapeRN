import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Button, Container, SubContainer, LoadingOverlay } from '../components/common';
import firebase from 'firebase';
import firebaseconfig from '../config/firebaseconfig';

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

  componentWillMount() {
    firebase.initializeApp({
        apiKey: firebaseconfig.apiKey,
        authDomain: firebaseconfig.authDomain,
        databaseURL: firebaseconfig.databaseURL,
        projectId: firebaseconfig.projectId,
        storageBucket: firebaseconfig.storageBucket,
        messagingSenderId: firebaseconfig.messagingSenderId
    });
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

  onEmailChange = email => this.setState({ email });
  onPasswordChange = password => this.setState({ password });

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
    return (
      <View>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onSignupPress.bind(this)}>Sign Up</Button>
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' onPress={this.onLoginPress.bind(this)}>Log In</Button>
        </SubContainer>
      </View>
    );
  }

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
    this.setState({ loginType: LoginType.login });
  }

  onSignupPress() {
    this.setState({ loginType: LoginType.signup });
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
    this.setState({ loading: true });
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Container style={{paddingBottom: height / 3}}>
          <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode="contain" />
          {this.chooseRenderType()}
        </Container>
        {this.renderLoading()}
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