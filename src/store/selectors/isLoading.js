import { createSelector } from 'reselect';

const selectLoadingReducer = (state) => state.isLoading;

export const selectIsLoading = createSelector(selectLoadingReducer, (isLoading) => isLoading);