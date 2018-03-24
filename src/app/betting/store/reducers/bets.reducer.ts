import * as fromBets from '../actions/bets.action';
import { Bet } from '../../models/bet.model';

export interface MyBetsState {
  entities: { [matchId: number]: Bet };
  loaded: boolean;
  loading: boolean;
}

export const initialState: MyBetsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromBets.BetsAction): MyBetsState {
  switch (action.type) {
    case fromBets.LOAD_MY_BETS: {
      return { ...state, loading: true };
    }

    case fromBets.LOAD_MY_BETS_SUCCESS: {
      const bets = action.payload;

      const entities = bets.reduce(
        (items: { [id: number]: Bet }, bet: Bet, matchId: number) => {
          return { ...items, [matchId]: bet };
        },
        { ...state.entities }
      );

      return { ...state, loading: false, loaded: true, entities };
    }

    case fromBets.LOAD_MY_BETS_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
  }

  return state;
}

export const getMyBetsEntities = (state: MyBetsState) => state.entities;
export const getMyBetsLoading = (state: MyBetsState) => state.loading;
export const getMyBetsLoaded = (state: MyBetsState) => state.loaded;
