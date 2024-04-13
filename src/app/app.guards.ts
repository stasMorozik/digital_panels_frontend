import { map, filter } from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import { inject } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { userAuthorizationAction } from './state/user/user.actions';
import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  createUrlTreeFromSnapshot 
} from '@angular/router';

export const guardNotAuthorizedPage = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  const store$ = inject(Store);

  store$.dispatch(userAuthorizationAction());

  return inject(Actions).pipe(
    filter(
      (a: Action) => a.type == '[SITE] User Authorized' || a.type == '[SITE] User Not Authorized'
    ),
    map(
      (a: Action) => a.type == '[SITE] User Authorized' ? createUrlTreeFromSnapshot(route, ['/work-space/files']) : true
    )
  );
};

export const guardAuthorizedPage = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  const store$ = inject(Store);

  store$.dispatch(userAuthorizationAction());

  return inject(Actions).pipe(
    filter(
      (a: Action) => a.type == '[SITE] User Authorized' || a.type == '[SITE] User Not Authorized'
    ),
    map(
      (a: Action) => a.type == '[SITE] User Authorized' ? true : createUrlTreeFromSnapshot(route, ['/sign/in'])
    )
  );
};