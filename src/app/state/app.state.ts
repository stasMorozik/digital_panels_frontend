export type State = {
  app: AppState
};

export type AppAction<T> = {
  type: string,
  payload: T
}

export type AppState = {
  user: User,
  error?: AppError
};

export type Approval = 'YES' | 'IN_PROCESS' | 'NO';

export type User = {
  isAuthorized: Approval,
  isAuthenticated: Approval,
  email?: string,
  name?: string
};

export type Visibility = 'SHOW' | 'HIDDEN';

export type AppError = {
  message: string,
  visibility: Visibility
}

export const appState: AppState = {
  user: {
    isAuthorized: 'NO',
    isAuthenticated: 'NO'
  },
};