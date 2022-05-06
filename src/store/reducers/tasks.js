const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.payload);
    case 'TOGGLE_DONE': {
      const index = state.findIndex(({ id }) => id === action.payload);
      return [
        ...state.slice(0, index),
        { ...state[index], done: !state[index].done },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
};

export default tasksReducer;
