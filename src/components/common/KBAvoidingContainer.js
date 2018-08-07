import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

const KBAvoidingContainer = (props) => {
  return (
    <KeyboardAvoidingView style={[styles.containerStyle, props.style]} behavior='padding'>
      {props.children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});

export { KBAvoidingContainer };
