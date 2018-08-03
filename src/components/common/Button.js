import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, textColor, backgroundColor, shadow, children }) => {

  var shadowColor;
  var shadowOffset;
  var shadowOpacity;
  var shadowRadius;
  if (shadow) {
    shadowColor = '#000';
    shadowOpacity =  0.3;
    shadowRadius = 2;
    shadowOffset = { width: 1, height: 2 };
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, {backgroundColor}, {shadowColor}, {shadowOpacity}, {shadowRadius}, {shadowOffset} ]}>
      <Text style={[styles.textStyle, {color: textColor}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center'
  }
});

export { Button };
