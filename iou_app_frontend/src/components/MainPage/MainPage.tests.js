

// copied:

import React from "react";
import /*FILE*/ from /*"./FILEPATH"*/;
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = () => {
  const utils = render(<{/*FILE*/} />);
  const newTaskInput = utils.getByLabelText("new-task");
  const taskReceiver = utils.getByLabelText("task-receiver");
  const btn = utils.getByText("Add task");

  return {
    newTaskInput,
    taskReceiver,
    btn,
    ...utils
  };
};

afterEach(cleanup);

describe(/*"Filename"*/, () => {
  it("should display two inputs and a button on the page", () => {
    // Arrange
    const { newTaskInput, taskReceiver, btn } = setup(); // destructuring object to get the two funcitons out
    // Act
    // Assert
    expect(newTaskInput).toBeTruthy();
    expect(taskReceiver).toBeTruthy();
    expect(btn).toBeTruthy();
  });

  it("should accept input", () => {
    //Arrange
    const { newTaskInput, taskReceiver, btn } = setup();
    //Act
    fireEvent.select(newTaskInput, { target: { value: "I painted a wall" } });
    fireEvent.select(taskReceiver, { target: { value: "Reka" } });
    //Assert
    expect(newTaskInput.value).toBe("I painted a wall");
    expect(taskReceiver.value).toBe("Reka");
  });

  it("should not accept incomplete submissions", () => {
    //Arrange
    const { newTaskInput, taskReceiver, btn } = setup();
    //Act
    fireEvent.select(newTaskInput, { target: { value: "I painted a wall" } });
    fireEvent.click(btn);
    //Assert
    expect(getByText("Please select the person you completed this task for")).toBeTruthy();
  });

  it("should not accept incomplete submissions", () => {
    //Arrange
    const { newTaskInput, taskReceiver, btn } = setup();
    //Act
    fireEvent.select(taskReceiver, { target: { value: "Reka" } });
    fireEvent.click(btn);
    //Assert
    expect(getByText("Please select a task")).toBeTruthy();
  });

describe(/*"File"*/, () => {
  it("displays a confirmation message when the 'add task' button is clicked", async () => {
    const { getByText, getByLabelText } = render(</*File*/ />);
    const btn = getByText("Add task");
    const newTaskInput = getByLabelText("new-task");
    const taskReceiver = getByLabelText("task-receiver");
    //Act
    fireEvent.select(newTaskInput, { target: { value: "I painted a wall" } });
    fireEvent.select(taskReceiver, { target: { value: "Reka" } });
    fireEvent.click(btn);

    // Assert
    await wait(() => getByText("Task added"));
  });
});
