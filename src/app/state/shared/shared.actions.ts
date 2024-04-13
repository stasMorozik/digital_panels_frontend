import { createAction, props } from '@ngrx/store';
import { TypeNotification } from './shared.types';

export const gotNotificationAction = createAction(
  '[SITE] Got Notification',
  props<{ message: string, typeNotification: TypeNotification}>()
);

export const showNotificationAction = createAction(
  '[SITE] Show Notification',
  props<{ message: string, typeNotification: TypeNotification }>()
);

export const hidingNotificationAction = createAction(
  '[SITE] Hiding Notification'
);

export const hideNotificationAction = createAction(
  '[SITE] Hide Notification'
);