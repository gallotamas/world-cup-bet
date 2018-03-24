import { Action } from '@ngrx/store';

import { Bet } from '../../models/bet.model';

// load bets
export const LOAD_MY_BETS = '[Bets] Load My Bets';
export const LOAD_MY_BETS_FAIL = '[Matches] Load My Bets Fail';
export const LOAD_MY_BETS_SUCCESS = '[Matches] Load My Bets Success';
export const UPDATE_BET = '[Bets] Update Bet';

export class LoadMyBets implements Action {
  readonly type = LOAD_MY_BETS;
}

export class LoadMyBetsFail implements Action {
  readonly type = LOAD_MY_BETS_FAIL;
  constructor(public payload: any) { }
}

export class LoadMyBetsSuccess implements Action {
  readonly type = LOAD_MY_BETS_SUCCESS;
  constructor(public payload: Bet[]) { }
}

export class UpdateBet implements Action {
  readonly type = UPDATE_BET;
  constructor(public matchId: number, public payload: Bet) { }
}

// action types
export type BetsAction =
  | LoadMyBets
  | LoadMyBetsFail
  | LoadMyBetsSuccess
  | UpdateBet;
