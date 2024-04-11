import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandlerFn, HttpResponse } from "@angular/common/http";
import { ajax } from 'rxjs/ajax';
import { userAuthorizationAction } from './state/user/user.actions';

export const refreshTokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req).pipe(
    catchError((error: HttpResponse<unknown>) => {
      if (error.status == 401) {
        return ajax({url: '/api/v1/token/', method: 'POST'}).pipe(
          switchMap(() => {
            const newReq = req.clone();
            
            return next(newReq); 
          }),
          catchError((_: Error) => {
            inject(Store).dispatch(userAuthorizationAction());

            return throwError(error); 
          })
        )
      }

      return throwError(error);
    })
  );
}