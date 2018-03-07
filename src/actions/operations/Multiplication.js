import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Multiplication extends Operation {
    static createRandom(numDigitsLeftOperand, numDigitsRightOperand) {
        const leftOperand = Operand.createRandom(numDigitsLeftOperand);
        const rightOperand = Operand.createRandom(numDigitsRightOperand);

        const category = `${numDigitsLeftOperand.toString()}x${numDigitsRightOperand.toString()}`;

        return new Multiplication(category, leftOperand, rightOperand);
    }

    operator() {
        return '*';
    }

    operatorHumanRepresentation() {
        return 'x';
    }

    maxSolveTime() {
        switch (this.category()) {
            case '1x1':
                return 10000;
            case '2x1':
                return 14000;
            case '3x1':
                return 16000;
            case '4x1':
                return 20000;
            default:
                throw `Maximum solve time not specified for operation ${this.category()}`;
        }
    }
}