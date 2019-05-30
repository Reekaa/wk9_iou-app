// copied:
import React from "react";
import Main from "./Main.js";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <Main
      selected={{user: "Keith", task: 'babysitting'}}
      tasks={[{_id: "xxx", task:"Babysitting", value: 0}]}
      users={[{_id:'xxx', name: 'Keith', karma: 0, completedTask: []}]}
    />
  );
  const newTaskInput = utils.getByText("Select Task");
  const taskReceiver = utils.getByText("Select User");
  const taskOption = utils.getByText("Babysitting");
  const taskReceiverOption = utils.getByText("Keith");
  const btn = utils.getByText("Add task");

  return {
    newTaskInput,
    taskReceiver,
    btn,
    ...utils
  };

};

describe('main page new task testing',  () => {
  it("should display two inputs and a button on the page", async () => {
    // Arrange
    const { getByText, btn} = setup();
    // Act
    // Assert
    await (() => getByText(/select task/i))
    await (() => getByText(/selet user/i))
    expect(btn).toBeTruthy();
  });

  it("tasks dropdown should show options once clicked", async () => {
    // Arrange
    const { newTaskInput } = setup();
    // Act
    fireEvent.click(newTaskInput);
    // Assert
    await (() => getByText(/babysitting/i))
  });

  it("option from task dropdown should be selectable", async () => {
    // Arrange
    const { newTaskInput, taskOption} = setup();
    // Act
    fireEvent.click(newTaskInput);
    await(() => fireEvent.click(taskOption));
    // Assert
    await (() => getByText(/babysitting/i))
  });

  it("user dropdown should show users once clicked", async () => {
    // Arrange
    const { taskReceiver, btn} = setup();
    // Act
    fireEvent.click(taskReceiver);
    // Assert
    await (() => getByText(/keith/i))
  });

  it("option from user dropdown should be selectable", async () => {
    // Arrange
    const { taskReceiver, taskOption} = setup();
    // Act
    fireEvent.click(taskReceiver);
    await(() => fireEvent.click(taskReceiverOption));
    // Assert
    await (() => getByText(/keith/i))
  });

  it("displays a confirmation message when the 'add task' button is clicked", async () => {
    //Arrange
    const { newTaskInput, taskOption, taskReceiver, taskReceiverOption, btn} = setup();
    //Act
    fireEvent.click(newTaskInput);
    await(() => fireEvent.click(taskOption));
    fireEvent.click(taskReceiver);
    await(() => fireEvent.click(taskReceiverOption));
    fireEvent.click(btn);
    // Assert
    await(() => getByText("Task submitted!"));
  });


});
