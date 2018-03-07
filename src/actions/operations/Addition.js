import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Addition extends Operation {
    static createRandom(numDigitsLeftOperand, numDigitsRightOperand) {
        const operandRestrictions = {allow_zero: false, allow_one: true, allow_multiples_of_10: true};
        const leftOperand = Operand.createRandom(numDigitsLeftOperand, operandRestrictions);
        const rightOperand = Operand.createRandom(numDigitsRightOperand, operandRestrictions);

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