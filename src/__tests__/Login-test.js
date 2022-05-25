import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Login from 'component/Login';

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for Login", () => {

  // Use testing library
  it('Renders without crashing', () => {
    const {toJSON} = render(<Login />);
    // console.log(toJSON());
    // console.log(toJSON().children);
  });


  it('Should call login when clicked if email & password entered', () => {
    const login = jest.fn();

    const {container, getByText, getByPlaceholderText, getByRole, toJSON} = render(<Login login={login} />);

    const username = getByPlaceholderText("email address");
    const password = getByPlaceholderText("password");
    const button = getByRole("button");

    // can look at the underlying jest renderer instance
    // console.log(username.instance.props);

    fireEvent.changeText(username, 'James Holden');
    fireEvent.changeText(password, 'Rocinate');

    fireEvent.press(button);
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith('James Holden', 'Rocinate');
  });

  it('Should display error when clicked if missing email or password', () => {
    const login = jest.fn();

    const {container, getByText, getByRole} = render(<Login login={login} />);
    const button = getByRole("button");
    fireEvent.press(button);

    // can look at the underlying jest renderer instance
    // console.log(username.instance.props);

    // error should display
    const errorMsg = getByText("password required", {exact: false});
    expect(login).not.toHaveBeenCalled();
  });

  it('Should not login if pending', () => {
    const login = jest.fn();

    const {container, getByText, getByRole, getByPlaceholderText} = render(<Login login={login} invalid pending />);
    const username = getByPlaceholderText("email address");
    const password = getByPlaceholderText("password");
    const button = getByRole("button");
    // can look at the underlying jest renderer instance
    // console.log(username.instance.props);

    const errorMsg = getByText("invalid", {exact: false});

    fireEvent.changeText(username, 'James Holden');
    fireEvent.changeText(password, 'Rocinate');
    fireEvent.press(button);
    // can look at the underlying jest renderer instance
    // console.log(username.instance.props);

    fireEvent.press(button);
    expect(login).not.toHaveBeenCalled();
  });

});
