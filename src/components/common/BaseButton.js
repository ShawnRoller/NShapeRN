import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const BaseButton = ({ onPress, shadow, backgroundColor, style, children }) => {

  let shadowColor;
  let shadowOffset;
  let shadowOpacity;
  let shadowRadius;
  if (shadow) {
    shadowColor = '#000';
    shadowOpacity =  0.3;
    shadowRadius = 2;
    shadowOffset = { width: 1, height: 2 };
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, {backgroundColor}, {shadowColor}, {shadowOpacity}, {shadowRadius}, {shadowOffset}, style ]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    justifyContent: 'center'
  }
});

export { BaseButton };