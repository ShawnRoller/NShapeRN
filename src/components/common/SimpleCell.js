import React from 'react';
import { Switch, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

_renderAccessory = (item, onSwitchToggled) => {
  if (item.toggle) {
    return (
      <Switch onValueChange={_onSwitchToggled}/>
    );
  }
  else {
    return (
      <Icon style={styles.disclosureStyle} name="angle-right" size={30} color="#ddd" />
    );
  }
}

_onSwitchToggled = (item) => {
  console.log(this);
  console.log(item);
}

const SimpleCell = ({ item, onPressItem, backgroundColor, textColor, fontSize, alignSelf, textMarginLeft, height, children, hasSwitch, onSwitchToggled }) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={[styles.containerStyle, {backgroundColor}, {height}]}>
      <Text style={[styles.textStyle, {color: textColor}, {fontSize}, {alignSelf}, {marginLeft: textMarginLeft}]}>
        {children}
      </Text>
      {/* <Icon style={styles.disclosureStyle} name="angle-right" size={30} color="#ddd" /> */}
      {this._renderAccessory(item, onSwitchToggled)}
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
