import {ApiClient} from "../api_client/ApiClient";
import {emptyStats, LEVEL_FINISHED} from "../reducers/game_reducer";
import {AppDataStorage} from "../storage/AppDataStorage";

export const START_GAME = 'START_GAME';
export const CALCULATOR_TYPE_INPUT = 'CALCULATOR_TYPE_INPUT';
export const CALCULATOR_ERASE_INPUT = 'CALCULATOR_ERASE_INPUT';
export const ASK_FOR_HINT = 'ASK_FOR_HINT';
export const NEW_TRIAL = 'NEW_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const START_LEVEL = 'START_LEVEL';
export const RESTORE_SAVED_GAME_INFO = 'RESTORE_SAVED_GAME_INFO';
export const UPDATE_LEVELS_HISTORY = 'UPDATE_LEVELS_HISTORY';


function createRandomOperationForLevel(level) {
    let operation = level.createRandomOperation();

    // TODO
    // This mapping seems unnecessary. We could remove it and pass the
    // Operation object through the components instead.
    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        operation: operation.operationHumanRepresentation(),
        correctResult: operation.result(),
        maxSolveTime: operation.maxSolveTime(),
        hint: operation.hint(),
        shouldBeHidden: operation.shouldBeHidden()
    }
}

function newTrial() {
    return (dispatch, getState) => {
        const gameState = getState().game;
        const currentLevel = gameState.levels[gameState.currentLevel.number];
        dispatch({
            type: NEW_TRIAL,
            operation: createRandomOperationForLevel(currentLevel),
            startTime: new Date().getTime(),
        });
    }
}

export function startGame() {
    return {
        type: START_GAME,
    }
}

export function typeInput(newUserInput) {
    return {
        type: CALCULATOR_TYPE_INPUT,
        newUserInput: newUserInput,
        inputTime: new Date().getTime(),
    }
}

export function eraseInput() {
    return {
        type: CALCULATOR_ERASE_INPUT,
        inputTime: new Date().getTime(),
    }
}

export function askForHint() {
    return {
        type: ASK_FOR_HINT,
    }
}

export function submitTrial() {
    return (dispatch, getState) => {
        dispatch({
            type: SUBMIT_TRIAL,
            submitTime: new Date().getTime(),
        });

        if (getState().game.state === LEVEL_FINISHED) {
            dispatch(updateLevelsHistory());
        } else {
            dispatch(newTrial());
        }
    }
}

export function startLevel(levelNumber) {
    return (dispatch, getState) => {
        const currentLevel = getState().game.levels[levelNumber];
        dispatch({
            type: START_LEVEL,
            levelNumber: levelNumber,
            operation: createRandomOperationForLevel(currentLevel),
            startTime: new Date().getTime()
        })
    }
}

function updateLevelsHistory() {
    return (dispatch) => {
        dispatch({
            type: UPDATE_LEVELS_HISTORY,
        });
        dispatch(saveGameInfoOnDevice());
    }
}

function saveGameInfoOnDevice() {
    return (dispatch, getState) => {
        const gameState = getState().game;
        AppDataStorage.save('playedLevelsStats', gameState.playedLevelsStats);
        AppDataStorage.save('playedLevelsHistory', gameState.playedLevelsHistory).then(() => {
            sendUnsentTrials();
        });
        AppDataStorage.save('stats', gameState.stats);
    }
}

export function getSavedGameInfoFromDevice() {
    return (dispatch) => {
        const playedLevelsStats = AppDataStorage.fetch('playedLevelsStats');
        const playedLevelsHistory = AppDataStorage.fetch('playedLevelsHistory');
        const stats = AppDataStorage.fetch('stats');

        Promise.all([playedLevelsStats, playedLevelsHistory, stats]).then(promiseValues => {
            dispatch({
                type: RESTORE_SAVED_GAME_INFO,
                playedLevelsStats: promiseValues[0] || {},
                playedLevelsHistory: promiseValues[1] || [],
                stats: promiseValues[2] || emptyStats(),
            });
        });
    }
}

function sendUnsentTrials() {
    AppDataStorage.fetch('playedLevelsHistory').then((playedLevelsHistory) => {
        const allUnsentTrials = getAllUnsentTrials(playedLevelsHistory);

        const totalTrials = playedLevelsHistory.reduce((accum, level) => accum + level.trials.length, 0);

        const totalTrialsSentBefore = totalTrials - allUnsentTrials.length;

        new ApiClient().sendTrials(allUnsentTrials, totalTrialsSentBefore, 'Arcade').then(() => {
            console.log("--DEBUG-- API: POST /api/v2/trials successful!");

            const markedHistory = markAllTrialsAsSentOnDevice(playedLevelsHistory);

            AppDataStorage.save('playedLevelsHistory', markedHistory);
        });
    });
}

function getAllUnsentTrials(levels) {
    return levels.map((level) => {
        return level.trials.filter((trial) => {
            return !trial.hasOwnProperty('sentToBackend') || !trial['sentToBackend'];
        });
    }).reduce(function (allUnsentTrails, unsentTrailsOfLevel) {
        return allUnsentTrails.concat(unsentTrailsOfLevel);
    });
}

function markAllTrialsAsSentOnDevice(playedLevelsHistory) {
    return playedLevelsHistory.map((level) => {
        return {
            ...level,
            trials: level.trials.map((trial) => {
                return {
                    ...trial,
                    sentToBackend: true,
                }
            }),
        };
    });
}