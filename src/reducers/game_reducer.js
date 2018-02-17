import {
    CALCULATOR_ERASE_INPUT,
    CALCULATOR_TYPE_INPUT,
    HIDE_FEEDBACK,
    SHOW_LEVEL_RESUME,
    NEW_TRIAL,
    SHOW_FEEDBACK, START_GAME,
    START_LEVEL,
    SUBMIT_TRIAL, RECEIVE_PLAYED_LEVELS_INFO
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
        startTime: null
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
    level: null,
    levels: {},
    trials: [],
    levelFinished: null,
    totalTrials: 20,
    totalCorrect: 0,
    efficacy: 0,
    maxTimeForCountdownInMs: 30000,
};

const MAX_NUMBER_OF_DIGITS = 8;

function appendNewUserInput(currentInput, newInput) {
    if (!currentInput) {
        return newInput;
    }

    const exceedsMaxNumberOfDigits = currentInput.toString().length >= MAX_NUMBER_OF_DIGITS;
    if (exceedsMaxNumberOfDigits) {
        return currentInput;
    } else {
        return Number('' + currentInput + newInput);
    }
}

function removeLastNumberEntered(currentInput) {
    return Number(String(currentInput).slice(0, -1));
}

function updateTotalCorrect(currentInput, operationResult, previousTotalCorrectValue) {
    return currentInput === operationResult
        ? previousTotalCorrectValue + 1
        : previousTotalCorrectValue;
}

function calculateEfficacy(totalCorrect, totalTrials) {
    return (totalCorrect / totalTrials) * 100;
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            return initialState;

        case NEW_TRIAL:
            return {
                ...state,
                trial: action.trial,
            };

        case CALCULATOR_TYPE_INPUT:
            return {
                ...state,
                trial: {
                    ...state.trial,
                    input: appendNewUserInput(state.trial.input, action.input)
                }
            };

        case CALCULATOR_ERASE_INPUT:
            return {
                ...state,
                trial: {
                    ...state.trial,
                    input: removeLastNumberEntered(state.trial.input)
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
                trials: state.trials.concat({
                    ...state.trial,
                    submitTime: action.submitTime,
                }),
                totalCorrect: updateTotalCorrect(state.trial.input, state.trial.operation.result, state.totalCorrect)
            };

        case SHOW_LEVEL_RESUME:
            return {
                ...state,
                levelFinished: true,
                efficacy: calculateEfficacy(state.totalCorrect, state.totalTrials)
            };

        case RECEIVE_PLAYED_LEVELS_INFO:
            return {
                ...state,
                levels: action.levels,
            };

        default:
            return state
    }
}