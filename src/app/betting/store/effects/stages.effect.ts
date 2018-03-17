import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as stagesActions from '../actions/stages.action';
import * as fromServices from '../../services';

@Injectable()
export class StagesEffects {
  constructor(
    private actions$: Actions,
    private stagesService: fromServices.StagesService
  ) {}

  @Effect()
  loadStages$ = this.actions$.ofType(stagesActions.LOAD_STAGES).pipe(
    switchMap(() => {
      return this.stagesService
        .getStages()
        .pipe(
          map(stages => new stagesActions.LoadStagesSuccess(stages)),
          catchError(error => of(new stagesActions.LoadStagesFail(error)))
        );
    })
  );
}
