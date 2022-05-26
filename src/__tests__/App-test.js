import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import App from "App";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for App", () => {

  it("Renders without crashing", () => {
    const { } = render(<App />);
  });

  it("Renders without crashing", () => {
    const { } = render(<App />);
  });

});
