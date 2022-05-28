import React from 'react';
import {render, cleanup, fireEvent, getQueriesForElement} from "@testing-library/react-native";
import fetchUser from 'helper/fetchUser';
import App from "App";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock("helper/fetchUser");

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for App", () => {

  it("Renders without crashing", () => {
    const {toJSON} = render(<App />);
    // expect(toJSON()).toMatchSnapshot();
  });

  it("Displays Info page after login", async () => {
    // fetchUser will always resolve to mockUser
    fetchUser.mockResolvedValue(mockUser);

    const {toJSON, getByText, findByLabelText, getByPlaceholderText, getByRole, findByText} = render(<App />);

    const username = getByPlaceholderText("email address");
    const password = getByPlaceholderText("password");
    const button = getByRole("button");

    fireEvent.press(button);
    getByText("required", {exact: false});

    fireEvent.changeText(username, 'Sincere@april.biz');
    fireEvent.changeText(password, '123');
    fireEvent.press(button);

    {
      const info = await findByLabelText("Info");
      const {getByText, getByRole, toJSON} = getQueriesForElement(info);
      getByText("Leanne Graham");

      const button = getByRole("button");
      fireEvent.press(button);
      getByText('harness real-time e-markets');
    }
  });

});

const mockUser =
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};
