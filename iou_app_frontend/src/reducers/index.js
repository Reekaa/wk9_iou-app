import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import tasksReducer from './tasks_reducer.js';

export default combineReducers({
  users: usersReducer,
  tasks: tasksReducer
});
