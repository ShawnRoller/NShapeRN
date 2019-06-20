import React, { PureComponent } from 'react';
import { View, Image, Dimensions, LayoutAnimation, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, TextButton, KBAvoidingContainer, SubContainer, LoadingOverlay } from '../components/common';
import firebase from 'firebase';
import firebaseconfig from '../config/firebaseconfig';
import FirebaseAPI from '../components/api/FirebaseAPI';
import { ThemeColor } from '../components/Theme';

const { width, height } = Dimensions.get('window');
const LoginType = {
  select: 'Select',
  login: 'Login',
  signup: 'Signup'
};
const TESTING = true;

class LoginScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loginType: LoginType.select,
      email: '',
      password: '',
      loading: true
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

  componentDidMount() {
    if (TESTING) {
      this.setState({ loading: false });
      return;
    }
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loading: false });
      if (user) {
        this._navigateToHome();
      }
    });
  }


  _navigateToHome = () => {
    this.setState({ loginType: LoginType.select });
    this.props.navigation.navigate('DrawerNavigation');
  }

  _onEmailChange = email => this.setState({ email });
  _onPasswordChange = password => this.setState({ password });

  _onCancelPress = () => {
    this.setState({ loginType: LoginType.select });
  }

  _onLoginPress = () => {
    this.setState({ loginType: LoginType.login });
  }

  _onSignupPress = () => {
    this.setState({ loginType: LoginType.signup });
  }

  _onButtonPress = () => {

    if (TESTING) {
      this._navigateToHome();
    }

    this.setState({ loading: true });
    switch (this.state.loginType) {
      case 'Select':
        break;
      case 'Login':
        this._attemptLogin();
        break;
      case 'Signup':
        this._attemptSignUp();
        break;
    }
  }

  _attemptLogin = () => {
    const { email, password } = this.state;

    var api = new FirebaseAPI({
      success: (user) => {
        this._loginSuccess();
      },
      failure: (error) => {
        this._loginFailure(error);
      }
    });

    try {
      api.authenticate({ email, password });
    } catch (error) {
      console.log(`Could not connect to firebase: ${error}`);
    }
  }

  _attemptSignUp = () => {
    const { email, password } = this.state;

    var api = new FirebaseAPI({
      success: (user) => {
        this._loginSuccess();
      },
      failure: (error) => {
        this._loginFailure(error);
      }
    });

    try {
      api.signUp({ email, password });
    } catch (error) {
      console.log(`Could not connect to firebase: ${error}`);
    }
  }

  _loginSuccess = () => {
    this.setState({ loading: false });
    this._navigateToHome();
  }

  _loginFailure = (error) => {
    this.setState({ loading: false });
    if (error) {
      console.log('Error: ' + JSON.stringify(error));
      Alert.alert('Whoops!', error);
    }
    else {
      Alert.alert('Whoops!', 'Something went wrong.');
    }
  }

  _chooseRenderType = () => {
    var render;
    switch (this.state.loginType) {
      case 'Select':
        render = this._renderSelectState();
        break;
      case 'Login':
        render = this._renderLoginState();
        break;
      case 'Signup':
        render = this._renderLoginState();
        break;
    }
    return render;
  }

  _renderLoading = () => {
    if (this.state.loading) {
      return (
        <LoadingOverlay />
      );
    }
  }

  _renderSelectState = () => {
    return (
      <View>
        <SubContainer>
          <TextButton backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20} onPress={this._onLoginPress}>Log In</TextButton>
        </SubContainer>
        <SubContainer>
          <TextButton backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20} onPress={this._onSignupPress}>Sign Up</TextButton>
        </SubContainer>
      </View>
    );
  }

  _renderLoginState = () => {
    return (
      <View>
        <SubContainer>
          <Input 
            autoFocus
            placeholder='email'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this._onEmailChange}
          />
        </SubContainer>
        <SubContainer>
          <Input 
              placeholder='password'
              secureTextEntry={true}
              onChangeText={this._onPasswordChange}
              onSubmitEditing={this._onButtonPress}
            />
        </SubContainer>
        <SubContainer>
          <TextButton backgroundColor={ThemeColor} textColor='#fff' shadow fontSize={20} onPress={this._onButtonPress}>{this.state.loginType}</TextButton>
        </SubContainer>
        <SubContainer>
          <TextButton textColor='#666666' fontSize={15} onPress={this._onCancelPress}>cancel</TextButton>
        </SubContainer>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <KBAvoidingContainer style={{marginBottom: height / 3}}>
          <Image source={require('../images/nshape-main-logo.png')} style={styles.logoStyle} resizeMode='contain' />
          {this._chooseRenderType()}
        </KBAvoidingContainer>
        {this._renderLoading()}
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
    width,
    height: height / 4
  }
};

export default LoginScreen;
