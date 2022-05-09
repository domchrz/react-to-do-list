const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.payload);
    case 'TOGGLE_DONE': {
      const indexToUpdate = state.findIndex(({ id }) => id === action.payload);
      return state.map((item, index) =>
        index === indexToUpdate ? { ...item, done: !item.done } : item
      );
    }
    default:
      return state;
  }
};

export default tasksReducer;
