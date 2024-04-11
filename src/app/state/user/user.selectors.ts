import { createSelector } from '@ngrx/store';
import { User, State } from '../app.state';

export const userSelector = (state: State): User => state.app.user;

export const userIsAuthorizationSelector = createSelector(
  userSelector,
  (user: User) => user.isAuthorized
);

export const userIsAuthenticatedSelector = createSelector(
  userSelector,
  (user: User) => user.isAuthenticated
);
