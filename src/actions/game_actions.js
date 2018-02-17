import math from "mathjs";
import {AsyncStorage} from "react-native";

import {ToSquare} from "./operations/ToSquare";
import {Multiplication} from "./operations/Multiplication";
import {Addition} from "./operations/Addition";
import {ApiClient} from "../api_client/ApiClient";

export const START_GAME = 'START_GAME';
export const CALCULATOR_TYPE_INPUT = 'CALCULATOR_TYPE_INPUT';
export const CALCULATOR_ERASE_INPUT = 'CALCULATOR_ERASE_INPUT';
export const NEW_TRIAL = 'NEW_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';
export const START_LEVEL = 'START_LEVEL';
export const SHOW_LEVEL_RESUME = 'SHOW_LEVEL_RESUME';
export const RECEIVE_PLAYED_LEVELS_INFO = 'RECEIVE_PLAYED_LEVELS_INFO';


function createOperationForLevel(level) {
    const operationCategoriesPerLevel = {
        1: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1)],
        2: [Addition.createRandom(2, 2), Multiplication.createRandom(2, 1)],
        3: [Multiplication.createRandom(3, 1), ToSquare.createRandom(2)],
        4: [Multiplication.createRandom(4, 1), ToSquare.createRandom(3)],
        5: [ToSquare.createRandom(4)],
    };

    const operationCategoriesOfLevel = operationCategoriesPerLevel[level];

    let operation = math.pickRandom(operationCategoriesOfLevel);

    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        result: operation.result(),
    }
}

function newTrial() {
    return (dispatch, getState) => {
        dispatch({
            type: NEW_TRIAL,
            trial: {
                input: null,
                operation: createOperationForLevel(getState().game.level),
                startTime: new Date().getTime(),
            }
        });
    }
}

export function startGame() {
    return {
        type: START_GAME
    }
}

export function typeInput(input) {
    return {
        type: CALCULATOR_TYPE_INPUT,
        input: input,
    }
}

export function eraseInput() {
    return {
        type: CALCULATOR_ERASE_INPUT,
    }
}

export function submitTrial() {
    return (dispatch, getState) => {
        dispatch({
            type: SUBMIT_TRIAL,
            submitTime: new Date().getTime(),
        });

        const levelFinished = getState().game.trials.length === getState().game.totalTrials;
        if (levelFinished) {
            dispatch(finishLevel());
        } else {
            dispatch(newTrial());
        }
    }
}

export function showFeedback() {
    return {
        type: SHOW_FEEDBACK,
    }
}

export function hideFeedback() {
    return {
        type: HIDE_FEEDBACK
    }
}

export function startLevel(level) {
    return (dispatch) => {
        dispatch({
            type: START_LEVEL,
            level: level,
        });
        dispatch(newTrial());
    }
}

function showLevelResume() {
    return {
        type: SHOW_LEVEL_RESUME
    }
}

function finishLevel() {
    return (dispatch, getState) => {
        dispatch(showLevelResume());
        dispatch(sendStoredTrials());

        const state = getState().game;

        const totalTimeOfLevel = state.trials.map((trial) => {
            return trial.submitTime - trial.startTime;
        }).reduce((totalTimeOfPreviousTrials, timeOfTrial) => {
            return totalTimeOfPreviousTrials + timeOfTrial;
        });
        const levelNumber = state.level;
        const levelInfo = {
            totalTime: totalTimeOfLevel,
            correctAnswers: state.totalCorrect,
            trials: state.trials
        };

        AsyncStorage.getItem('@moravec:levels').then((result) => {
            let levels = {};

            const thereAreSavedLevels = result !== null;
            if (thereAreSavedLevels) {
                levels = JSON.parse(result);
            }

            levels[levelNumber] = levelInfo;
            AsyncStorage.setItem('@moravec:levels', JSON.stringify(levels));
        });
    }
}

function receivePlayedLevelsInfo(levels) {
    return {
        type: RECEIVE_PLAYED_LEVELS_INFO,
        levels: levels
    }
}

export function getPlayedLevelsInfo() {
    return (dispatch) => {
        AsyncStorage.getItem('@moravec:levels').then((result) => {
            const thereAreSavedLevels = result !== null;
            if (thereAreSavedLevels) {
                const levels = JSON.parse(result);
                dispatch(receivePlayedLevelsInfo(levels));
            }
        });
    }
}

function sendStoredTrials() {
    return (dispatch, getState) => {
        const allTrials = getState().game.trials;
        new ApiClient().call('POST', "/api/v2/trials", allTrials, (data) => {
            console.warn("Se han guardado los datos correctamente.");
        });
    }
}
