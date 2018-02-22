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
    return totalTimeUntilNow + (currentTrialSubmitTime - currentTrialStartTime);
}

function playingOrLevelFinishedState(allPreviousTrials, totalTrials) {
    if (allPreviousTrials.length + 1 === totalTrials) {
        return LEVEL_FINISHED;
    } else {
        return PLAYING;
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
                currentTrial: {
                    currentUserInput: null,
                    operation: action.operation,
                    startTime: action.startTime,
                }
            };

        case CALCULATOR_TYPE_INPUT:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: appendNewUserInput(state.currentTrial.currentUserInput, action.newUserInput)
                }
            };

        case CALCULATOR_ERASE_INPUT:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    input: removeLastNumberEntered(state.currentTrial.currentUserInput)
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
                currentTrial: undefined,
            };

        case SUBMIT_TRIAL:
            return {
                ...state,
                state: playingOrLevelFinishedState(state.currentLevel.trials, state.currentLevel.totalTrials),
                currentLevel: {
                    ...state.currentLevel,
                    trials: state.currentLevel.trials.concat({
                        ...state.currentLevel.currentTrial,
                        submitTime: action.submitTime,
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
                    isCorrect: state.currentTrial.operation.correctResult === state.currentTrial.currentUserInput,
                }
            };

        default:
            return state
    }
}