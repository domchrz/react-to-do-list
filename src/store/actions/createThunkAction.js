import ACTIONS from './types';
import createAction from './createAction';

const promiseAction = (cb) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(cb()), 500);
  });

const createThunkAction = (actionType) => (payload) => async (dispatch) => {
  dispatch(createAction(ACTIONS.setIsLoading)(true));
  try {
    await promiseAction(() => dispatch(createAction(actionType)(payload)));
  } catch (error) {
    dispatch(createAction(ACTIONS.catchError)(error));
  }
  dispatch(createAction(ACTIONS.setIsLoading)(false));
};


export default createThunkAction;