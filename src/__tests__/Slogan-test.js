import React from 'react';
import Slogan from 'component/Slogan';
// import App from 'App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Use built-in react test renderer
it('Slogan matches UI snap shot', () => {
  const tree = renderer.create(<Slogan text="Seize the Moment!" />);
  const json = tree.toJSON();
  expect(tree).toMatchSnapshot();
});
