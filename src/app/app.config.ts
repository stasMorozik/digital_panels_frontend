import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { appReducer } from './state/app.reducer';
import { UserAuthorizationEffect } from './state/user/effects/user.authorization.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([]),
    ),
    provideStore(),
    provideEffects(UserAuthorizationEffect),
    provideState({ name: 'app', reducer: appReducer }),
  ],
};
