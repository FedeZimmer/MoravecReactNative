import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class ToSquare extends Operation {
    static createRandom(numDigitsOperand) {
        const leftOperand = Operand.createRandom(numDigitsOperand);
        const rightOperand = new Operand(2);

        const category = `${numDigitsOperand.toString()}^2`;

        return new ToSquare(category, leftOperand, rightOperand);
    }

    operator() {
        return '^';
    }

    operatorHumanRepresentation() {
        return this.operator();
    }

    maxSolveTime() {
        switch (this.category()) {
            case '2^2':
                return 16000;
            case '3^2':
                return 34000;
            case '4^2':
                return 80000;
            default:
                throw `Maximum solve time not specified for operation ${this.category()}`;
        }
    }
}