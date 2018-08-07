import React, { Component } from 'react';
import { View, Image, Dimensions, LayoutAnimation, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Button, KBAvoidingContainer, SubContainer, LoadingOverlay } from '../components/common';
import firebase from 'firebase';
import firebaseconfig from '../config/firebaseconfig';
import FirebaseAPI from '../components/api/FirebaseAPI';

const { width, height } = Dimensions.get('window');
const LoginType = {
  select: 'Select',
  login: 'Login',
  signup: 'Signup'
};
const ThemeColor = '#f10026'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

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


  navigateToHome() {
    this.props.navigation.navigate('Home');
  }

  onEmailChange = email => this.setState({ email });
  onPasswordChange = password => this.setState({ password });

  onCancelPress() {
    this.setState({ loginType: LoginType.select });
  }

  onLoginPress() {
    this.setState({ loginType: LoginType.login });
  }

  onSignupPress() {
    this.setState({ loginType: LoginType.signup });
  }

  onButtonPress() {
    this.setState({ loading: true });
    switch (this.state.loginType) {
      case 'Select':
        break;
      case 'Login':
        this.attemptLogin();
        break;
      case 'Signup':
        this.attemptSignUp();
        break;
    }
  }

  attemptLogin() {
    const { email, password } = this.state;

    var api = new FirebaseAPI({
      success: function(user) {
        this.loginSuccess();
      }.bind(this),
      failure: function(error) {
        this.loginFailure(error);
      }.bind(this)
    });

    try {
      api.authenticate({ email, password });
    } catch (error) {
      console.log(`Could not connect to firebase: ${error}`);
    }
  }

  attemptSignUp() {
    const { email, password } = this.state;

    var api = new FirebaseAPI({
      success: function(user) {
        this.loginSuccess();
      }.bind(this),
      failure: function(error) {
        this.loginFailure(error);
      }.bind(this)
    });

    try {
      api.signUp({ email, password });
    } catch (error) {
      console.log(`Could not connect to firebase: ${error}`);
    }
  }

  loginSuccess = () => {
    this.setState({ loading: false });
    this.navigateToHome();
  }

  loginFailure = (error) => {
    this.setState({ loading: false });
    if (error) {
      console.log('Error: ' + JSON.stringify(error));
      Alert.alert('Whoops!', error);
    }
    else {
      Alert.alert('Whoops!', 'Something went wrong.');
    }
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
    return (
      <View>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow onPress={this.onLoginPress.bind(this)}>Log In</Button>
        </SubContainer>
        <SubContainer>
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow onPress={this.onSignupPress.bind(this)}>Sign Up</Button>
        </SubContainer>
      </View>
    );
  }

  renderLoginState() {
    return (
      <View>
        <SubContainer>
          <Input 
            autoFocus
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
          <Button backgroundColor={ThemeColor} textColor='#fff' shadow onPress={this.onButtonPress.bind(this)}>{this.state.loginType}</Button>
        </SubContainer>
        <SubContainer>
          <Button textColor='#666666' onPress={this.onCancelPress.bind(this)}>cancel</Button>
        </SubContainer>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <KBAvoidingContainer style={{marginBottom: height / 3}}>
          <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode="contain" />
          {this.chooseRenderType()}
        </KBAvoidingContainer>
        {this.renderLoading()}
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logoStyle: {
    width: width,
    height: height / 4
  }
};

export default LoginScreen;
