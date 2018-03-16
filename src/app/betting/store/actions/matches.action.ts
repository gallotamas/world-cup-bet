import { Action } from '@ngrx/store';

import { Match } from '../../models/match.model';

// load matches
export const LOAD_MATCHES = '[Matches] Load Matches';
export const LOAD_MATCHES_FAIL = '[Matches] Load Matches Fail';
export const LOAD_MATCHES_SUCCESS = '[Matches] Load Matches Success';

export class LoadMatches implements Action {
    readonly type = LOAD_MATCHES;
}

export class LoadMatchesFail implements Action {
    readonly type = LOAD_MATCHES_FAIL;
    constructor(public payload: any) { }
}

export class LoadMatchesSuccess implements Action {
    readonly type = LOAD_MATCHES_SUCCESS;
    constructor(public payload: Match[]) { }
}

// action types
export type MatchesAction =
    | LoadMatches
    | LoadMatchesFail
    | LoadMatchesSuccess;
