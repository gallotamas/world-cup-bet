import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRouter from './router.reducer';
import * as fromAuth from './auth.reducer';

export import CustomSerializer = fromRouter.CustomSerializer;

export interface CoreState {
  router: fromRouter.RouterState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<CoreState> = {
  router: fromRouter.reducer,
  auth: fromAuth.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
