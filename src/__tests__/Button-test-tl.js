import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react-native";
import Button from 'component/Button';

// unmounts the components after each test
afterEach(cleanup);

describe("Testing Library Tests for Button", () => {

  it('Renders without crashing', () => {

    onPress = jest.fn();

    const {container, getbyText, toJSON} = render(<Button onPress={pnPress} />);
    console.log(toJSON());

  });

});
