import { createReducer, createAction, on } from '@ngrx/store';
import { appState } from './app.state';
import { userAuthorizedAction } from './user/user.actions';
import { userAuthorizedReducer } from './user/user.reducers';

export const homeScore = createAction('[Scoreboard Page] Home Score');

export const appReducer = createReducer(
  appState,
  on(userAuthorizedAction, userAuthorizedReducer),
);