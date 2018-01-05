import {CREATE_TRIAL, ARCADE_TYPE_INPUT, ARCADE_ERASE_INPUT, SHOW_FEEDBACK, HIDE_FEEDBACK} from './actions'

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
    }
};


export function calculatorReducer(state = initialState, action) {
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
                    input: state.trial.input
                        ? Number('' + state.trial.input + action.input)
                        : action.input
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
                feedback: {
                    visible: true,
                    input: action.trial.input,
                    result: action.trial.operation.result,
                }
            };

        case HIDE_FEEDBACK:
            return {
                ...state,
                feedback: {
                    visible: false,
                    result: null,
                    input: null,
                },
            };

        default:
            return state
    }
}