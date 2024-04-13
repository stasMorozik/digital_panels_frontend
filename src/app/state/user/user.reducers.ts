import { AppState, AppAction } from "../app.types";
import { Approval, User } from './user.types';
import { Action } from '@ngrx/store';

export const userAuthorizedReducer = (
  state: AppState,
  action: Action
) => {
  const payload = (action as Action as AppAction<{
    email: string,
    name: string,
    surname: string
  }>).payload;

  return {
    ...state,
    user: {
      ...state.user,
      name: payload.name,
      surname: payload.surname,
      email: payload.email,
      isAuthorized: 'YES' as Approval
    }
  };
};

export const userNotAuthorizedReducer = (
  state: AppState
) => ({
  ...state,
  user: {
    ...state.user,
    isAuthorized: 'NO' as Approval
  }
});

export const userGotCodeReducer = (
  state: AppState
) => ({
  ...state,
  user: {
    ...state.user,
    isAuthenticated: 'IN_PROCESS' as Approval
  }
});

export const userAuthenticatedReducer = (
  state: AppState
) => ({
  ...state,
  user: {
    ...state.user,
    isAuthenticated: 'YES' as Approval
  }
});
