import * as fromMatches from '../actions/matches.action';
import { Match } from '../../models/match.model';

export interface MatchesState {
    entities: { [id: number]: Match };
    loaded: boolean;
    loading: boolean;
}

export const initialState: MatchesState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromMatches.MatchesAction): MatchesState {
    switch (action.type) {
        case fromMatches.LOAD_MATCHES: {
            return { ...state, loading: true };
        }

        case fromMatches.LOAD_MATCHES_SUCCESS: {
            const matches = action.payload;

            const entities = matches.reduce(
                (items: { [id: number]: Match }, match: Match) => {
                    return { ...items, [match.id]: match };
                },
                { ...state.entities }
            );

            return { ...state, loading: false, loaded: true, entities };
        }

        case fromMatches.LOAD_MATCHES_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }

    return state;
}

export const getMatchesEntities = (state: MatchesState) => state.entities;
export const getMatchesLoading = (state: MatchesState) => state.loading;
export const getMatchesLoaded = (state: MatchesState) => state.loaded;
