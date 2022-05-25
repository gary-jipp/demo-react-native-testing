import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Button from "component/Button";

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for UserInfo", () => {

  it("Renders a User", () => {
    const myMockFn = jest.fn();

    const component = <Button title="Test" onPress={myMockFn} />;
    const {container, getByRole, getByLabelText, getByTestId, toJSON} = render(component);

    // const view = getByTestId("button");    //  not as good
    const button = getByRole("button");       // Preferred option

    fireEvent.press(button);
    expect(myMockFn).toHaveBeenCalledTimes(1);
  });


});
