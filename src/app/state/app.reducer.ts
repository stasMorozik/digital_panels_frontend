import { createReducer, on } from '@ngrx/store';
import { appState } from './app.state';
import { 
  userAuthenticatedAction, 
  userAuthorizedAction, 
  userGotCodeAction 
} from './user/user.actions';

import { 
  userAuthenticatedReducer,
  userAuthorizedReducer, 
  userGotCodeReducer 
} from './user/user.reducers';

import { 
  gotNotificationAction, 
  showNotificationAction, 
  hidingNotificationAction, 
  hideNotificationAction 
} from './shared/shared.actions';

import { 
  gotNotificationReducer, 
  showNotificationReducer, 
  hidingNotificationReducer, 
  hideNotificationReducer 
} from './shared/shared.reducers';

export const appReducer = createReducer(
  appState,
  on(userAuthorizedAction, userAuthorizedReducer),
  on(userGotCodeAction, userGotCodeReducer),
  on(userAuthenticatedAction, userAuthenticatedReducer),
  on(gotNotificationAction, gotNotificationReducer),
  on(showNotificationAction, showNotificationReducer),
  on(hidingNotificationAction, hidingNotificationReducer),
  on(hideNotificationAction, hideNotificationReducer),
);