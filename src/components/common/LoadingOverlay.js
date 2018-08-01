import React from 'react';
import { View, Dimensions } from 'react-native';
import { Spinner } from './Spinner';

const LoadingOverlay = () => {
  return (
    <View style={styles.overlayStyle}>
      <Spinner size='large' />
    </View>
  );
};

const styles = {
  overlayStyle: {
    position: 'absolute',
    flex: 1,
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
};

export { LoadingOverlay };
