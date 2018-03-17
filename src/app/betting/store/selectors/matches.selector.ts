import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMatches from '../reducers/matches.reducer';

export const getMatchesState = createSelector(
    fromFeature.getBettingState,
    (state: fromFeature.BettingState) => state.matches
);

export const getMatchesEntities = createSelector(
    getMatchesState,
    fromMatches.getMatchesEntities
);

export const getAllMatches = createSelector(getMatchesEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getMatchesLoaded = createSelector(
    getMatchesState,
    fromMatches.getMatchesLoaded
);
export const getMatchesLoading = createSelector(
    getMatchesState,
    fromMatches.getMatchesLoading
);
