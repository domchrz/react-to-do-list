import createAction from '../../helpers/actions/createAction';
import createThunkAction from '../../helpers/actions/createThunkAction';
import ACTIONS_TYPES from './action.types';

const ACTIONS = {
  addTask: createThunkAction(ACTIONS_TYPES.addTask),
  removeTask: createThunkAction(ACTIONS_TYPES.removeTask),
  toggleDone: createAction(ACTIONS_TYPES.toggleDone),
  error: createAction(ACTIONS_TYPES.catchError)

};

export default ACTIONS;
