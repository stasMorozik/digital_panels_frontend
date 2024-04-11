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

export const userGetCodeAction = createAction(
  '[Sign In page] User Get Code',
  props<{ email: string | null | undefined }>()
);

export const userGotCodeAction = createAction(
  '[Sign In page] User Got Code'
);