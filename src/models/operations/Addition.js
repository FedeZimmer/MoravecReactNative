import {Operation} from "./Operation";
import {Operand} from "./Operand";
import {NoHint} from "../hints/NoHint";


export class Addition extends Operation {
    static create(leftOperandValue, rightOperandValue) {
        return new Addition(null, new Operand(leftOperandValue), new Operand(rightOperandValue));
    }

    static operator() {
        return '+';
    }

    static operatorHumanRepresentation() {
        return Addition.operator();
    }

    static createRandom(category) {
        const operandRestrictions = {allow_zero: false, allow_one: true, allow_multiples_of_10: true};
        const leftOperand = Operand.createRandom(category.numDigitsFirstOperand(), operandRestrictions);
        const rightOperand = Operand.createRandom(category.numDigitsSecondOperand(), operandRestrictions);

        return new Addition(category, leftOperand, rightOperand);
    }

    operator() {
        return Addition.operator();
    }

    operatorHumanRepresentation() {
        return Addition.operatorHumanRepresentation();
    }

    operationHumanRepresentation() {
        return this.leftOperand().value() + ' ' + this.operator() + ' ' + this.rightOperand().value();
    }

    hint() {
        return NoHint.of(this);
    }
}