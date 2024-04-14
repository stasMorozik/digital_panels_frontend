import { createSelector } from '@ngrx/store';
import { State } from '../app.types';
import { Data, Notification } from './shared.types';

export const notificationSelector = (state: State) => state.app.notification!;

export const notificationObjectSelector = createSelector(
  notificationSelector,
  (n: Notification) => n
);

export const notificationVisibilitySelector = createSelector(
  notificationSelector,
  (n: Notification) => n.visibility
);

export const dataSelector = (state: State) => state.app.data!;

export const dataObjectSelector = createSelector(
  dataSelector,
  (n: Data<any>) => n
);

export const dataProgessSelector = createSelector(
  dataSelector,
  (n: Data<any>) => n.progress
);