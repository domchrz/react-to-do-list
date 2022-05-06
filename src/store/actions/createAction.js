const createAction = (actionType) => (payload) => ({
  type: actionType,
  payload,
});

export default createAction;