const tempCurrentUser = {
  "_id": "5cefcdb77ee2f6208aaf8a82",
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
