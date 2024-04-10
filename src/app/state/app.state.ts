export type State = {
  app: AppState
}

export type AppState = {
  user: User
};

export type User = {
  isAuth: boolean,
  email?: string,
  name?: string
};

export const appState: AppState = {
  user: {
    isAuth: false
  },
};