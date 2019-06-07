// overwriting groupUsers in state with users in currentUser's group
const groupUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GROUP_USERS":
      let newState = [...action.groupUsers];
      return newState;
    default:
      return state;
  }
};

export default groupUsersReducer;
