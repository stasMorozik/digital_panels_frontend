import { AppState } from "../app.state";

export const userAuthorizedReducer = (
  state: AppState,
  payload: {email: string, name: string}
) => ({
  ...state,
  user: {
    email: payload.email,
    name: payload.name,
    isAuth: true
  }
});

export const userNotAuthorizedReducer = (
  state: AppState
) => ({
  ...state,
  user: {
    isAuth: false
  }
});