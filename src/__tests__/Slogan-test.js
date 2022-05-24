import React from 'react';
import Slogan from 'component/Slogan';
// import App from 'App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Use built-in react test renderer
it('Slogan button sets State', () => {
  const tree = renderer.create(<Slogan text="Seize the Moment!" />);

});
