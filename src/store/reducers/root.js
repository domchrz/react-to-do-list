import { combineReducers } from 'redux';
import errorReducer from './error';
import isLoadingReducer from './isLoading';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default rootReducer;
