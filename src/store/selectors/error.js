import { createSelector } from 'reselect';

const selectErrorReducer = (state) => state.error;

export const selectError = createSelector(selectErrorReducer, (error) => error);