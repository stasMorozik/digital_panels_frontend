import { AppAction, AppState, Notification, TypeNotification, Visibility } from "../app.state";
import { Action } from '@ngrx/store';

export const gotErrorReducer = (
  state: AppState,
  action: Action
) => {
  const payload = (action as Action as AppAction<{message: string}>).payload;

  return {
    ...state,
    notification: {
      message: payload.message,
      visibility: 'HIDDEN' as Visibility,
      type: 'DANGER' as TypeNotification
    } as Notification
  };
};

export const showErrorReducer = (
  state: AppState,
  action: Action
) => {
  const payload = (action as Action as AppAction<{message: string}>).payload;

  return {
    ...state,
    notification: {
      message: payload.message,
      visibility: 'SHOWN' as Visibility,
      type: 'DANGER' as TypeNotification
    } as Notification
  };
};

export const hidingErrorReducer = (
  state: AppState
) => {
  const visibility = state.notification?.visibility;

  return {
    ...state,
    notification: {
      ...state.notification,
      visibility: visibility == 'SHOWN' ? ('HIDING' as Visibility) : visibility,
      type: 'DANGER' as TypeNotification
    } as Notification
  };
};

export const hideErrorReducer = (
  state: AppState
) => {
  return {
    ...state,
    notification: {
      ...state.notification,
      visibility: 'HIDDEN' as Visibility,
      type: 'DANGER' as TypeNotification
    } as Notification
  };
};