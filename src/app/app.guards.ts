import { map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userAuthorizationAction } from './state/user/user.actions';
import { userIsAuthSelector } from './state/user/user.selectors';
import { ActivatedRouteSnapshot, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';

export const authGuard = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  inject(Store).dispatch(userAuthorizationAction());
  
  return inject(Store).select(userIsAuthSelector).pipe(
    map((isAuth: boolean) => {
      return isAuth ? createUrlTreeFromSnapshot(route, ['/work-space/playlist']) : true
    })
  );
}