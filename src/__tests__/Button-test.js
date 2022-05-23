import 'react-native';
import React from 'react';
import Button from 'component/Button';
import App from 'App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Button renders correctly with test-renderer', () => {
  const tree = renderer.create(<Button />);
  // console.log(tree.toJSON());
});

// Use built-in react test renderer
it('Button renders and matches snapshop', () => {
  const tree = renderer.create(<Button title="Press Me" />);
  const json = tree.toJSON();   // Docs recommend but doesn't seem to make a difference
  expect(tree).toMatchSnapshot(); // Creates snapshot on first run
});
