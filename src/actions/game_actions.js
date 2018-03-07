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
export const START_LEVEL = 'START_LEVEL';
export const RECEIVE_PLAYED_LEVELS_INFO = 'RECEIVE_PLAYED_LEVELS_INFO';


function createOperationForLevel(levelNumber) {
    const operationCategoriesPerLevel = {
        1: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1)],
        2: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1)],
        3: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1), Addition.createRandom(2, 2)],
        4: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1), Addition.createRandom(2, 2),
            Multiplication.createRandom(2, 1)],
        5: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1), Addition.createRandom(2, 2),
            Multiplication.createRandom(2, 1), Multiplication.createRandom(3, 1)],
        6: [Addition.createRandom(1, 1), Multiplication.createRandom(1, 1), Addition.createRandom(2, 2),
            Multiplication.createRandom(2, 1), Multiplication.createRandom(3, 1), ToSquare.createRandom(2)],
    };

    const operationCategoriesOfLevel = operationCategoriesPerLevel[levelNumber];

    let operation = math.pickRandom(operationCategoriesOfLevel);

    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        correctResult: operation.result(),
        maxSolveTime: operation.maxSolveTime(),
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
            dispatch(saveFinishedLevelInfoOnDevice());
        } else {
            dispatch(newTrial());
        }
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
            AsyncStorage.setItem('@moravec:levels', JSON.stringify(levelsPlayedInfo)).then(() => {
                sendUnsentTrials();
            });
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
    AsyncStorage.getItem('@moravec:levels').then((savedLevelsInfoJSON) => {
        const savedLevelsInfo = JSON.parse(savedLevelsInfoJSON);

        const allUnsentTrials = Object.keys(savedLevelsInfo).map((level) => {
            const trialsOfLevel = savedLevelsInfo[level].trials;
            return trialsOfLevel.filter((trial) => {
                return !trial.hasOwnProperty('sentToBackend') || !trial['sentToBackend'];
            });
        }).reduce(function (allUnsentTrails, unsentTrailsOfLevel) {
            return allUnsentTrails.concat(unsentTrailsOfLevel);
        });

        new ApiClient().sendTrials(allUnsentTrials).then(() => {
            console.log("--DEBUG-- API: POST /api/v2/trials successful!");
            markAllTrialsAsSentOnDevice(savedLevelsInfo);
        });
    });
}

function markAllTrialsAsSentOnDevice(savedLevelsInfo) {
    Object.keys(savedLevelsInfo).forEach((level) => {
        savedLevelsInfo[level] = {
            ...savedLevelsInfo[level],
            trials: savedLevelsInfo[level].trials.map((trial) => {
                return {
                    ...trial,
                    sentToBackend: true,
                }
            }),
        };
    });

    AsyncStorage.setItem('@moravec:levels', JSON.stringify(savedLevelsInfo));
}