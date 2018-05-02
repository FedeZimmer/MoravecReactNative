import {Operation} from "./Operation";
import {Operand} from "./Operand";
var exponent = require('superscript-number');

export class ToSquare extends Operation {
    static operator() {
        return '^2';
    }

    static operatorHumanRepresentation() {
        return ToSquare.operator();
    }

    static createRandom(category) {
        const operandRestrictions = {allow_zero: true, allow_one: false, allow_multiples_of_10: false};
        const leftOperand = Operand.createRandom(category.numDigitsFirstOperand(), operandRestrictions);
        const rightOperand = new Operand(2);

        return new ToSquare(category, leftOperand, rightOperand);
    }

    operator() {
        return ToSquare.operator();
    }

    operatorHumanRepresentation() {
        return ToSquare.operatorHumanRepresentation();
    }

    operationHumanRepresentation() {
        return this.leftOperand().value() + exponent(2);
    }
}