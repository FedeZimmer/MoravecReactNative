import {AsyncStorage} from "react-native";
import {ApiClient} from "../api_client/ApiClient";
import {LEVEL_FINISHED} from "../reducers/game_reducer";

export const START_GAME = 'START_GAME';
export const CALCULATOR_TYPE_INPUT = 'CALCULATOR_TYPE_INPUT';
export const CALCULATOR_ERASE_INPUT = 'CALCULATOR_ERASE_INPUT';
export const NEW_TRIAL = 'NEW_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const START_LEVEL = 'START_LEVEL';
export const RESTORE_SAVED_GAME_INFO = 'RESTORE_SAVED_GAME_INFO';
export const UPDATE_LEVELS_HISTORY = 'UPDATE_LEVELS_HISTORY';


function createRandomOperationForLevel(level) {
    let operation = level.createRandomOperation();

    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        operation: operation.operationHumanRepresentation(),
        correctResult: operation.result(),
        maxSolveTime: operation.maxSolveTime(),
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
        const gameInfo = {
            playedLevelsStats: gameState.playedLevelsStats,
            playedLevelsHistory: gameState.playedLevelsHistory,
        };
        AsyncStorage.setItem('@moravec:game', JSON.stringify(gameInfo)).then(() => {
            sendUnsentTrials();
        });
    }
}

export function getSavedGameInfoFromDevice() {
    return (dispatch) => {
        AsyncStorage.getItem('@moravec:game').then((gameInfoJSON) => {
            if (gameInfoJSON !== null) {
                const gameInfo = JSON.parse(gameInfoJSON);
                dispatch({
                    type: RESTORE_SAVED_GAME_INFO,
                    savedGameInfo: gameInfo
                });
            }
        });
    }
}

function sendUnsentTrials() {
    AsyncStorage.getItem('@moravec:game').then((gameInfoJSON) => {
        const gameInfo = JSON.parse(gameInfoJSON);

        const allUnsentTrials = getAllUnsentTrials(gameInfo.playedLevelsHistory);

        const totalTrials = gameInfo.playedLevelsHistory.reduce((accum, level) => accum + level.trials.length, 0);

        const totalTrialsSentBefore = totalTrials - allUnsentTrials.length;

        new ApiClient().sendTrials(allUnsentTrials, totalTrialsSentBefore).then(() => {
            console.log("--DEBUG-- API: POST /api/v2/trials successful!");

            const playedLevelsHistory = markAllTrialsAsSentOnDevice(gameInfo.playedLevelsHistory);

            AsyncStorage.setItem('@moravec:game', JSON.stringify({
                ...gameInfo,
                playedLevelsHistory: playedLevelsHistory
            }));
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