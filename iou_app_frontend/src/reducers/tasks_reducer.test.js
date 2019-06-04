import deepFreeze from 'deep-freeze';
import tasksReducer from './tasks_reducer.js'

describe('taskReducer test', () => {

  let newTask

  beforeEach( () => {

    newTask = [
      "_id": "5ceeadce1b7e5a808d2c39cd",
      "task": "babysitting",
      "value": 5
    ]
  })

  it('should return the initial state', () => {
    expect(tasksReducer([], {type: ''}))
      .toEqual([]);
  });

  it(' should handle "ADD_TASKS" ', () => {
    //Arrang
    const beforeState = [];
    const afterState = newTask
    const action = {
      type: 'ADD_TASKS',
      tasks: newTask }
    //Act
    deepFreeze(beforeState);
    //Assert
    expect(tasksReducer(beforeState, action)).toEqual(afterState)
  })
})
