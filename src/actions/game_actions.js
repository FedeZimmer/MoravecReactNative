import math from "mathjs";
import {AsyncStorage} from "react-native";

import {ToSquare} from "./operations/ToSquare";
import {Multiplication} from "./operations/Multiplication";
import {Addition} from "./operations/Addition";
import {ApiClient} from "../api_client/ApiClient";
import {LEVEL_FINISHED} from "../reducers/game_reducer";

export const START_GAME = 'START_GAME';
export const CALCULATOR_TYPE_INPUT = 'CALCULATOR_TYPE_INPUT';
export const CALCULATOR_ERASE_INPUT = 'CALCULATOR_ERASE_INPUT';
export const NEW_TRIAL = 'NEW_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';
export const START_LEVEL = 'START_LEVEL';
export const RECEIVE_PLAYED_LEVELS_INFO = 'RECEIVE_PLAYED_LEVELS_INFO';


function createOperationForLevel(levelNumber) {
    const operationCategoriesPerLevel = {
        1: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1)],
        2: [Addition.createRandom(2, 2), Multiplication.createRandom(2, 1)],
        3: [Multiplication.createRandom(3, 1), ToSquare.createRandom(2)],
        4: [Multiplication.createRandom(4, 1), ToSquare.createRandom(3)],
        5: [ToSquare.createRandom(4)],
    };

    const operationCategoriesOfLevel = operationCategoriesPerLevel[levelNumber];

    let operation = math.pickRandom(operationCategoriesOfLevel);

    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        correctResult: operation.result(),
        maxSolveTime: 30000,
    }
}

function newTrial() {
    return (dispatch, getState) => {
        dispatch({
            type: NEW_TRIAL,
            operation: createOperationForLevel(getState().game.currentLevel.number),
            startTime: new Date().getTime(),
        });
    }
}

export function startGame() {
    return {
        type: START_GAME
    }
}

export function typeInput(newUserInput) {
    return {
        type: CALCULATOR_TYPE_INPUT,
        newUserInput: newUserInput,
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

        if (getState().game.state === LEVEL_FINISHED) {
            dispatch(saveFinishedLevelInfoOnDevice());
            dispatch(sendUnsentTrials());
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

export function startLevel(levelNumber) {
    return (dispatch) => {
        dispatch({
            type: START_LEVEL,
            levelNumber: levelNumber,
        });
        dispatch(newTrial());
    }
}

function saveFinishedLevelInfoOnDevice() {
    return (dispatch, getState) => {
        const levelInfo = getState().game.currentLevel;
        AsyncStorage.getItem('@moravec:levels').then((result) => {
            let levelsPlayedInfo = {};

            const thereAreSavedLevels = result !== null;
            if (thereAreSavedLevels) {
                levelsPlayedInfo = JSON.parse(result);
            }

            levelsPlayedInfo[levelInfo.number] = levelInfo;
            AsyncStorage.setItem('@moravec:levels', JSON.stringify(levelsPlayedInfo));
        });
    }
}

function receiveLevelsPlayedInfo(levelsPlayedInfo) {
    return {
        type: RECEIVE_PLAYED_LEVELS_INFO,
        levelsPlayedInfo: levelsPlayedInfo
    }
}

export function getLevelsPlayedInfoFromDevice() {
    return (dispatch) => {
        AsyncStorage.getItem('@moravec:levels').then((savedLevelsInfo) => {
            const thereAreSavedLevels = savedLevelsInfo !== null;
            if (thereAreSavedLevels) {
                const levelsPlayedInfo = JSON.parse(savedLevelsInfo);
                dispatch(receiveLevelsPlayedInfo(levelsPlayedInfo));
            }
        });
    }
}

function sendUnsentTrials() {
    return (dispatch, getState) => {
        const allTrials = getState().game.currentLevel.trials;
        new ApiClient().call('POST', "/api/v2/trials", allTrials, (data) => {
            console.log("API: POST /api/v2/trials successful!");
        });
    }
}
