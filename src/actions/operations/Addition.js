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
}