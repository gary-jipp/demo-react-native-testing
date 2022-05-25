import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Slogan from 'component/Slogan';

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for Slogan", () => {

  // Use testing library
  it('Renders without crashing', () => {
    const result = render(<Slogan text="Seize the Moment!" />);
    // console.log(result);
    // console.log(result.toJSON());
    // console.log(result.toJSON().children);
  });


  it('Shows slogan when button clicked', () => {
    const {container, getByText, getAllByText, getByRole, toJSON} = render(<Slogan text="Now or Never" />);

    // const button = getByText("Slogan");
    const button = getByRole("button");
    // console.log(button.props);

    // console.log(button.props);
    // console.log(toJSON().children);

    // Press the Button.
    fireEvent.press(button);

    // Will assert if not found
    const view = getByText("Now or Never");
    // console.log(view.props);

    // Can use an inexact match, no case
    const all = getAllByText('never', {exact: false});

    expect(all.length).toEqual(1);
  });

});
