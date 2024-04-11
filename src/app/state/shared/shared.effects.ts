import { of, delay } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AppAction } from '../app.state';

export const showErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Got Error'),
      exhaustMap((action: Action) => {
        const message = ((action as Action as AppAction<{message: string}>).payload.message);

        return of({type: '[SITE] Show Error', payload: {message}});
      })
    );
  },
  { functional: true }
);

export const hideErrorEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Show Error'),
      delay(2500),
      exhaustMap(() => {
        return of({type: '[SITE] Hide Error'});
      })
    );
  },
  { functional: true }
);