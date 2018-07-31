import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ placeholder, autoCorrect, autoCapitalize, secureTextEntry, value, onChangeText, onSubmitEditing }) => {
  const { inputStyle, containerStyle } = styles;

  return (
      <View style={containerStyle}>
          <TextInput
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              style={inputStyle} 
              value={value}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
          />
      </View>
  )
};

const styles = {
  inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 1,
      textAlign: 'center'
  },
  containerStyle: {
      height: 40, 
      flex: 1, 
      paddingLeft: 40,
      paddingRight: 40,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#fff'
  }
};

export { Input };
