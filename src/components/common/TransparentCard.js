import React from 'react';
import { View, Text } from 'react-native';

const BORDER_RADIUS = 12;

const TransparentCard = (props) => {
  return (
    <View style={[props.style, styles.containerStyle]}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: BORDER_RADIUS,
    opacity: 0.8,
    // overflow: 'hidden',
  }
}

export { TransparentCard };
