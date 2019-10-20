import React from 'react';
import CustomWorkoutScreen from '../src/screens/CustomWorkoutScreen';
import renderer from 'react-test-renderer';

test('CustomWorkoutScreen renders correctly', () => {
    const tree = renderer.create(<CustomWorkoutScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
