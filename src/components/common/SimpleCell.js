import React, { PureComponent } from 'react';
import { Switch, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SimpleCell extends PureComponent {

  constructor(props) {
    super(props);
  }

  _renderAccessory = (item, hasScreen) => {
    if (item.hasSwitch) {
      return (
        <Switch value={item.toggled} onValueChange={(switched) => this._onSwitchToggled(item, switched)}/>
      );
    }
    else if (hasScreen) {
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
    const { onPressItem=() => {}, backgroundColor, height, textColor, fontSize, alignSelf, textMarginLeft, children, item } = this.props;

    return (
      <TouchableOpacity activeOpacity={item.hasSwitch ? 1 : 0.2} onPress={() => onPressItem(item)} style={[styles.containerStyle, {backgroundColor}, {height}]}>
        <Text style={[styles.textStyle, {color: textColor}, {fontSize}, {alignSelf}, {marginLeft: textMarginLeft}]}>
          {children}
        </Text>
        <Text style={styles.subtitleStyle}>
          {item.subtitle}
        </Text>
        {this._renderAccessory(item, item.screen)}
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
    flex: 2,
    fontWeight: '400',
  },
  subtitleStyle: {
    flex: 1,
    fontWeight: '300',
  },
  disclosureStyle: {
    marginRight: 10,
  }
});

export { SimpleCell };
