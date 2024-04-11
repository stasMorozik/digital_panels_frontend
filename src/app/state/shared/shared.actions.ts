import { createAction, props } from '@ngrx/store';

export const gotErrorAction = createAction(
  '[SITE] Got Error',
  props<{ message: string }>()
);

export const showErrorAction = createAction(
  '[SITE] Show Error',
  props<{ message: string }>()
);

export const hideErrorAction = createAction(
  '[SITE] Hide Error'
);