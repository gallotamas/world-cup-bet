import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, take, map, switchMap, catchError } from 'rxjs/operators';

import * as betsActions from '../actions/bets.action';
import * as fromServices from '../../services';

@Injectable()
export class BetsEffects {
  constructor(
    private actions$: Actions,
    private betsService: fromServices.BetsService
  ) { }

  @Effect()
  loadMyBets$ = this.actions$.ofType(betsActions.LOAD_MY_BETS).pipe(
    switchMap(() => {
      return this.betsService
        .getMyBets()
        .pipe(
          map(bets => new betsActions.LoadMyBetsSuccess(bets)),
          catchError(error => of(new betsActions.LoadMyBetsFail(error)))
        );
      })
    );

  @Effect({ dispatch: false })
  updateBet$ = this.actions$.ofType(betsActions.UPDATE_BET).pipe(
    tap((action: betsActions.UpdateBet) => {
      this.betsService
      .updateMyBet(action.matchId, action.payload)
        .pipe(take(1)).subscribe(() => {});
    })
  );
}
