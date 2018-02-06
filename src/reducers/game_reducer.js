import {
    ARCADE_ERASE_INPUT,
    ARCADE_TYPE_INPUT,
    CREATE_TRIAL,
    SHOW_LEVEL_RESUME,
    HIDE_FEEDBACK,
    SHOW_FEEDBACK,
    START_LEVEL,
    SUBMIT_TRIAL
} from '../actions/game_actions'


const initialState = {
    trial: {
        input: null,
        operation: {
            operand1: null,
            operand2: null,
            operator: null,
            result: null,
        },
        time: null
    },
    feedback: {
        visible: false,
        input: null,
        result: null,
        duration: 3000
    },
    header: {
        visible: true,
    },
    level: 1,
    trials: [],
    levelFinished: true,
    totalTrials: 20,
    totalCorrect: 0,
    efficacy: 0,
    maxTimeForCountdownInMs: 30000,
};

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TRIAL:
            return {
                ...state,
                trial: action.trial,
            };

        case ARCADE_TYPE_INPUT:
            return {
                ...state,
                trial: {
                    ...state.trial,
                    input: action.updateUserInput(state.trial.input, action.input)
                }
            };

        case ARCADE_ERASE_INPUT:
            return {
                ...state,
                trial: {
                    ...state.trial,
                    input: Number(String(state.trial.input).slice(0, -1))
                }
            };

        case SHOW_FEEDBACK:
            return {
                ...state,
                header: {
                    visible: false,
                },
                feedback: {
                    visible: true,
                    input: state.trial.input,
                    result: state.trial.operation.result,
                    duration: initialState.feedback.duration,
                },
            };

        case HIDE_FEEDBACK:
            return {
                ...state,
                feedback: {
                    visible: false,
                    result: null,
                    input: null,
                    duration: initialState.feedback.duration,
                },
                header: {
                    visible: true,
                },
            };

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
                trials: state.trials.concat(action.submittedTrial(state.trial)),
                totalCorrect: state.trial.input === state.trial.operation.result
                    ? state.totalCorrect + 1
                    : state.totalCorrect
            };

        case SHOW_LEVEL_RESUME:
            return {
                ...state,
                levelFinished: true,
                efficacy: (state.totalCorrect / state.totalTrials) * 100
            };
        default:
            return state
    }
}