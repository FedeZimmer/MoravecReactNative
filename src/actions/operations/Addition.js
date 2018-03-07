import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Addition extends Operation {
    static createRandom(numDigitsLeftOperand, numDigitsRightOperand) {
        const leftOperand = Operand.createRandom(numDigitsLeftOperand);
        const rightOperand = Operand.createRandom(numDigitsRightOperand);

        const category = `${numDigitsLeftOperand.toString()}+${numDigitsRightOperand.toString()}`;

        return new Addition(category, leftOperand, rightOperand);
    }

    operator() {
        return '+';
    }

    operatorHumanRepresentation() {
        return this.operator();
    }

    maxSolveTime() {
        switch (this.category()) {
            case '1+1':
                return 7000;
            case '2+2':
                return 11000;
            default:
                throw `Maximum solve time not specified for operation ${this.category()}`;
        }
    }
}