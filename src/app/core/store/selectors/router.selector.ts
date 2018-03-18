import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromRouter from '../reducers/router.reducer';

export const getNgrxRouterState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.router
);

export const getRouterState = createSelector(
  getNgrxRouterState,
  fromRouter.getRouterState
);
