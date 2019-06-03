import React from "react";
import GroupPage from "./GroupPage.js";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <GroupPage
      currentUser={
        "name": "Keith",
        "skill": "giving guitar lessons",
        "groups": [
          {
            "groupName": "SW2",
            "karma": 0,
            "completedTasks": []
          }
        ]
      }
      tasks={[
          { "task": "Babysitting", "value": 5 },
          { "task": "Painting", "value": 10 },
          { "task": "Gardening", "value": 8 },
          { "task": "Cleaning Kitchen", "value": 15 }
        ]}
      groupUsers=  [
          {
            "name": "Keith",
            "skill": "giving guitar lessons",
            "groups": [
              {
                "groupName": "SW2",
                "karma": 10,
                "completedTasks": []
              }
            ]
          },
          {
            "name": "Ben",
            "skill": "giving swimming lessons",
            "groups": [
              {
                "groupName": "SW2",
                "karma": 20,
                "completedTasks": []
              }
            ]
          },
          {
            "name": "Reka",
            "skill": "dog walking",
            "groups": [
              {
                "groupName": "SW2",
                "karma": 30,
                "completedTasks": []
              }
            ]
          }
        ]
    />
  );
  const currentGroup = utils.getByText("SW2");
  const topUser = utils.getByText("Reka");
  const recentTasks = utils.getByText("Babysitting");
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
