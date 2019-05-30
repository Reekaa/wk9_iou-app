const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      let newState = [...state, ...action.users];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
