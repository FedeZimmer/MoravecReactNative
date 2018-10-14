import {emptyStats, LEVEL_FINISHED} from "../reducers/game_reducer";
import {AppDataStorage} from "../storage/AppDataStorage";
import {sendUnsentTrials} from "../send_data";

export const LOAD_GAME_DATA = 'LOAD_GAME_DATA';
export const CALCULATOR_TYPE_INPUT = 'CALCULATOR_TYPE_INPUT';
export const CALCULATOR_ERASE_INPUT = 'CALCULATOR_ERASE_INPUT';
export const ASK_FOR_HINT = 'ASK_FOR_HINT';
export const NEW_TRIAL = 'NEW_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const START_LEVEL = 'START_LEVEL';
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
        const levelsState = getState().levels;
        const currentLevel = levelsState.levels[gameState.currentLevel.number];
        dispatch({
            type: NEW_TRIAL,
            operation: createRandomOperationForLevel(currentLevel),
            startTime: new Date().getTime(),
        });
    }
}

export function loadGameData() {
    return (dispatch, getState) => {
        const playedLevelsStats = getState().levels.playedLevelsStats;
        const playedLevelsHistory = AppDataStorage.fetch('playedLevelsHistory');
        const stats = AppDataStorage.fetch('stats');

        Promise.all([playedLevelsHistory, stats]).then(promiseValues => {
            dispatch({
                type: LOAD_GAME_DATA,
                playedLevelsStats: playedLevelsStats,
                playedLevelsHistory: promiseValues[0] || [],
                stats: promiseValues[1] || emptyStats(),
            });
        });
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
        const levelsState = getState().levels;
        const currentLevel = levelsState.levels[levelNumber];
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