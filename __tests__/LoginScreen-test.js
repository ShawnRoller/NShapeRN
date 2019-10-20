import React from 'react';
import LoginScreen from '../src/screens/LoginScreen';
import renderer from 'react-test-renderer';

test('LoginScreen renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
