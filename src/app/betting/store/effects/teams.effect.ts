import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as teamsActions from '../actions/teams.action';
import * as fromServices from '../../services';

@Injectable()
export class TeamsEffects {
  constructor(
    private actions$: Actions,
    private teamsService: fromServices.TeamsService
  ) {}

  @Effect()
  loadTeams$ = this.actions$.ofType(teamsActions.LOAD_TEAMS).pipe(
    switchMap(() => {
      return this.teamsService
        .getTeams()
        .pipe(
          map(teams => new teamsActions.LoadTeamsSuccess(teams)),
          catchError(error => of(new teamsActions.LoadTeamsFail(error)))
        );
    })
  );
}
