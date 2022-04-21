import { combineReducers } from 'redux';
import errorReducer from './error.reducer';
import isLoadingReducer from './loading.reducer';
import tasksReducer from './tasks.reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default rootReducer;
