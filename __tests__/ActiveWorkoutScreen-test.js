import React from 'react';
import ActiveWorkoutScreen from '../src/screens/ActiveWorkoutScreen';
import renderer from 'react-test-renderer';

test('activeworkoutscreen renders correctly', () => {
    const tree = renderer.create(<ActiveWorkoutScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
