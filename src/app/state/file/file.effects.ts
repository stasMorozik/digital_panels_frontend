import { of, delay } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, switchMap, concatMap } from 'rxjs/operators';
import { TypeNotification } from '../shared/shared.types';

export const fileListLoadEffect = createEffect(
  (
    actions$ = inject(Actions),
    httClient = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType('[Work Space Files] Files Load'),
      switchMap((args: {
        pagi: {
          page: number,
          limit: number
        },
        filter: {
          url?: string
        },
        sort: {
          created?: string
        }
      }) => {
        return httClient.get<File[]>('/api/v1/file/', {
          params: {
            'pagi[page]': args.pagi.page,
            'pagi[limit]': args.pagi.limit,
          }
        }).pipe(
          switchMap((files: File[]) => {
            const payload = {
              files: files
            };
            
            const action_0 = {type: '[Work Space Files] Files Loading'};
            const action_1 = {type: '[Work Space Files] Files Loaded', payload};

            return of(action_0, action_1).pipe(
              delay(2000),
              concatMap(
                (curA: Action) => of(curA)
              ),
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