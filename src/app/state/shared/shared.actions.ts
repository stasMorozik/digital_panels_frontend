import { createAction, props } from '@ngrx/store';
import { Data, TypeNotification } from './shared.types';

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

export const loadingDataAction = createAction(
  '[WORK SPACE] Loading Data'
);

export const loadedDataAction = createAction(
  '[WORK SPACE] Loaded Data',
  props<{ payload: Data<any>}>()
);

export const droppedLoadingDataAction = createAction(
  '[WORK SPACE] Dropped Loading Data'
);