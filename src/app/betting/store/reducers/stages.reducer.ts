import * as fromStages from '../actions/stages.action';
import { Stage } from '../../models/stage.model';

export interface StagesState {
    entities: { [id: string]: Stage };
    loaded: boolean;
    loading: boolean;
}

export const initialState: StagesState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromStages.StagesAction): StagesState {
    switch (action.type) {
        case fromStages.LOAD_STAGES: {
            return { ...state, loading: true };
        }

        case fromStages.LOAD_STAGES_SUCCESS: {
            const stages = action.payload;

            const entities = stages.reduce(
                (items: { [id: number]: Stage }, stage: Stage) => {
                    return { ...items, [stage.id]: stage };
                },
                { ...state.entities }
            );

            return { ...state, loading: false, loaded: true, entities };
        }

        case fromStages.LOAD_STAGES_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }

    return state;
}

export const getStagesEntities = (state: StagesState) => state.entities;
export const getStagesLoading = (state: StagesState) => state.loading;
export const getStagesLoaded = (state: StagesState) => state.loaded;
