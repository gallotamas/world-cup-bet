import { Injectable } from '@angular/core';

import { Store, Action, MemoizedSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take } from 'rxjs/operators';

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
