import { of, delay } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, switchMap, concatMap, map } from 'rxjs/operators';
import { TypeNotification } from '../shared/shared.types';

export const fileListLoadEffect = createEffect(
  (
    actions$ = inject(Actions),
    httClient = inject(HttpClient),
    store$ = inject(Store)
  ) => {
    return actions$.pipe(
      ofType('[Work Space Files] Files Load'),
      map((args) => {
        return {
          ...args,
          'pagi[page]': args.pagi.page,
          'pagi[limit]': args.pagi.limit
        }
      }),
      map((args) => {
        const keys = [
          'type', 'url', 'extension', 'size', 'created_f', 'created_t'
        ];

        keys.forEach(k => {
          if (args.filter[k]) {
            args = {
              ...args,
              [`filter[${k}]`]: args.filter[k]
            }
          }
        });

        return args;
      }),
      map((args) => {
        const keys = [
          'type', 'size', 'created'
        ];

        keys.forEach(k => {
          if (args.sort[k]) {
            args = {
              ...args,
              [`sort[${k}]`]: args.sort[k]
            }
          }
        });

        return args;
      }),
      map((args) => {
        delete args.pagi;
        delete args.filter;
        delete args.sort;
        delete args.type;

        return args;
      }),
      switchMap((args) => {
        store$.dispatch({type: '[WORK SPACE] Loading Data'});

        return httClient.get<File[]>('/api/v1/file/', {
          params: args
        }).pipe(
          switchMap((files: File[]) => {
            const action_0 = {type: '[WORK SPACE] Loaded Data', payload: {data: files}};

            return of(action_0).pipe(
              delay(500)
            );
          }),
          catchError((response: HttpErrorResponse) => {
            const payload = {
              message: response.error.message,
              typeNotification: 'DANGER' as TypeNotification
            };


            return of(
              { type: '[SITE] Got Notification', payload }, 
              {type: '[WORK SPACE] Dropped Loading Data'}
            ).pipe(
              concatMap(curA => of(curA).pipe(delay(500)))
            );
          })
        )
      })
    );
  },
  { functional: true }
);