import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMatches from './matches.reducer';
import * as fromTeams from './teams.reducer';
import * as fromStages from './stages.reducer';

export interface BettingState {
    matches: fromMatches.MatchesState;
    teams: fromTeams.TeamsState;
    stages: fromStages.StagesState;
}

export const reducers: ActionReducerMap<BettingState> = {
    matches: fromMatches.reducer,
    teams: fromTeams.reducer,
    stages: fromStages.reducer,
};

export const getBettingState = createFeatureSelector<BettingState>(
    'betting'
);
