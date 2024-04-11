import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';

export const userAuthorizationEffect = createEffect(
  (
    actions$ = inject(Actions), 
    httClient = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType('[SITE] User Authorization'),
      exhaustMap(() =>
        httClient.get<{name: string, email: string}>('/api/v1/user/', {}).pipe(
          map((user: {name: string, email: string}) => ({ 
              type: '[SITE] User Authorized', 
              payload: {name: user.name, email: user.email} 
            })
          ),
          catchError(() => {
            return of({ type: '[SITE] User Not Authorized' })
          })
        )
      )
    );
  },
  { functional: true }
);

export const userGetCodeEffect = createEffect(
  (
    actions$ = inject(Actions), 
    httClient = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType('[Sign In page] User Get Code'),
      exhaustMap((args: {email: string}) => {
        return httClient.put<unknown>('/api/v1/confirmation-code/', {
          needle: args.email
        }).pipe(
          map(() => ({type: '[Sign In page] User Got Code'})),
          catchError((response: HttpErrorResponse) => {
            return of({ type: '[SITE] Got Error', payload: response.error});
          })
        )
      })
    );
  },
  { functional: true }
);