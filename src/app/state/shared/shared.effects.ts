import { of, delay, withLatestFrom, first } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, concatMap, switchMap, filter } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { AppAction, AppError } from '../app.state';
import { errorObjectSelector } from './shared.selectors';

export const showErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Got Error'),
      switchMap((action: Action) => {
        const message = ((action as Action as AppAction<{message: string}>).payload.message);

        return of({type: '[SITE] Show Error', payload: {message}});
      })
    );
  },
  { functional: true }
);

export const hidingErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Show Error'),
      // delay(5000),
      exhaustMap(() => of({type: '[SITE] Hiding Error'})),
    );
  },
  { functional: true }
);

export const hideErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Hiding Error'),
      // delay(5000),
      exhaustMap(() => of({type: '[SITE] Hide Error'})),
    );
  },
  { functional: true }
);