import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SimpleCell = ({ onPressItem, backgroundColor, textColor, fontSize, alignSelf, textMarginLeft, height, children }) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={[styles.containerStyle, {backgroundColor}, {height}]}>
      <Text style={[styles.textStyle, {color: textColor}, {fontSize}, {alignSelf}, {marginLeft: textMarginLeft}]}>
        {children}
      </Text>
      <Icon style={styles.disclosureStyle} name="angle-right" size={30} color="#ddd" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontWeight: '600',
  },
  disclosureStyle: {
    marginRight: 10,
  }
});

export { SimpleCell };
