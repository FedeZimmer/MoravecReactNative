import {
    ASK_FOR_HINT,
    CALCULATOR_ERASE_INPUT,
    CALCULATOR_TYPE_INPUT,
    LOAD_GAME_DATA,
    NEW_TRIAL,
    START_LEVEL,
    SUBMIT_TRIAL,
    UPDATE_LEVELS_HISTORY,
} from '../actions/game_actions'
import {OperationCategory} from "../models/operations/Category";

export const LOADING = 'LOADING';
export const PLAYING = 'PLAYING';
export const LEVEL_FINISHED = 'LEVEL_FINISHED';

const ERASE_KEY_CODE = -1;
const ENTER_KEY_CODE = 20;

const initialState = {
    state: LOADING,
    currentLevel: undefined,
    currentTrial: undefined,
    lastAnswerData: undefined,
    playedLevelsStats: null,
    playedLevelsHistory: null,
    stats: emptyStats()
};

const MAX_NUMBER_OF_DIGITS = 8;

const TOTAL_TRIALS_PER_LEVEL = 20;

export const MAX_HINTS_PER_LEVEL = 3;

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

function newTrialData(trials, levelNumber, operation, startTime, hintsAvailable) {
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
        hintsCurrentlyAvailable: hintsAvailable,
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

function shouldShowHint(hintsAvailable, operationHint, hintShown) {
    return hintShown || (hintsAvailable > 0 && operationHint.hasHint());
}

function calculateHintsAvailable(prevHintsAvailable, operationHint, hintShown) {
    if (!hintShown && shouldShowHint(prevHintsAvailable, operationHint, hintShown)) {
        return prevHintsAvailable - 1;
    } else {
        return prevHintsAvailable;
    }
}

function calculateStars(totalCorrect) {
    if (totalCorrect < 15) {
        return 0;
    }
    if (totalCorrect < 17) {
        return 1;
    }
    if (totalCorrect < 20) {
        return 2;
    }
    if (totalCorrect >= 20) {
        return 3;
    }
}

export function emptyStats() {
    return OperationCategory.allCategories().map((category) => {
        return {
            categoryCodename: category.codename(),
            correctTrialsTimes: [],
            incorrectTrialsTimes: [],
        }
    });
}

function addStatsFromNewTrials(previousStats, newTrials) {
    return previousStats.map((operationStats) => {
        const trialsOfCategory = newTrials.filter((trial) => {
            return trial.operation.opType === operationStats.categoryCodename
        });

        const correctTrials = trialsOfCategory.filter((trial) => trial.isCorrect);
        const incorrectTrials = trialsOfCategory.filter((trial) => !trial.isCorrect);

        const correctTrialsTimes = correctTrials.map((trial) => trial.totalTime);
        const incorrectTrialsTimes = incorrectTrials.map((trial) => trial.totalTime);

        return {
            ...operationStats,
            correctTrialsTimes: operationStats.correctTrialsTimes.concat(correctTrialsTimes),
            incorrectTrialsTimes: operationStats.incorrectTrialsTimes.concat(incorrectTrialsTimes),
        }
    });
}

function updateLevelStatsIfBetterRecord(playedLevelStats, newLevelData) {
    let aBetterRecord = true;

    const previousStats = playedLevelStats[newLevelData.number];
    if (previousStats !== undefined) {
        const moreStars = newLevelData.stars > previousStats.stars;
        const sameStars = newLevelData.stars === previousStats.stars;
        const timeImproved = newLevelData.totalTrialsTime < previousStats.totalTrialsTime;

        aBetterRecord = moreStars || (sameStars && timeImproved);
    }

    if (aBetterRecord) {
        return {
            ...playedLevelStats,
            [newLevelData.number]: {
                stars: newLevelData.stars,
                totalTrialsTime: newLevelData.totalTrialsTime,
                levelCompleted: newLevelData.levelCompleted,
            }
        };
    } else {
        return playedLevelStats;
    }
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_GAME_DATA:
            return {
                ...state,
                playedLevelsStats: action.playedLevelsStats,
                playedLevelsHistory: action.playedLevelsHistory,
                stats: action.stats
            };

        case NEW_TRIAL:
            return {
                ...state,
                currentTrial: newTrialData(state.currentLevel.trials, state.currentLevel.number,
                    action.operation, action.startTime, state.currentLevel.hintsAvailable)
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
                    hintsAvailable: calculateHintsAvailable(state.currentLevel.hintsAvailable,
                        state.currentTrial.operation.hint, state.currentTrial.hintShown),
                },
                currentTrial: {
                    ...state.currentTrial,
                    hintShown: shouldShowHint(state.currentLevel.hintsAvailable,
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
                    stars: 0,
                    lastCorrectInARowValue: 0,
                    totalTrialsTime: 0,
                    efficacy: calculateEfficacy(state.totalCorrect, state.totalTrials),
                    hintsAvailable: MAX_HINTS_PER_LEVEL,
                },
                currentTrial: newTrialData([], action.levelNumber,
                    action.operation, action.startTime, MAX_HINTS_PER_LEVEL)
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
                    stars: calculateStars(updateTotalCorrect(state.currentTrial.currentUserInput,
                        state.currentTrial.operation.correctResult,
                        state.currentLevel.totalCorrect)),
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
                playedLevelsStats: updateLevelStatsIfBetterRecord(state.playedLevelsStats, state.currentLevel),
                playedLevelsHistory: state.playedLevelsHistory.concat(state.currentLevel),
                stats: addStatsFromNewTrials(state.stats, state.currentLevel.trials),
            };

        default:
            return state
    }
}