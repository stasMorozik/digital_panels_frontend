import { AppAction, AppState, AppError, Visibility } from "../app.state";
import { Action } from '@ngrx/store';

export const gotErrorReducer = (
  state: AppState,
  action: Action
) => {
  return {
    ...state,
    error: {
      message: (action as Action as AppAction<Error>).payload.message,
      visibility: 'HIDDEN' as Visibility
    } as AppError
  };
};

export const showErrorReducer = (
  state: AppState,
  action: Action
) => {
  return {
    ...state,
    error: {
      message: (action as Action as AppAction<Error>).payload.message,
      visibility: 'SHOW' as Visibility
    } as AppError
  };
};

export const hideErrorReducer = (
  state: AppState
) => {
  return {
    ...state,
    error: {
      ...state.error,
      visibility: 'HIDE' as Visibility
    } as AppError
  };
};