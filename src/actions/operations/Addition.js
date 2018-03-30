import {Operation} from "./Operation";
import {Operand} from "./Operand";


export class Addition extends Operation {
    static operator() {
        return '+';
    }

    static operatorHumanRepresentation() {
        return Addition.operator();
    }

    static isCorrectFor(operator) {
        return operator == this.operator();
    }

    static createRandom(category) {
        const operandRestrictions = {allow_zero: false, allow_one: true, allow_multiples_of_10: true};
        const leftOperand = Operand.createRandom(category.numDigitsLeftOperand(), operandRestrictions);
        const rightOperand = Operand.createRandom(category.numDigitsRightOperands(), operandRestrictions);

        return new Addition(category, leftOperand, rightOperand);
    }

    operator() {
        return Addition.operator();
    }

    operatorHumanRepresentation() {
        return Addition.operatorHumanRepresentation();
    }
}