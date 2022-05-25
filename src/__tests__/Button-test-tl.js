import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Button from "component/Button";

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for Button", () => {

  it("When clicked, calls onPress if not disabled", () => {
    const myMockFn = jest.fn();

    const component = <Button title="Test" onPress={myMockFn} />;
    const {container, getByRole, getByLabelText, getByTestId, toJSON} = render(component);

    // const view = getByTestId("button");    //  not as good
    const button = getByRole("button");       // Preferred option

    fireEvent.press(button);
    expect(myMockFn).toHaveBeenCalledTimes(1);
  });

  it("When clicked, Does not call onPress if disabled", () => {
    const myMockFn = jest.fn();

    const {container, getbyText, getByTestId, toJSON} = render(<Button disabled title="Test" onPress={myMockFn} />);
    const view = getByTestId("button");

    fireEvent.press(view);
    expect(myMockFn).not.toHaveBeenCalled();
  });

});
