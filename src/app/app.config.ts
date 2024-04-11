import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { appReducer } from './state/app.reducer';
import * as userAuthorizationEffect from './state/user/effects';
import { refreshTokenInterceptor } from './app.interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([refreshTokenInterceptor]),
    ),
    provideStore(),
    provideEffects(userAuthorizationEffect),
    provideState({ name: 'app', reducer: appReducer }),
  ],
};
