import { of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class UserAuthorizationEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly httClient: HttpClient
  ) {}

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[SITE] User Authorization'),
      exhaustMap(() => {
        return this.httClient.get<{name: string, email: string}>('/api/v1/user/', {}).pipe(
          map(
            (user: {name: string, email: string}) => ({ 
              type: '[SITE] User Authorized', 
              payload: {name: user.name, email: user.email} 
            })
          ),
          catchError(() => of({ type: '[SITE] User Not Authorized' }))
        )
      })
    )
  );
}