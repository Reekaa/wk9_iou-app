const confirmationReducer = (state = false, action) => {
  switch (action.type) {
    case 'CONFIRM_TASK':
      return action.confirm
    default:
      return state;
  }
};

export default confirmationReducer;
