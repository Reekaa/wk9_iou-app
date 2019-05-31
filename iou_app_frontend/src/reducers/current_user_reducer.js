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



const currentUserReducer = (state = tempCurrentUser, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default currentUserReducer;
