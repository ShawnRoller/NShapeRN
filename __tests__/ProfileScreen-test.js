import React from 'react';
import ProfileScreen from '../src/screens/ProfileScreen';
import renderer from 'react-test-renderer';

test('ProfileScreen renders correctly', () => {
    const tree = renderer.create(<ProfileScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
