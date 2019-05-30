const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      let newState = action.users;
      return newState;
    case "ADD_TASK_TO_USER":
      return state.map(user => {
        if(user.name === action.currentUser){
          let newUser = {...user, completedTasks: [...user.completedTasks, action.newTask]}
          return newUser
        }
      return user
      })

    default:
      return state;
  }
};

export default usersReducer;
