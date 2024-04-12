import { of, delay } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AppAction } from '../app.state';

export const showErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Got Error'),
      switchMap((a: Action) => {
        const message = ((a as Action as AppAction<{message: string}>).payload.message);
        
        const action_0 = {type: '[SITE] Show Error', payload: {message}};
        const action_1 = {type: '[SITE] Hiding Error'};
        const action_2 = {type: '[SITE] Hide Error'};

        return of(action_0, action_1, action_2).pipe(
          concatMap((curA: Action) => {
            return of(curA).pipe(
              delay(curA.type == '[SITE] Show Error' ? 0 : 3000)
            );
          })
        );
      })
    );
  },
  { functional: true }
);