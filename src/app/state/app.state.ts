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
};

export type Approval = 'YES' | 'IN_PROCESS' | 'NO';

export type User = {
  isAuthorized: Approval,
  isAuthenticated: Approval,
  email?: string,
  name?: string
};

export type Visibility = 'SHOWN' | 'HIDING' | 'HIDDEN';

export type TypeNotification = 'DANGER' | 'WARNING' | 'INFO'

export type Notification = {
  message: string,
  type: TypeNotification,
  visibility: Visibility
}

export const appState: AppState = {
  user: {
    isAuthorized: 'NO',
    isAuthenticated: 'NO'
  },
};