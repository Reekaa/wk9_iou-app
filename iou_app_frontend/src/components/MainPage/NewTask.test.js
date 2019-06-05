import React from "react";
import NewTask from "./NewTask";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <NewTask
      selected={{user: "Keith", task: 'babysitting', hr: 1}}
      tasks={[{_id: "xxx", task:"Babysitting", value: 0}]}
      users={[{_id:'xxx', name: 'Keith', karma: 0, completedTask: []}]}
    />
  );
  const newTaskInput = utils.getByText("Select Task");
  const taskReceiver = utils.getByText("Select User");
  const hrsInput = utils.getByText(0)
  const taskSubmitBtn = utils.getByText("Add task");
  const newTaskBtn = utils.getByText("Add new task");
  const taskOption = utils.getByText("Babysitting");
  const taskReceiverOption = utils.getByText("Keith");

  return {
    newTaskInput,
    taskReceiver,
    hrsInput,
    taskSubmitBtn,
    newTaskBtn,
    taskOption,
    taskReceiverOption,
    ...utils
  };

};

describe(' new task page testing ',  () => {
  xit("should display two dropdowns, two submit buttons and an iput on the page", async () => {
    // Arrange
    const { getByText, taskSubmitBtn, newTaskBtn } = setup();
    // Act
    // Assert
    await (() => getByText(/select task/i))
    await (() => getByText(/selet user/i))
    await (() => getByText(/add task/i))
    await (() => getByText(/add new task/i))
    await (() => getByText(0))
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

  xit("option from task dropdown should be selectable", async () => {
    // Arrange
    const { newTaskInput, taskOption} = setup();
    // Act
    fireEvent.click(newTaskInput);
    await(() => fireEvent.click(taskOption));
    // Assert
    await (() => getByText(/babysitting/i))
  });

  xit("user dropdown should show users once clicked", async () => {
    // Arrange
    const { taskReceiver, btn} = setup();
    // Act
    fireEvent.click(taskReceiver);
    // Assert
    await (() => getByText(/keith/i))
  });

  xit("option from user dropdown should be selectable", async () => {
    // Arrange
    const { taskReceiver, taskOption} = setup();
    // Act
    fireEvent.click(taskReceiver);
    await(() => fireEvent.click(taskReceiverOption));
    // Assert
    await (() => getByText(/keith/i))
  });

  xit("displays a confirmation message when the 'add task' button is clicked", async () => {
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
