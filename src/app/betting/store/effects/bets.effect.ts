import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as betsActions from '../actions/bets.action';
import * as fromServices from '../../services';
import { CoreState } from '../../../core/store/reducers';
import { getAuthState } from '../../../core/store/selectors';

@Injectable()
export class BetsEffects {
  constructor(
    private actions$: Actions,
    private betsService: fromServices.BetsService,
    private store: Store<CoreState>
  ) { }

  @Effect()
  loadMyBets$ = this.actions$.ofType(betsActions.LOAD_MY_BETS).pipe(
    switchMap(() => {
      return this.store.select(getAuthState)
        .pipe(
          switchMap((authState) => {
            return this.betsService
              .getMyBets(authState.user.uid)
              .pipe(
                map(bets => new betsActions.LoadMyBetsSuccess(bets)),
                catchError(error => of(new betsActions.LoadMyBetsFail(error)))
              );
          })
        );
    })
  );
}
