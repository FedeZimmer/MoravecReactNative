import {SUBMIT_TRIAL} from '../actions/calculator_actions'
import {FINISH_LEVEL, START_LEVEL} from '../actions/level_actions'


const initialState = {
    level: 1,
    trials: [],
    levelFinished: true,
    totalTrials: 20,
    totalCorrect: 0,
    efficacy: 0,
    maxTimeForCountdownInMs: 30000,
};


export function levelReducer(state = initialState, action) {
    switch (action.type) {
        case START_LEVEL:
            return {
                ...state,
                trials: initialState.trials,
                levelFinished: false,
                level: action.level,
                totalTrials: initialState.totalTrials,
                totalCorrect: initialState.totalCorrect,
                efficacy: initialState.efficacy,
                maxTimeForCountdownInMs: initialState.maxTimeForCountdownInMs,
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
