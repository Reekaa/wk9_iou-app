import React from "react";
import UserProfile from "./UserProfile";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

const setup = () => {
  const utils = render( <UserProfile /> );
  const btn = untils.getByLabelText("view-group")

  return {
    btn,
    ...utils
  };

};

describe(' Profile Page testing ',  () => {
  it("should display view group button ", async () => {
    // Arrange
    const { getByLabelText, btn } = render(<UserProfile/>);
    // Act
    // Assert
    expect(getByLabelText(/"view-group"/i)).toBeTruthy();
  });

})
