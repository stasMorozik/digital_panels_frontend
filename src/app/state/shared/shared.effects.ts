import { of, delay } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AppAction } from '../app.types';
import { TypeNotification } from './shared.types';

export const showNotificationEffect = createEffect(
  (
    actions$ = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType('[SITE] Got Notification'),
      switchMap((a: Action) => {
        const payload = (
          (a as Action as AppAction<{message: string, typeNotification: TypeNotification}>
        ).payload);
        
        const action_0 = {type: '[SITE] Show Notification', payload};
        const action_1 = {type: '[SITE] Hiding Notification'};
        const action_2 = {type: '[SITE] Hide Notification'};

        return of(action_0, action_1, action_2).pipe(
          concatMap((curA: Action) => 
            of(curA).pipe(
              delay(curA.type == '[SITE] Show Notification' ? 0 : 6000)
            )
          )
        );
      })
    );
  },
  { functional: true }
);