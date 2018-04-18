import {
    START_PRACTICE, START_PRACTICE_MODE, NEW_TRIAL_PRACTICE, CALCULATOR_TYPE_INPUT_PRACTICE,
    CALCULATOR_ERASE_INPUT_PRACTICE, SUBMIT_TRIAL_PRACTICE
} from '../actions/practice_actions'

export const PRACTICE_MODE_SELECTION = 'PRACTICE_MODE_SELECTION';
export const PRACTICING = 'PRACTICING';

const initialState = {
    state: PRACTICE_MODE_SELECTION,
    currentPracticeMode: undefined,
    currentTrial: undefined,
    lastAnswerData: undefined,
};

const MAX_NUMBER_OF_DIGITS = 8;

function newTrialData(operation, startTime) {
    return {
        currentUserInput: null,
        operation: operation,
        startTime: startTime,
    }
}

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

function isAnswerCorrect(correctResult, currentUserInput) {
    return correctResult === currentUserInput;
}

export function practiceReducer(state = initialState, action) {
    switch (action.type) {
        case START_PRACTICE:
            return {
                ...initialState,
            };
        case START_PRACTICE_MODE:
            return {
                ...state,
                state: PRACTICING,
                currentPracticeMode: action.practiceMode,
                currentTrial: newTrialData(action.operation, action.startTime)
            };
        case NEW_TRIAL_PRACTICE:
            return {
                ...state,
                currentTrial: newTrialData(action.operation, action.startTime)
            };

        case CALCULATOR_TYPE_INPUT_PRACTICE:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: appendNewUserInput(state.currentTrial.currentUserInput, action.newUserInput),
                }
            };

        case CALCULATOR_ERASE_INPUT_PRACTICE:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: removeLastNumberEntered(state.currentTrial.currentUserInput),
                }
            };

        case SUBMIT_TRIAL_PRACTICE:
            const isCorrect = isAnswerCorrect(state.currentTrial.operation.correctResult, state.currentTrial.currentUserInput);

            return {
                ...state,
                lastAnswerData: {
                    userInput: state.currentTrial.currentUserInput,
                    correctResult: state.currentTrial.operation.correctResult,
                    isCorrect: isCorrect,
                }
            };

        default:
            return state
    }
}