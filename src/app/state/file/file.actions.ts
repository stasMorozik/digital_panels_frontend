import { createAction, props } from '@ngrx/store';
import {File } from './file.types';

export const fileListLoadAction = createAction(
  '[Work Space Files] Files Load',
  props<{
    pagi: {
      page: number,
      limit: number
    },
    filter: {
      url?: string
    },
    sort: {
      created?: string
    }
  }>()
);

export const fileListLoadingAction = createAction(
  '[Work Space Files] Files Loading'
);

export const fileListLoadedAction = createAction(
  '[Work Space Files] Files Loaded', 
  props<{files: File[]}>()
);