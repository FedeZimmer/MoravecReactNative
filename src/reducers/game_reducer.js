import {
    ASK_FOR_HINT,
    CALCULATOR_ERASE_INPUT,
    CALCULATOR_TYPE_INPUT,
    NEW_TRIAL,
    RESTORE_SAVED_GAME_INFO,
    START_GAME,
    START_LEVEL,
    SUBMIT_TRIAL,
    UPDATE_LEVELS_HISTORY,
} from '../actions/game_actions'
import {OperationCategory} from "../actions/category/Category";
import {Level} from "../actions/level/Level";

const levelsConfigurationFile = require('../../assets/levels.json');

export const LEVEL_SELECTION = 'LEVEL_SELECTION';
export const PLAYING = 'PLAYING';
export const LEVEL_FINISHED = 'LEVEL_FINISHED';

const ERASE_KEY_CODE = -1;
const ENTER_KEY_CODE = 20;

const initialState = {
    state: LEVEL_SELECTION,
    levels: undefined,
    currentLevel: undefined,
    currentTrial: undefined,
    lastAnswerData: undefined,
    playedLevelsStats: {},
    playedLevelsHistory: [],
};

const MAX_NUMBER_OF_DIGITS = 8;

const TOTAL_TRIALS_PER_LEVEL = 20;

export const MAX_HINTS_PER_LEVEL = 3;

function obtainLevels() {
    let levels = {};
    Object.entries(levelsConfigurationFile).forEach(([levelNumber, probabilityPerCategories]) => {
        let levelCategories = [];
        let levelCategoriesProbability = [];
        Object.entries(probabilityPerCategories).forEach(([categoryName, probability]) => {
            if (probability !== 0) {
                levelCategories.push(new OperationCategory(categoryName));
                levelCategoriesProbability.push(probability);
            }
        });
        levels[levelNumber] = new Level(levelNumber, levelCategories, levelCategoriesProbability);
    });
    return levels;
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
    if (currentInput === null) {
        return currentInput;
    }

    let inputWithoutLastNumberEntered = String(currentInput).slice(0, -1);
    if (inputWithoutLastNumberEntered === "") {
        inputWithoutLastNumberEntered = null;
    }
    return inputWithoutLastNumberEntered;
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

function playingOrLevelFinishedState(trialNumberSubmitted, totalTrials) {
    if (trialNumberSubmitted === totalTrials) {
        return LEVEL_FINISHED;
    } else {
        return PLAYING;
    }
}

function isAnswerCorrect(correctResult, currentUserInput) {
    return correctResult === currentUserInput;
}

function hasExceededMaxSolveTime(trialStartTime, trialSubmitTime, operationMaxSolveTime) {
    return calculateTotalTrialTime(trialStartTime, trialSubmitTime) > operationMaxSolveTime;
}

function newTrialData(trials, levelNumber, operation, startTime) {
    return {
        levelNumber: levelNumber,
        currentUserInput: null,
        operation: operation,
        startTime: startTime,
        keysPressed: [],
        responseTimes: [],
        hasErased: false,
        timeExceeded: false,
        hintShown: false,
    }
}

function updateTrialsProgress(progressUpToNow, currentIsCorrect, timeExceeded) {
    let newTrialNumber = progressUpToNow;
    if (currentIsCorrect) {
        if (!timeExceeded) {
            newTrialNumber += 1;
        }
    } else {
        newTrialNumber += 1;
    }

    return newTrialNumber;
}

function addResponseTime(responseTimesUntilNow, startTime, inputTime) {
    const responseTime = inputTime - startTime;
    return responseTimesUntilNow.concat(responseTime);
}

function shouldShowHint(hintsUsed, operationHint, hintShown) {
    return hintShown || (hintsUsed < MAX_HINTS_PER_LEVEL && operationHint.hasHint());
}

function calculateHintsUsed(prevHintsUsed, operationHint, hintShown) {
    if (!hintShown && shouldShowHint(prevHintsUsed, operationHint, hintShown)) {
        return prevHintsUsed + 1;
    } else {
        return prevHintsUsed;
    }
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            const levels = obtainLevels();
            return {
                ...initialState,
                levels: levels,
                numLevels: Object.keys(levels).length,
            };

        case RESTORE_SAVED_GAME_INFO:
            return {
                ...state,
                playedLevelsStats: action.savedGameInfo.playedLevelsStats,
                playedLevelsHistory: action.savedGameInfo.playedLevelsHistory,
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
                    responseTimes: addResponseTime(state.currentTrial.responseTimes, state.currentTrial.startTime,
                        action.inputTime),
                }
            };

        case CALCULATOR_ERASE_INPUT:
            return {
                ...state,
                currentTrial: {
                    ...state.currentTrial,
                    currentUserInput: removeLastNumberEntered(state.currentTrial.currentUserInput),
                    keysPressed: state.currentTrial.keysPressed.concat(ERASE_KEY_CODE),
                    responseTimes: addResponseTime(state.currentTrial.responseTimes, state.currentTrial.startTime,
                        action.inputTime),
                    hasErased: true,
                }
            };

        case ASK_FOR_HINT:
            return {
                ...state,
                currentLevel: {
                    ...state.currentLevel,
                    hintsUsed: calculateHintsUsed(state.currentLevel.hintsUsed,
                        state.currentTrial.operation.hint, state.currentTrial.hintShown),
                },
                currentTrial: {
                    ...state.currentTrial,
                    hintShown: shouldShowHint(state.currentLevel.hintsUsed,
                        state.currentTrial.operation.hint, state.currentTrial.hintShown),
                }
            };

        case START_LEVEL:
            return {
                ...state,
                state: PLAYING,
                currentLevel: {
                    number: action.levelNumber,
                    trials: [],
                    totalTrials: TOTAL_TRIALS_PER_LEVEL,
                    currentTrialNumber: 1,
                    totalCorrect: 0,
                    lastCorrectInARowValue: 0,
                    totalTrialsTime: 0,
                    efficacy: calculateEfficacy(state.totalCorrect, state.totalTrials),
                    hintsUsed: 0,
                },
                currentTrial: newTrialData([], action.levelNumber,
                    action.operation, action.startTime)
            };

        case SUBMIT_TRIAL:
            const isCorrect = isAnswerCorrect(state.currentTrial.operation.correctResult,
                state.currentTrial.currentUserInput);

            const exceededMaxSolveTime = hasExceededMaxSolveTime(state.currentTrial.startTime, action.submitTime,
                state.currentTrial.operation.maxSolveTime);

            const totalCorrect = updateTotalCorrect(state.currentTrial.currentUserInput,
                state.currentTrial.operation.correctResult,
                state.currentLevel.totalCorrect);

            const levelCompleted = totalCorrect >= 15;

            return {
                ...state,
                state: playingOrLevelFinishedState(state.currentLevel.currentTrialNumber, state.currentLevel.totalTrials),
                currentLevel: {
                    ...state.currentLevel,
                    trials: state.currentLevel.trials.concat({
                        ...state.currentTrial,
                        keysPressed: state.currentTrial.keysPressed.concat(ENTER_KEY_CODE),
                        responseTimes: addResponseTime(state.currentTrial.responseTimes, state.currentTrial.startTime,
                            action.submitTime),
                        submitTime: action.submitTime,
                        totalTime: calculateTotalTrialTime(state.currentTrial.startTime, action.submitTime),
                        timeExceeded: exceededMaxSolveTime,
                        isCorrect: isCorrect,
                        trialNumber: state.currentLevel.currentTrialNumber,
                        totalCorrectUntilNow: updateTotalCorrect(state.currentTrial.currentUserInput,
                            state.currentTrial.operation.correctResult,
                            state.currentLevel.totalCorrect),
                        correctInARowUntilNow: isCorrect ? state.currentLevel.lastCorrectInARowValue + 1 : 0,
                    }),
                    currentTrialNumber: updateTrialsProgress(state.currentLevel.currentTrialNumber, isCorrect,
                        exceededMaxSolveTime),
                    totalCorrect: updateTotalCorrect(state.currentTrial.currentUserInput,
                        state.currentTrial.operation.correctResult,
                        state.currentLevel.totalCorrect),
                    totalTrialsTime: calculateTotalLevelTime(state.currentLevel.totalTrialsTime,
                        state.currentTrial.startTime,
                        action.submitTime),
                    lastCorrectInARowValue: isCorrect ? state.currentLevel.lastCorrectInARowValue + 1 : 0,
                    efficacy: calculateEfficacy(state.currentLevel.totalCorrect, state.currentLevel.totalTrials),
                    levelCompleted: levelCompleted,
                },
                lastAnswerData: {
                    userInput: state.currentTrial.currentUserInput,
                    correctResult: state.currentTrial.operation.correctResult,
                    isCorrect: isCorrect,
                    timeExceeded: exceededMaxSolveTime,
                }
            };

        case UPDATE_LEVELS_HISTORY:
            return {
                ...state,
                playedLevelsStats: {
                    ...state.playedLevelsStats,
                    [state.currentLevel.number]: {
                        totalCorrect: state.currentLevel.totalCorrect,
                        totalTrialsTime: state.currentLevel.totalTrialsTime,
                        levelCompleted: state.currentLevel.levelCompleted,
                    },
                },
                playedLevelsHistory: state.playedLevelsHistory.concat(state.currentLevel),
            };

        default:
            return state
    }
}