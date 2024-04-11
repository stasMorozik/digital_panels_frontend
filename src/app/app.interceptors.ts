import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandlerFn, HttpResponse } from "@angular/common/http";
import { ajax } from 'rxjs/ajax';
import { userNotAuthorizationAction } from './state/user/user.actions';

export const refreshTokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const store = inject(Store);
  
  return next(req).pipe(
    catchError((error: HttpResponse<unknown>) => {
      if (error.status == 401) {
        return ajax({url: '/api/v1/token/', method: 'POST'}).pipe(
          switchMap(() => {
            return next(req.clone()); 
          }),
          catchError(() => {
            store.dispatch(userNotAuthorizationAction());
            
            return throwError(error); 
          })
        )
      }

      return throwError(error);
    })
  );
}