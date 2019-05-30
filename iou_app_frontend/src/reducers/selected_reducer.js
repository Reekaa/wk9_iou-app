const selectedReducer = (state = {user: '', task: ''}, action) => {
  switch (action.type) {
    case "ADD_SELECTED_TASK":
      const newTaskState = {...state, task: action.selectedTask}
      return newTaskState;
    case "ADD_SELECTED_USER":
    const newUserState = {...state, user: action.selectedUser}
    return newUserState;
    default:
      return state;
  }
};

export default selectedReducer;
