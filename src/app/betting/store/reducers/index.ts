import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMatches from './matches.reducer';

export interface BettingState {
    matches: fromMatches.MatchesState;
}

export const reducers: ActionReducerMap<BettingState> = {
    matches: fromMatches.reducer,
};

export const getBettingState = createFeatureSelector<BettingState>(
    'betting'
);
