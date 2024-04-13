import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, exhaustMap, catchError, switchMap, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TypeNotification } from '../shared/shared.types';

export const userAuthorizationEffect = createEffect(
  (
    actions$ = inject(Actions), 
    httClient = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType('[SITE] User Authorization'),
      exhaustMap(() =>
        httClient.get<{name: string, email: string, surname: string}>('/api/v1/user/', {}).pipe(
          map((user: {name: string, email: string, surname: string}) => ({ 
            type: '[SITE] User Authorized', 
            payload: {name: user.name, surname: user.surname, email: user.email} 
          })),
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
          switchMap(() => {
            const payload = {
              message: "Мы отправили вам одноразовый код на электронную почту",
              type: 'INFO' as TypeNotification
            };
            
            const action_0 = {type: '[Sign In page] User Got Code'};
            const action_1 = {type: '[SITE] Got Notification', payload};

            return of(action_0, action_1).pipe(
              concatMap((curA: Action) => of(curA))
            );
          }),
          catchError((response: HttpErrorResponse) => {
            const payload = {
              message: response.error.message,
              typeNotification: 'DANGER' as TypeNotification
            };

            return of({ type: '[SITE] Got Notification', payload });
          })
        )
      })
    );
  },
  { functional: true }
);

export const userSingInEffect = createEffect(
  (
    actions$ = inject(Actions),
    httClient = inject(HttpClient),
    router = inject(Router)
  ) => {
    return actions$.pipe(
      ofType('[Sign In page] User Sign In'),
      exhaustMap((args: {email: string, code: string}) => {
        return httClient.put<unknown>('/api/v1/token/', {
          email: args.email,
          code: parseInt(args.code)
        }).pipe(
          map(() => {
            router.navigate(['work-space']);
            
            return ({type: '[Sign In page] User Authenticated'});
          }),
          catchError((response: HttpErrorResponse) => {
            const payload = {
              message: response.error.message,
              typeNotification: 'DANGER' as TypeNotification
            };

            return of({ type: '[SITE] Got Notification', payload });
          })
        )
      })
    );
  },
  { functional: true }
);