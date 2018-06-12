import {Operation} from "./Operation";
import {Operand} from "./Operand";
import {MultiplicationHint} from "../../models/hints/MultiplicationHint";
import {NoHint} from "../../models/hints/NoHint";


export class Multiplication extends Operation {
    static create(leftOperandValue, rightOperandValue) {
        return new Multiplication(null, new Operand(leftOperandValue), new Operand(rightOperandValue));
    }

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
        return this.leftOperand().value() + ' ' + this.operatorHumanRepresentation() + ' ' + this.rightOperand().value();
    }

    hint() {
        if (this.getCategory().numDigitsFirstOperand() >= 2) {
            return MultiplicationHint.of(this);
        } else {
            return NoHint.of(this);
        }
    }
}