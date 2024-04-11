import { createReducer, on } from '@ngrx/store';
import { appState } from './app.state';
import { userAuthorizedAction, userGotCodeAction } from './user/user.actions';
import { userAuthorizedReducer, userGotCodeReducer } from './user/user.reducers';
import { showErrorAction, gotErrorAction, hideErrorAction } from './shared/shared.actions';
import { showErrorReducer, gotErrorReducer, hideErrorReducer } from './shared/shared.reducers';

export const appReducer = createReducer(
  appState,
  on(userAuthorizedAction, userAuthorizedReducer),
  on(userGotCodeAction, userGotCodeReducer),
  on(gotErrorAction, gotErrorReducer),
  on(showErrorAction, showErrorReducer),
  on(hideErrorAction, hideErrorReducer),
);