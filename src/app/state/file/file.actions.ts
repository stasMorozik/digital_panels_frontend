import { createAction, props } from '@ngrx/store';

export const fileListLoadAction = createAction(
  '[Work Space Files] Files Load',
  props<{
    pagi: {
      page: number,
      limit: number
    },
    filter: {
      type?: string,
      url?: string,
      extension?: string,
      size?: number,
      created_f?: string,
      created_t?: string,
    },
    sort: {
      size?: string,
      type?: string,
      created?: string
    }
  }>()
);