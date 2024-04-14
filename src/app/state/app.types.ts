import { User } from "./user/user.types";
import { Data, Notification } from './shared/shared.types';
import { File } from './file/file.types';

export type State = {
  app: AppState
};

export type AppAction<T> = {
  type: string,
  payload: T
}

export type AppState = {
  user: User,
  notification?: Notification
  data?: Data<File[] | File>
};