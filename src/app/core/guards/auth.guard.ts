import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { skipWhile, switchMap } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.CoreState>
  ) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromStore.getAuthState).pipe(
      skipWhile(authState => authState.inProgress),
      switchMap(authState =>
        this.store.select(fromStore.getRouterState).switchMap(router => {
          if (authState.user === null) {
            this.store.dispatch(new fromStore.Go({
              path: ['login'],
              query: { redirectUri: router.url }
            }));
          }
          return of(!!authState.user);
        })
      )
    );
  }
}
