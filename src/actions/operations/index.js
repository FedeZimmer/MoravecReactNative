import math from "mathjs";
import {Addition} from "./Addition";
import {Mutiplication as Multiplication} from "./Mutiplication";
import {ToSquare} from "./ToSquare";


function pickOperationCategoryConsideringProbabilities(probabilities) {
    let operationTypesPool = [];

    Object.entries(probabilities).forEach(([operationType, probability]) => {
        for (let i = 0; i < probability; i++) {
            operationTypesPool.push(operationType)
        }
    });

    return math.pickRandom(operationTypesPool);
}

export function createOperation(level) {
    const probabilityPerOperationCategoryPerLevel = {
        1: {'1+1': 50, '1x1': 50},
        2: {'2+2': 50, '2x1': 50},
        3: {'3x1': 50, '2^2': 50},
        4: {'4x1': 50, '3^2': 50},
        5: {'4^2': 100},
    };

    const probabilitiesPerCategory = probabilityPerOperationCategoryPerLevel[level];

    let operationCategory = pickOperationCategoryConsideringProbabilities(probabilitiesPerCategory);

    let operation;

    switch(operationCategory) {
        case '1+1':
            operation = Addition.createRandom(1, 1);
            break;
        case '1x1':
            operation = Multiplication.createRandom(1, 1);
            break;
        case '2+2':
            operation = Addition.createRandom(2, 2);
            break;
        case '2x1':
            operation = Multiplication.createRandom(2, 1);
            break;
        case '3x1':
            operation = Multiplication.createRandom(3, 1);
            break;
        case '2^2':
            operation = ToSquare.createRandom(2);
            break;
        case '4x1':
            operation = Multiplication.createRandom(4, 1);
            break;
        case '3^2':
            operation = ToSquare.createRandom(3);
            break;
        case '4^2':
            operation = ToSquare.createRandom(4);
            break;
    }

    return {
        opType: operation.category(),
        operator: operation.operator(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        result: operation.result(),
    }
}