import { of, delay, withLatestFrom, first } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, concatMap, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { AppAction, AppError } from '../app.state';
import { errorObjectSelector } from './shared.selectors';

export const showErrorEffect = createEffect(
  (
    actions$ = inject(Actions),
    stroe$ = inject(Store)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Got Error'),
      switchMap((action: Action) => {
        return stroe$.select(errorObjectSelector).pipe(
          first(),
          switchMap((e: AppError) => {
            console.log(e);
            const message = ((action as Action as AppAction<{message: string}>).payload.message);
        
            const action_0 = {type: '[SITE] Show Error', payload: {message}};
            const action_1 = {type: '[SITE] Hiding Error'};
            const action_2 = {type: '[SITE] Hide Error'};
            

            return of(action_0, action_1, action_2).pipe(
              concatMap((cur_action: Action) => {
                console.log(e);
                console.log(cur_action);

                return of(cur_action).pipe(
                  delay(cur_action.type == '[SITE] Show Error' ? 0 : 5000)
                );
              })
            );
          })
        )
      })
    );
  },
  { functional: true }
);