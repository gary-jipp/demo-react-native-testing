import 'react-native';
import React from 'react';
import Button from 'component/Button';
import App from 'App';
import {render, fireEvent, act} from "@testing-library/react-native";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly with test-renderer', () => {
  const tree = renderer.create(<Button />);
  // console.log(tree.toJSON());
});

// Use built-in react test renderer
it('Button renders and matches snapshop', () => {
  const tree = renderer.create(<Button title="Press Me" />);
  const json = tree.toJSON();   // Docs recommend but doesn't seem to make a difference
  expect(tree).toMatchSnapshot(); // Creates snapshot on first run
});

// Use testing library / react native
it('Button renders and contains correct title', () => {
  const onPress = jest.fn();

  const container = render(<Button title="Press Me" onPress={onPress} />);
  const text = container.getByText("Press Me");
  fireEvent.press(text);

  expect(onPress).toHaveBeenCalledTimes(1);
});
