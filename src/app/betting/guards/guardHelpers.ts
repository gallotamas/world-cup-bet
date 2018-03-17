import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, Action, MemoizedSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class GuardHelpers {
  checkIfLoaded(store: Store<any>, selector: MemoizedSelector<object, boolean>, action: new () => Action): Observable<boolean> {
    return store.select(selector).pipe(
      tap(loaded => {
        if (!loaded) {
          store.dispatch(new action());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
