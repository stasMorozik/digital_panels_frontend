import { AppState } from "./app.types";

export const appState: AppState = {
  user: {
    isAuthorized: 'NO',
    isAuthenticated: 'NO'
  },
  data: {
    progress: 'NONE'
  }
};