import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMatches from './matches.reducer';
import * as fromTeams from './teams.reducer';

export interface BettingState {
    matches: fromMatches.MatchesState;
    teams: fromTeams.TeamsState;
}

export const reducers: ActionReducerMap<BettingState> = {
    matches: fromMatches.reducer,
    teams: fromTeams.reducer
};

export const getBettingState = createFeatureSelector<BettingState>(
    'betting'
);
