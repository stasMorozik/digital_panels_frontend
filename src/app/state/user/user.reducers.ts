import { AppState, AppAction, Approval } from "../app.state";
import { Action } from '@ngrx/store';

export const userAuthorizedReducer = (
  state: AppState,
  action: Action
) => ({
  ...state,
  user: {
    ...state.user,
    email: (action as Action as AppAction<{email: string}>).payload.email,
    name: (action as Action as AppAction<{name: string}>).payload.name,
    isAuthorized: 'YES' as Approval
  }
});

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
