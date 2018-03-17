import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromStages from '../reducers/stages.reducer';

export const getStagesState = createSelector(
    fromFeature.getBettingState,
    (state: fromFeature.BettingState) => state.stages
);

export const getStagesEntities = createSelector(
    getStagesState,
    fromStages.getStagesEntities
);

export const getAllStages = createSelector(getStagesEntities, entities => {
    return Object.keys(entities).map(id => entities[id]);
});

export const getStagesLoaded = createSelector(
    getStagesState,
    fromStages.getStagesLoaded
);
export const getStagesLoading = createSelector(
    getStagesState,
    fromStages.getStagesLoading
);
