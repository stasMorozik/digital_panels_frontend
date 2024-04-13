import { createSelector } from '@ngrx/store';
import { State } from '../app.types';
import { SateFiles } from './file.types';

export const fileSelector = (state: State): SateFiles => state.app.files!;

export const fileStateSelector = createSelector(
  fileSelector,
  (state: SateFiles) => state
);

export const fileListSelector = createSelector(
  fileSelector,
  (state: SateFiles) => state.list
);

export const fileDetailSelector = createSelector(
  fileSelector,
  (state: SateFiles) => state.detail
);
