import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class ToSquare extends Operation {
    static createRandom(numDigitsOperand) {
        const leftOperand = Operand.createRandom(numDigitsOperand);
        const rightOperand = 2;

        const category = `${numDigitsOperand.toString()}^2`;

        return new ToSquare(category, leftOperand, rightOperand);
    }

    operator() {
        return '^';
    }
}