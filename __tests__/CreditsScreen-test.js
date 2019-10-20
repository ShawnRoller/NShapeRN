import React from 'react';
import CreditsScreen from '../src/screens/CreditsScreen';
import renderer from 'react-test-renderer';

test('CreditsScreen renders correctly', () => {
    const tree = renderer.create(<CreditsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
