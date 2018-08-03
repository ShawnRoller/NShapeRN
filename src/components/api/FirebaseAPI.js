import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

class FirebaseAPI extends PureComponent {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    success: PropTypes.func.isRequired,
    failure: PropTypes.func.isRequired
  };

  authenticate = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.loginUserSuccess(user))
      .catch(error => this.loginUserFailure(error));
  };

  signUp = ({ email, password }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => this.loginUserSuccess(user))
      .catch((error) => this.loginUserFailure(error));
  };

  testFunc = (user) => {
    console.log(`test func: ${user}`);
  }

  loginUserSuccess = (user) => {
    console.log('user logged in successfully');
    this.props.success(user);
  };

  loginUserFailure = (error) => {
    this.props.failure(`Login failed: ${error}`);
  };

}

export default FirebaseAPI;
