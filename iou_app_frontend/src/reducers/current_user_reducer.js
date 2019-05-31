const tempCurrentUser = {
  "_id": "5cefdf8cd5f95eb68e8f25dd",
  "name": "Keith",
  "groups": [
    {
      "groupName": "SW2",
      "karma": 0,
      "completedTasks": []
    }
  ]
}


const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.currentUser
    default:
      return state;
  }
};

export default currentUserReducer;
