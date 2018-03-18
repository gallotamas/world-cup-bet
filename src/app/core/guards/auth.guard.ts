import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.CoreState>
  ) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromStore.getAuthCompleted).pipe(
      tap(completed => {
        if (!completed) {
          this.store.dispatch(new fromStore.Go({ path: ['login'] }));
        }
      })
    );
  }
}
