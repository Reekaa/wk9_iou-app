import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import tasksReducer from './tasks_reducer.js';
import selectedReducer from './selected_reducer.js';
import currentUserReducer from './current_user_reducer.js';
import confirmationReducer from './confirmation_reducer.js';
import groupUsersReducer from './group_users_reducer.js';

export default combineReducers({
  users: usersReducer,
  groupUsers: groupUsersReducer,
  tasks: tasksReducer,
  selected: selectedReducer,
  currentUser: currentUserReducer,
  confirm: confirmationReducer
});
