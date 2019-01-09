import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SimpleCell = ({ onPressItem, backgroundColor, textColor, fontSize, alignSelf, textMarginLeft, height, children }) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={[styles.containerStyle, {backgroundColor}, {height}]}>
      <Text style={[styles.textStyle, {color: textColor}, {fontSize}, {alignSelf}, {marginLeft: textMarginLeft}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 50,
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight: '600',
  }
});

export { SimpleCell };
