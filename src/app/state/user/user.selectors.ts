import { createSelector } from '@ngrx/store';
import { State } from '../app.types';
import { User } from './user.types';

export const userSelector = (state: State): User => state.app.user;

export const userObjectSelector = createSelector(
  userSelector,
  (user: User) => user
);

export const userIsAuthorizationSelector = createSelector(
  userSelector,
  (user: User) => user.isAuthorized
);

export const userIsAuthenticatedSelector = createSelector(
  userSelector,
  (user: User) => user.isAuthenticated
);
