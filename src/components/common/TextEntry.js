import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from './Button';

_renderButton = (props) => {
  if (props.hasButton) {
    return (
      <Button
        onPress={props.onEndEditing}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        {props.buttonTitle || '>'}
      </Button>
    );
  }
}

const TextEntry = (props) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput 
        {...props}
        style={[styles.textInputStyle, props.style]}
        editable={true}
        placeholderTextColor='#9B9B9B'
      />
      {_renderButton(props)}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  textInputStyle: {
    flex: 1,
    margin: 6,
    fontFamily: 'Gotham-Book',
    fontSize: 14,
    borderRadius: 6
  },
  buttonStyle: {
    width: 40,
    marginTop: 6,
    marginEnd: 6,
    marginBottom: 6,
    backgroundColor: '#00D793',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    top: 1,
    bottom: 1,
    start: -46,
    position: 'absolute'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#ffffff',
    fontFamily: 'Gotham-Book',
    marginTop: 6
  }
})

export { TextEntry };
