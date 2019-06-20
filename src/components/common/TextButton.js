import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { BaseButton } from './BaseButton';

const TextButton = ({ onPress, textColor, fontSize, backgroundColor, shadow, children }) => {

  return (
    <BaseButton onPress={onPress} shadow={shadow} backgroundColor={backgroundColor}>
      <Text style={[styles.textStyle, {color: textColor}, {fontSize}]}>
        {children}
      </Text>
    </BaseButton>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center'
  }
});

export { TextButton };
