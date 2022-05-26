import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import App from "App";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for App", () => {

  it("Renders without crashing", () => {
    const {toJSON} = render(<App />);
  });

  it("Renders without crashing", () => {
    const {container, getByText, getByPlaceholderText, getByRole, toJSON} = render(<App />);

    const username = getByPlaceholderText("email address");
    const password = getByPlaceholderText("password");
    const button = getByRole("button");

    fireEvent.changeText(username, 'James Holden');
    fireEvent.changeText(password, 'Rocinate');


  });

});
