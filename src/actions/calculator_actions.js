import math from "mathjs";

import {ToSquare} from "./operations/ToSquare";
import {Multiplication} from "./operations/Multiplication";
import {Addition} from "./operations/Addition";

export const ARCADE_TYPE_INPUT = 'ARCADE_TYPE_INPUT';
export const ARCADE_ERASE_INPUT = 'ARCADE_ERASE_INPUT';
export const CREATE_TRIAL = 'CREATE_TRIAL';
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL';
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';

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
        input: input
    }
}

export function eraseInput() {
    return {
        type: ARCADE_ERASE_INPUT,
    }
}


export function submitTrial(trial) {
    return {
        type: SUBMIT_TRIAL,
        trial: trial
    }
}


export function showFeedback(trial) {
    return {
        type: SHOW_FEEDBACK,
        trial: trial
    }
}


export function hideFeedback() {
    return {
        type: HIDE_FEEDBACK
    }
}
