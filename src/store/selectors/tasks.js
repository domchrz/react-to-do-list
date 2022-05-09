import { createSelector } from 'reselect';

const selectTasksReducer = (state) => state.tasks;

export const selectTasks = createSelector(selectTasksReducer, (tasks) => tasks);
