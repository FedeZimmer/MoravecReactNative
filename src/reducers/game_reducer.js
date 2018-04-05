import {
    CALCULATOR_ERASE_INPUT,
    CALCULATOR_TYPE_INPUT,
    NEW_TRIAL,
    RECEIVE_PLAYED_LEVELS_INFO,
    START_GAME,
    START_LEVEL,
    SUBMIT_TRIAL
} from '../actions/game_actions'


export const LEVEL_SELECTION = 'LEVEL_SELECTION';
export const PLAYING = 'PLAYING';
export const LEVEL_FINISHED = 'LEVEL_FINISHED';

const ERASE_KEY_CODE = -1;
const ENTER_KEY_CODE = 20;

const initialState = {
    state: LEVEL_SELECTION,
    levelsPlayedInfo: {},
    currentLevel: undefined,
    currentTrial: undefined,
    lastAnswerData: undefined,
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

function calculateTotalLevelTime(totalTimeUntilNow, currentTrialStartTime, currentTrialSubmitTime) {
    return totalTimeUntilNow + calculateTotalTrialTime(currentTrialStartTime, currentTrialSubmitTime);
}

function calculateTotalTrialTime(trialStartTime, trialSubmitTime) {
    return trialSubmitTime - trialStartTime;
}

function playingOrLevelFinishedState(allPreviousTrials, totalTrials) {
    if (allPreviousTrials.length + 1 === totalTrials) {
        return LEVEL_FINISHED;
    } else {
        return PLAYING;
    }
}

function getNewTrialNumber(trials) {
    return trials.length + 1;
}

function isAnswerCorrect(correctResult, currentUserInput) {
    return correctResult === currentUserInput;
}

function hasExceededMaxSolveTime(trialStartTime, trialSubmitTime, operationMaxSolveTime) {
    return calculateTotalTrialTime(trialStartTime, trialSubmitTime) > operationMaxSolveTime;
}

function newTrialData(trials, levelNumber, operation, startTime) {
    return {
        trialNumber: getNewTrialNumber(trials),
        levelNumber: levelNumber,
        currentUserInput: null,
        operation: operation,
        startTime: startTime,
        keysPressed: [],
        responseTimes: [],
        hasErased: false,
        timeExceeded: false,
    }
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            return initialState;

        case RECEIVE_PLAYED_LEVELS_INFO:
            return {
                ...state,
                levelsPlayedInfo: action.levelsPlayedInfo,
            };

        case NEW_TRIAL:
            return {
                ...state,
                currentTrial: newTrialData(state.currentLevel.trials, state.currentLevel.number,
                    action.operation, action.startTime)
            };

        case CALCULATOR_TYPE_INPUT:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: appendNewUserInput(state.currentTrial.currentUserInput, action.newUserInput),
                    keysPressed: state.currentTrial.keysPressed.concat(action.newUserInput),
                    responseTimes: state.currentTrial.responseTimes.concat(action.inputTime),
                }
            };

        case CALCULATOR_ERASE_INPUT:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: removeLastNumberEntered(state.currentTrial.currentUserInput),
                    keysPressed: state.currentTrial.keysPressed.concat(ERASE_KEY_CODE),
                    responseTimes: state.currentTrial.responseTimes.concat(action.inputTime),
                    hasErased: true,
                }
            };

        case START_LEVEL:
            return {
                ...state,
                state: PLAYING,
                currentLevel: {
                    number: action.levelNumber,
                    trials: [],
                    totalTrials: 20,
                    totalCorrect: 0,
                    totalTrialsTime: 0,
                    efficacy: calculateEfficacy(state.totalCorrect, state.totalTrials),
                },
                currentTrial: newTrialData([], action.levelNumber,
                    action.operation, action.startTime)
            };

        case SUBMIT_TRIAL:
            return {
                ...state,
                state: playingOrLevelFinishedState(state.currentLevel.trials, state.currentLevel.totalTrials),
                currentLevel: {
                    ...state.currentLevel,
                    trials: state.currentLevel.trials.concat({
                        ...state.currentTrial,
                        keysPressed: state.currentTrial.keysPressed.concat(ENTER_KEY_CODE),
                        responseTimes: state.currentTrial.responseTimes.concat(action.submitTime),
                        submitTime: action.submitTime,
                        totalTime: calculateTotalTrialTime(state.currentTrial.startTime, action.submitTime),
                        timeExceeded: hasExceededMaxSolveTime(state.currentTrial.startTime, action.submitTime,
                            state.currentTrial.operation.maxSolveTime),
                        isCorrect: isAnswerCorrect(state.currentTrial.operation.correctResult,
                            state.currentTrial.currentUserInput)
                    }),
                    totalCorrect: updateTotalCorrect(state.currentTrial.currentUserInput,
                        state.currentTrial.operation.correctResult,
                        state.currentLevel.totalCorrect),
                    totalTrialsTime: calculateTotalLevelTime(state.currentLevel.totalTrialsTime,
                        state.currentTrial.startTime,
                        action.submitTime),
                    efficacy: calculateEfficacy(state.currentLevel.totalCorrect, state.currentLevel.totalTrials),
                },
                lastAnswerData: {
                    userInput: state.currentTrial.currentUserInput,
                    correctResult: state.currentTrial.operation.correctResult,
                    isCorrect: isAnswerCorrect(state.currentTrial.operation.correctResult,
                        state.currentTrial.currentUserInput),
                }
            };

        default:
            return state
    }
}