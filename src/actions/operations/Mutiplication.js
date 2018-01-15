import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Mutiplication extends Operation {
    static createRandom(numDigitsLeftOperand, numDigitsRightOperand) {
        const leftOperand = Operand.createRandom(numDigitsLeftOperand);
        const rightOperand = Operand.createRandom(numDigitsRightOperand);

        const category = `${numDigitsLeftOperand.toString()}x${numDigitsRightOperand.toString()}`;

        return new Mutiplication(category, leftOperand, rightOperand);
    }

    operator() {
        return '*';
    }
}