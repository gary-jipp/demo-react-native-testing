import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Slogan from 'component/Slogan';

// unmounts the components after each test
afterEach(cleanup);

describe();

// Use testing library
it('Renders without crashing', () => {
  const result = render(<Slogan text="Seize the Moment!" />);
  // console.log(result);
  console.log(result.toJSON());
});
