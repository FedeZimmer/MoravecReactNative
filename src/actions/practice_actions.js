import {PracticeMode} from "./practice/PracticeMode";

export const START_PRACTICE = 'START_PRACTICE';
export const START_PRACTICE_MODE = 'START_PRACTICE_MODE';
export const NEW_TRIAL_PRACTICE = 'NEW_TRIAL_PRACTICE';
export const CALCULATOR_TYPE_INPUT_PRACTICE = 'CALCULATOR_TYPE_INPUT_PRACTICE';
export const CALCULATOR_ERASE_INPUT_PRACTICE = 'CALCULATOR_ERASE_INPUT_PRACTICE';
export const SUBMIT_TRIAL_PRACTICE = 'SUBMIT_TRIAL_PRACTICE';

function createRandomOperationForPracticeMode(practiceMode) {
    let operation = practiceMode.createRandomOperation();

    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        operation: operation.operationHumanRepresentation(),
        correctResult: operation.result(),
        maxSolveTime: operation.maxSolveTime(),
        hint: operation.hint(),
    }
}

export function startPractice() {
    return {
        type: START_PRACTICE,
    }
}

export function startPracticeMode(category, difficulty) {
    return (dispatch, getState) => {
        const practiceMode = new PracticeMode(category, difficulty);
        dispatch({
            type: START_PRACTICE_MODE,
            practiceMode: practiceMode,
            operation: createRandomOperationForPracticeMode(practiceMode),
            startTime: new Date().getTime()
        })
    }
}

function newTrial() {
    return (dispatch, getState) => {
        const practiceMode = getState().practice.currentPracticeMode;
        dispatch({
            type: NEW_TRIAL_PRACTICE,
            operation: createRandomOperationForPracticeMode(practiceMode),
            startTime: new Date().getTime(),
        });
    }
}

export function typeInput(newUserInput) {
    return {
        type: CALCULATOR_TYPE_INPUT_PRACTICE,
        newUserInput: newUserInput,
        inputTime: new Date().getTime(),
    }
}

export function eraseInput() {
    return {
        type: CALCULATOR_ERASE_INPUT_PRACTICE,
        inputTime: new Date().getTime(),
    }
}

export function submitTrial() {
    return (dispatch, getState) => {
        dispatch({
            type: SUBMIT_TRIAL_PRACTICE,
            submitTime: new Date().getTime(),
        });

        dispatch(newTrial());
    }
}
