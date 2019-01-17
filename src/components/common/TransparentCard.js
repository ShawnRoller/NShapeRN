import React from 'react';
import { View, Text } from 'react-native';

const BORDER_RADIUS = 12;

const TransparentCard = ({children}) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: BORDER_RADIUS,
    opacity: 0.8
  }
}

export { TransparentCard };
