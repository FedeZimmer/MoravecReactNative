import {Operation} from "./Operation";
import {Operand} from "./Operand";
import {ToSquareHint} from "../../models/hints/ToSquareHint";
import math from "mathjs";

var exponent = require('superscript-number');

export class ToSquare extends Operation {
    static create(operandValue) {
        return new ToSquare(null, new Operand(operandValue));
    }

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

    hint() {
        return ToSquareHint.of(this);
    }

    result() {
        return math.eval(this._leftOperand.value() + this.operator());
    }
}