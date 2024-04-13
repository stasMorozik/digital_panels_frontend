import { AppAction, AppState } from "../app.types";
import { Notification, Visibility, TypeNotification } from './shared.types';
import { Action } from '@ngrx/store';

export const gotNotificationReducer = (
  state: AppState,
) => {
  return {
    ...state,
    notification: {
      visibility: 'HIDDEN' as Visibility,
    } as Notification
  };
};

export const showNotificationReducer = (
  state: AppState,
  action: Action
) => {
  const payload = (
    (action as Action as AppAction<{message: string, typeNotification: TypeNotification}>
  ).payload);
  
  return {
    ...state,
    notification: {
      message: payload.message,
      type: payload.typeNotification,
      visibility: 'SHOWN' as Visibility,
    } as Notification
  };
};

export const hidingNotificationReducer = (
  state: AppState
) => {
  const visibility = state.notification?.visibility;

  return {
    ...state,
    notification: {
      ...state.notification,
      visibility: visibility == 'SHOWN' ? ('HIDING' as Visibility) : visibility,
    } as Notification
  };
};

export const hideNotificationReducer = (
  state: AppState
) => {
  return {
    ...state,
    notification: {
      ...state.notification,
      visibility: 'HIDDEN' as Visibility,
    } as Notification
  };
};