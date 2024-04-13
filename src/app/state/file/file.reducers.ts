import { AppState, AppAction } from "../app.types";
import { Approval, SateFiles, File } from './file.types';
import { Action } from '@ngrx/store';


export const fileListLoadingReducer = (
  state: AppState,
) => ({
  ...state,
  files: {
    isLoaded: 'IN_PROCESS' as Approval,
    list: []
  }
});

export const fileListLoadedReducer = (
  state: AppState,
  action: Action
) => {
  const payload = (action as Action as AppAction<{
    files: File[],
  }>).payload;

  return {
    ...state,
    files: {
      isLoaded: 'YES' as Approval,
      list: payload.files
    }
  };
};
