const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASKS":
      console.log(action.tasks);
      return action.tasks;
    default:
      return state;
  }
};

export default tasksReducer;
