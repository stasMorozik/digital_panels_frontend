import { createSelector } from '@ngrx/store';
import { State } from '../app.types';
import { Notification } from './shared.types';

export const notificationSelector = (state: State) => state.app.notification!;

export const notificationObjectSelector = createSelector(
  notificationSelector,
  (n: Notification) => n
);

export const notificationVisibilitySelector = createSelector(
  notificationSelector,
  (n: Notification) => n.visibility
);