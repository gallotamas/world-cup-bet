import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as matchesActions from '../actions/matches.action';
import * as fromServices from '../../services';

@Injectable()
export class MatchesEffects {
  constructor(
    private actions$: Actions,
    private matchesService: fromServices.MatchesService
  ) {}

  @Effect()
  loadMatches$ = this.actions$.ofType(matchesActions.LOAD_MATCHES).pipe(
    switchMap(() => {
      return this.matchesService
        .getMatches()
        .pipe(
          map(matches => new matchesActions.LoadMatchesSuccess(matches)),
          catchError(error => of(new matchesActions.LoadMatchesFail(error)))
        );
    })
  );
}
