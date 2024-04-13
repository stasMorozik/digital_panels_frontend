import { User } from "./user/user.types";
import { Notification } from './shared/shared.types';
import { SateFiles } from './file/file.types';

export type State = {
  app: AppState
};

export type AppAction<T> = {
  type: string,
  payload: T
}

export type AppState = {
  user: User,
  files?: SateFiles,
  notification?: Notification
};