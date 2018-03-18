import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.auth
);

export const getUser = createSelector(
  getAuthState,
  fromAuth.getUser
);

export const getAuthCompleted = createSelector(
  getAuthState,
  fromAuth.getAuthCompleted
);
export const getAuthInProgress = createSelector(
  getAuthState,
  fromAuth.getAuthInProgress
);
