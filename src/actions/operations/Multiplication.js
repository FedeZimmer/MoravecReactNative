import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Multiplication extends Operation {
    static operator() {
        return '*';
    }

    static operatorHumanRepresentation() {
        return 'x';
    }

    static createRandom(category) {
        const operandRestrictions = {allow_zero: false, allow_one: false, allow_multiples_of_10: false};
        const leftOperand = Operand.createRandom(category.numDigitsFirstOperand(), operandRestrictions);
        const rightOperand = Operand.createRandom(category.numDigitsSecondOperand(), operandRestrictions);

        return new Multiplication(category, leftOperand, rightOperand);
    }

    operator() {
        return Multiplication.operator();
    }

    operatorHumanRepresentation() {
        return Multiplication.operatorHumanRepresentation();
    }

    operationHumanRepresentation() {
        return this.leftOperand().value() + ' ' + this.operatorHumanRepresentation() + ' '  + this.rightOperand().value();
    }
}