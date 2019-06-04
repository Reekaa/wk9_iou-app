import deepFreeze from 'deep-freeze';
import usersReducer from './users_reducer.js'

describe('usersReducer test', () => {

  let users

  beforeEach( () => {

    users = [
    {
       "_id": "5cf52da04654fb5be51d6f06",
       "name": "Kris",
       "skill": "giving piano lessons",
       "groups": [
         {
           "groupName": "SW2",
           "karma": 0,
           "completedTasks": []
         }
       ]
     },
     {
       "_id": "5cf52e5f4654fb5be51d6f08",
       "name": "Keith",
       "skill": "giving guitar lessons",
       "groups": [
         {
           "groupName": "SW2",
           "karma": 0,
           "completedTasks": []
         }
       ]
     },
     {
       "_id": "5cf52e5f4654fb5be51d6f09",
       "name": "Ben",
       "skill": "giving swimming lessons",
       "groups": [
         {
           "groupName": "SW2",
           "karma": 0,
           "completedTasks": []
         }
       ]
     }]


  })

  it('should return the initial state', () => {
    expect(usersReducer([], {type: ''}))
      .toEqual([]);
  });

  it(' should handle "ADD_USERS" ', () => {
    //Arrang
    const beforeState = [];
    const afterState = users
    const action = {
      type: 'ADD_USERS',
      users: users
    }
    //Act
    deepFreeze(beforeState);
    //Assert
    expect(usersReducer(beforeState, action)).toEqual(afterState)
  });

})
