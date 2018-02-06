import math from "mathjs";
import {AsyncStorage} from "react-native";

import {ToSquare} from "./operations/ToSquare";
import {Multiplication} from "./operations/Multiplication";
import {Addition} from "./operations/Addition";

export const ARCADE_TYPE_INPUT = 'ARCADE_TYPE_INPUT';
export const ARCADE_ERASE_INPUT = 'ARCADE_ERASE_INPUT';
export const CREATE_TRIAL = 'CREATE_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';
export const START_LEVEL = 'START_LEVEL';
export const SHOW_LEVEL_RESUME = 'SHOW_LEVEL_RESUME';

const MAX_NUMBER_OF_DIGITS = 8;

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

const updateUserInput = function (actualInput, newInput) {
    if (!actualInput) {
        return newInput;
    }

    let updatedInput;
    const exceedsMaxNumberOfDigits = actualInput.toString().length >= MAX_NUMBER_OF_DIGITS;
    if (exceedsMaxNumberOfDigits) {
        updatedInput = actualInput;
    } else {
        updatedInput = Number('' + actualInput + newInput);
    }

    return updatedInput;
};

export function createTrial(level) {
    return {
        type: CREATE_TRIAL,
        trial: {
            input: null,
            operation: createOperationForLevel(level),
            time: 0,
        }
    }
}

export function typeInput(input) {
    return {
        type: ARCADE_TYPE_INPUT,
        input: input,
        updateUserInput: updateUserInput,
    }
}

export function eraseInput() {
    return {
        type: ARCADE_ERASE_INPUT,
    }
}

export function submitTrial(trialTime) {
    return {
        type: SUBMIT_TRIAL,
        submittedTrial: (trial) => {
            trial['time'] = trialTime;
            return trial;
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
    return {
        type: START_LEVEL,
        level: level
    }
}

function showLevelResume() {
    return {
        type: SHOW_LEVEL_RESUME
    }
}

export function finishLevel() {
    return (dispatch, getState) => {
        dispatch(showLevelResume());

        const state = getState().game;

        const totalTimeOfLevel = state.trials.map((trial) => {return trial.time}).reduce((a, b) => {return a + b});
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
