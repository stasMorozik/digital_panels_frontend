import { createSelector } from '@ngrx/store';
import { AppError, State } from '../app.state';

export const errorSelector = (state: State) => state.app.error!;

export const errorObjectSelector = createSelector(
  errorSelector,
  (error: AppError) => error
);