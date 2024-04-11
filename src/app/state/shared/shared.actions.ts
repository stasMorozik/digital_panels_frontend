import { createAction, props } from '@ngrx/store';

export const gotErrorAction = createAction(
  '[SITE] Got Error',
  props<{ message: string }>()
);

export const showErrorAction = createAction(
  '[SITE] Show Error',
  props<{ message: string }>()
);

export const hidingErrorAction = createAction(
  '[SITE] Hiding Error'
);

export const hideErrorAction = createAction(
  '[SITE] Hide Error'
);