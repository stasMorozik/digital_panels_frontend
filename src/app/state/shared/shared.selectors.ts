import { createSelector } from '@ngrx/store';
import { Notification, State } from '../app.state';

export const notificationSelector = (state: State) => state.app.notification!;

export const notificationObjectSelector = createSelector(
  notificationSelector,
  (n: Notification) => n
);

export const notificationVisibilitySelector = createSelector(
  notificationSelector,
  (n: Notification) => n.visibility
);