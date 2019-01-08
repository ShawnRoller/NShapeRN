import React from 'react';
import { View, Text } from 'react-native';

const SimpleCell = ({ onPressItem, children }) => {
  return (
    <View>
      <Text>
        {children}
      </Text>
    </View>
  );
}

export { SimpleCell };
