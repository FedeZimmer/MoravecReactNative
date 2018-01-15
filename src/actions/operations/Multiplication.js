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
}