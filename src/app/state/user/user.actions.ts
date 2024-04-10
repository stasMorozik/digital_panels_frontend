import { createAction, props } from '@ngrx/store';

export const userAuthorizationAction = createAction(
  '[SITE] User Authorization'
);

export const userAuthorizedAction = createAction(
  '[SITE] User Authorized', 
  props<{ name: string, email: string }>()
);

export const userNotAuthorizationAction = createAction(
  '[SITE] User Not Authorized'
);