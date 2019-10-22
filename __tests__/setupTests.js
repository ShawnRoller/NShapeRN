import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
function MockIcon(props) { return <View {...props} />; }
Icon = MockIcon;