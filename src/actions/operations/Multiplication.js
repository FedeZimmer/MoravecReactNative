import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Multiplication extends Operation {
    static operator() {
        return '*';
    }

    static operatorHumanRepresentation() {
        return 'x';
    }

    static isCorrectFor(operator) {
        return operator == this.operator() || operator == this.operatorHumanRepresentation();
    }

    static createRandom(category) {
        const operandRestrictions = {allow_zero: false, allow_one: false, allow_multiples_of_10: false};
        const leftOperand = Operand.createRandom(category.numDigitsLeftOperand(), operandRestrictions);
        const rightOperand = Operand.createRandom(category.numDigitsRightOperands(), operandRestrictions);

        return new Multiplication(category, leftOperand, rightOperand);
    }

    operator() {
        return Multiplication.operator();
    }

    operatorHumanRepresentation() {
        return Multiplication.operatorHumanRepresentation();
    }
}