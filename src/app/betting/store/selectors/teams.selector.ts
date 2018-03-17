import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromTeams from '../reducers/teams.reducer';

export const getTeamsState = createSelector(
    fromFeature.getBettingState,
    (state: fromFeature.BettingState) => state.teams
);

export const getTeamsEntities = createSelector(
    getTeamsState,
    fromTeams.getTeamsEntities
);

export const getAllTeams = createSelector(getTeamsEntities, entities => {
    return Object.keys(entities).map(id => entities[id]);
});

export const getTeamsLoaded = createSelector(
    getTeamsState,
    fromTeams.getTeamsLoaded
);
export const getTeamsLoading = createSelector(
    getTeamsState,
    fromTeams.getTeamsLoading
);
