const newTaskReducer = (state = {user: '', task: '', cost: 0, method: ''}, action) => {
  switch (action.type) {
    case "ADD_SELECTED_TASK":
      const newTaskState = {...state, task: action.selectedTask}
      return newTaskState;
    case "ADD_SELECTED_USER":
      const newUserState = {...state, user: action.selectedUser}
      return newUserState;
    case 'ADD_SELECTED_COST':
      const newCostState = {...state, cost: action.selectedCost}
      return newCostState;
    case 'ADD_SELECTED_COST_METHOD':
      const newCostMethod = {...state, method: action.costMethod}
      return newCostMethod;
    default:
      return state;
  }
};

export default newTaskReducer;
