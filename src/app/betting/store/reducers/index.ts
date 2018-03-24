import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMatches from './matches.reducer';
import * as fromTeams from './teams.reducer';
import * as fromStages from './stages.reducer';
import * as fromBets from './bets.reducer';

export interface BettingState {
    matches: fromMatches.MatchesState;
    teams: fromTeams.TeamsState;
    stages: fromStages.StagesState;
    myBets: fromBets.MyBetsState;
}

export const reducers: ActionReducerMap<BettingState> = {
    matches: fromMatches.reducer,
    teams: fromTeams.reducer,
    stages: fromStages.reducer,
    myBets: fromBets.reducer
};

export const getBettingState = createFeatureSelector<BettingState>(
    'betting'
);
