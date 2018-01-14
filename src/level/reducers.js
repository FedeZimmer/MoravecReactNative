import {SUBMIT_TRIAL} from '../calculator/actions'
import {START_LEVEL, FINISH_LEVEL} from './actions'


const initialState = {
    level: 1,
    trials: [],
    levelFinished: false,
    totalTrials: 5,
    totalCorrect: 0,
    efficacy: 0,
    maxTimeForCountdownInMs: 8000,
};


export function levelReducer(state = initialState, action) {
    switch (action.type) {
        case START_LEVEL:
            return {
                ...state,
                trials: [],
                levelFinished: false,
                level: action.level,
                totalTrials: 2,
                totalCorrect: 0,
                efficacy: 0,
            };

        case SUBMIT_TRIAL:
            return {
                ...state,
                trials: state.trials.concat(action.trial),
                totalCorrect: action.trial.input === action.trial.operation.result
                    ? state.totalCorrect + 1
                    : state.totalCorrect
            };

        case FINISH_LEVEL:
            return {
                ...state,
                levelFinished: true,
                efficacy: (state.totalCorrect / state.totalTrials) * 100
            };

        default:
            return state
    }
}
