import { Action } from '@ngrx/store';

import { Stage } from '../../models/stage.model';

// load stages
export const LOAD_STAGES = '[Stages] Load Stages';
export const LOAD_STAGES_FAIL = '[Stages] Load Stages Fail';
export const LOAD_STAGES_SUCCESS = '[Stages] Load Stages Success';

export class LoadStages implements Action {
    readonly type = LOAD_STAGES;
}

export class LoadStagesFail implements Action {
    readonly type = LOAD_STAGES_FAIL;
    constructor(public payload: any) { }
}

export class LoadStagesSuccess implements Action {
    readonly type = LOAD_STAGES_SUCCESS;
    constructor(public payload: Stage[]) { }
}

// action types
export type StagesAction =
    | LoadStages
    | LoadStagesFail
    | LoadStagesSuccess;
