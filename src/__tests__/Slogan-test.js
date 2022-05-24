import React from 'react';
import Slogan from 'component/Slogan';
// import App from 'App';

// Note: test renderer must be required after react-native.
import {create, act} from 'react-test-renderer';

// Use built-in react test renderer
it('Slogan matches UI snap shot', () => {
  const tree = create(<Slogan text="Seize the Moment!" />);
  const json = tree.toJSON();   // Docs recommend but doesn't seem to make a difference
  expect(tree).toMatchSnapshot(); // Creates snapshot on first run
});

// Use built-in react test renderer
it('Pressing Slogan button changes text state', () => {
  const tree = create(<Slogan text="Seize the Moment!" />);
  const instance = tree.root;
  const buttonInstance = instance.findByProps({accessibilityRole: "button"});
  const button = buttonInstance.props;
  // console.log(button);

  // Find the Text element.  findByText fails!  (more than one)
  const textInstance = instance.findAllByType("Text");
  // console.log(text[0].props); // This is the Text inside the Button
  // console.log(text[1].props); // This is the Text we want

  const text = textInstance[1].props;
  console.log(text);

  // Fire the onPress Event
  act(() => button.onPress());

  const newText = instance.findAllByType("Text")[1].props;
  console.log(newText);

  expect(newText.children).toEqual("Seize the Moment!");
});

// Use built-in react test renderer
it('Can find Slogan Button & Text by TestID', () => {
  const instance = create(<Slogan text="Seize the Moment!" />).root;
  const button = instance.findByProps({testID: "button"}).props;

  // Fire the onPress Event
  act(() => button.onPress());

  // Find the Text element.  findByText fails!  (more than one)
  const text = instance.findByProps({testID: "slogan"}).props;
  expect(text.children).toEqual("Seize the Moment!");
});
