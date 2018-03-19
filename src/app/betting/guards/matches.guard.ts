import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';
import { GuardHelpers } from './guardHelpers';

@Injectable()
export class MatchesGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.BettingState>,
    private guardHelpers: GuardHelpers,
  ) {}

  canActivate(): Observable<boolean> {
    return this.guardHelpers.checkIfLoaded(this.store, fromStore.getMatchesLoaded, fromStore.LoadMatches)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
}
