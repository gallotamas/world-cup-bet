import { Action } from '@ngrx/store';

import { Team } from '../../models/team.model';

// load teams
export const LOAD_TEAMS = '[Teams] Load Teams';
export const LOAD_TEAMS_FAIL = '[Teams] Load Teams Fail';
export const LOAD_TEAMS_SUCCESS = '[Teams] Load Teams Success';

export class LoadTeams implements Action {
    readonly type = LOAD_TEAMS;
}

export class LoadTeamsFail implements Action {
    readonly type = LOAD_TEAMS_FAIL;
    constructor(public payload: any) { }
}

export class LoadTeamsSuccess implements Action {
    readonly type = LOAD_TEAMS_SUCCESS;
    constructor(public payload: Team[]) { }
}

// action types
export type TeamsAction =
    | LoadTeams
    | LoadTeamsFail
    | LoadTeamsSuccess;
