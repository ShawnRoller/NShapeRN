import React, { PureComponent } from 'react';
import { Switch, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SimpleCell extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      switchToggled: props.switchToggled
    };
  }

  _renderAccessory = (item) => {
    if (item.hasSwitch) {
      return (
        <Switch value={item.toggled} onValueChange={(switched) => this._onSwitchToggled(item, switched)}/>
      );
    }
    else {
      return (
        <Icon style={styles.disclosureStyle} name="angle-right" size={30} color="#ddd" />
      );
    }
  }

  _onSwitchToggled = (item, switched) => {
    const newItem = { ...item, toggled: switched };
    this.props.onSwitchToggled(newItem);
  }

  render() {
    const { onPressItem, backgroundColor, height, textColor, fontSize, alignSelf, textMarginLeft, children, item } = this.props;

    return (
      <TouchableOpacity onPress={onPressItem} style={[styles.containerStyle, {backgroundColor}, {height}]}>
        <Text style={[styles.textStyle, {color: textColor}, {fontSize}, {alignSelf}, {marginLeft: textMarginLeft}]}>
          {children}
        </Text>
        {this._renderAccessory(item)}
      </TouchableOpacity>
    );
  }

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
