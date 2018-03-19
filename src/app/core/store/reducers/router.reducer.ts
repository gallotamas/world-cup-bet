import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export import RouterState = fromRouter.RouterReducerState;

export const reducer = fromRouter.routerReducer;

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}

export const getRouterState = (routerState: RouterState<RouterStateUrl>) => routerState.state;
