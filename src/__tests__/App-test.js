import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import App from "App";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for Button", () => {

  it("When clicked, calls onPress if not disabled", () => {
    const { } = render(<App />);
  });

});
