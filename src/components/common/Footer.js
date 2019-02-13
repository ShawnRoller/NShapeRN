import React from 'react';
import { View } from 'react-native';

const Footer = (props) => {

  return (
    <View style={[styles.containerStyle, props.style]}>
      {children}
    </View>
  );

}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export { Footer };
