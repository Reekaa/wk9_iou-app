import deepFreeze from 'deep-freeze';
import currentUserReducer from './current_user_reducer.js'

describe('currentUserReducer test', () => {

  let user

  beforeEach( () => {

    user = {
      "_id": "5cf52e5f4654fb5be51d6f0a",
      "name": "Reka",
      "skill": "dog walking",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 149,
          "completedTasks": [
            {
              "task": "babysitting",
              "value": 5,
              "whoFor": "Pawel",
              "karma": 5,
              "cost": {
                "pounds": "1"
              }
            }]
          }]
        }
  })

  it('should return the initial state', () => {
    expect(currentUserReducer({}, {type: ''}))
      .toEqual({});
  });

  xit(' should handle "SET_CURRENT_USER" ', () => {
    //Arrang
    const beforeState = {};
    const afterState = user
    const action = {
      type: 'SET_CURRENT_USER',
      currentUser: user }
    //Act
    deepFreeze(beforeState);
    //Assert
    expect(currentUserReducer(beforeState, action)).toEqual(afterState)
  })
})
