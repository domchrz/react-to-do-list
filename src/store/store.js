import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';

const store = createStore(
  rootReducer,
  {
    tasks: [
      {
        title: 'Test task',
        id: -1,
        done: false,
      },
    ],
    isLoading: false,
    error: null,
  },
  applyMiddleware(thunk)
);

export default store;
