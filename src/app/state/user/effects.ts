import { of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
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
          map(
            (user: {name: string, email: string}) => ({ 
              type: '[SITE] User Authorized', 
              payload: {name: user.name, email: user.email} 
            })
          ),
          catchError(() => of({ type: '[SITE] User Not Authorized' }))
        )
      )
    );
  },
  { functional: true }
);