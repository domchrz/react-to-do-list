import createAction from './createAction';
import createThunkAction from './createThunkAction';
import ACTIONS_TYPES from './types';

const ACTIONS = {
  addTask: createThunkAction(ACTIONS_TYPES.addTask),
  removeTask: createThunkAction(ACTIONS_TYPES.removeTask),
  toggleDone: createAction(ACTIONS_TYPES.toggleDone),
  error: createAction(ACTIONS_TYPES.catchError)

};

export default ACTIONS;
