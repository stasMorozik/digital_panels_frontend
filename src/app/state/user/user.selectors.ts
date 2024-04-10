import { createSelector } from '@ngrx/store';
import { User, State } from '../app.state';

export const userSelector = (state: State): User => state.app.user;

export const userIsAuthSelector = createSelector(
  userSelector,
  (user: User) => user.isAuth
);

