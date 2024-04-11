import { map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userAuthorizationAction } from './state/user/user.actions';
import { userIsAuthorizationSelector } from './state/user/user.selectors';
import { ActivatedRouteSnapshot, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { Approval } from './state/app.state';

export const guardNotAuthorizedPage = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  inject(Store).dispatch(userAuthorizationAction());
  
  return inject(Store).select(userIsAuthorizationSelector).pipe(
    map((isAuth: Approval) => {
      return isAuth == 'YES' ? createUrlTreeFromSnapshot(route, ['/work-space/playlist']) : true
    })
  );
}

export const guardAuthorizedPage = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  inject(Store).dispatch(userAuthorizationAction());

  return inject(Store).select(userIsAuthorizationSelector).pipe(
    map((isAuth: Approval) => {
      return isAuth == 'YES' ? true : createUrlTreeFromSnapshot(route, ['/sign/in'])
    })
  );
}