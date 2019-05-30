const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASKS":
      return [...action.tasks];
    default:
      return state;
  }
};

export default tasksReducer;
