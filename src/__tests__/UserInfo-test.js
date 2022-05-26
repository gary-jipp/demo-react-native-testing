import React from 'react';
import {render, cleanup, getQueriesForElement, fireEvent} from "@testing-library/react-native";
import UserInfo from 'component/UserInfo';
import Button from 'component/Button';

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for UserInfo", () => {

  it("Renders a User", () => {
    const component = <UserInfo user={mockUser} />;
    const {container, getByRole, getAllByLabelText, getByLabelText, getByText, toJSON} = render(component);
    expect(toJSON()).toMatchSnapshot();

    let info = getByLabelText("Info");
    // Exposes the underlying test-renderer methods
    const button = info.findByType(Button);
    // console.log(button.props);

    let queries = getQueriesForElement(info);
    let text = queries.getByText("Leanne Graham");  // Self-asserting

    // Notice arrays are not search  result objects
    const items = getAllByLabelText("Info");
    // console.log(items.length);
    // queries = getQueriesForElement(items);  // bad result.  Arrays are just arrays
    queries = getQueriesForElement(items[0]);  // Now it works.  Arrays are just arrays
    text = queries.findByText("Leanne Graham");
    expect(text).not.toBeNull();    // Really, a snapshot does this

    const sloganButton = getByRole("button");
    console.log(sloganButton.props);
    fireEvent.press(sloganButton);    // Can't presss something that's not pressable


    // Self asserting
    const bs = getByText('harness real-time e-markets');
    // console.log(bs);

    // findBy does not assert, always returns "something", even null

    // console.log(items.length);
    // console.log(items[6].children);

    // console.log(items);
    // const name = getByLabelText("Name");

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