import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromBets from '../reducers/bets.reducer';

export const getMyBetsState = createSelector(
  fromFeature.getBettingState,
  (state: fromFeature.BettingState) => state.myBets
);

export const getMyBetsEntities = createSelector(
  getMyBetsState,
  fromBets.getMyBetsEntities
);

export const getMyBets = createSelector(getMyBetsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getMyBetsLoaded = createSelector(
  getMyBetsState,
  fromBets.getMyBetsLoaded
);
export const getMyBetsLoading = createSelector(
  getMyBetsState,
  fromBets.getMyBetsLoading
);
