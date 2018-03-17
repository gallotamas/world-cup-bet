import * as fromTeams from '../actions/teams.action';
import { Team } from '../../models/team.model';

export interface TeamsState {
    entities: { [id: string]: Team };
    loaded: boolean;
    loading: boolean;
}

export const initialState: TeamsState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromTeams.TeamsAction): TeamsState {
    switch (action.type) {
        case fromTeams.LOAD_TEAMS: {
            return { ...state, loading: true };
        }

        case fromTeams.LOAD_TEAMS_SUCCESS: {
            const teams = action.payload;

            const entities = teams.reduce(
                (items: { [id: number]: Team }, team: Team) => {
                    return { ...items, [team.id]: team };
                },
                { ...state.entities }
            );

            return { ...state, loading: false, loaded: true, entities };
        }

        case fromTeams.LOAD_TEAMS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }

    return state;
}

export const getTeamsEntities = (state: TeamsState) => state.entities;
export const getTeamsLoading = (state: TeamsState) => state.loading;
export const getTeamsLoaded = (state: TeamsState) => state.loaded;
