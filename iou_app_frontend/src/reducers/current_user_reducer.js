const tempCurrentUser = {
  "_id": "5cefb95cd9067b7f7031b698",
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
