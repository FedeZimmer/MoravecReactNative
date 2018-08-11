import math from "mathjs";
import {Operand} from "./Operand";

export class Operation {
    static operator() {
        throw "Subclass responsibility";
    }

    static operatorHumanRepresentation() {
        throw "Subclass responsibility";
    }

    static create(leftOperandValue, rightOperandValue) {
        return new Operation(null, new Operand(leftOperandValue), new Operand(rightOperandValue));
    }

    constructor(category, leftOperand, rightOperand) {
        this._category = category;
        this._leftOperand = leftOperand;
        this._rightOperand = rightOperand;
    }

    getCategory() {
        return this._category;
    }

    category() {
        return this._category.codename();
    }

    leftOperand() {
        return this._leftOperand;
    }

    rightOperand() {
        return this._rightOperand;
    }

    operator() {
        throw "Subclass responsibility";
    }

    operatorHumanRepresentation() {
        throw "Subclass responsibility";
    }

    operationHumanRepresentation() {
        throw "Subclass responsibility";
    }

    hint() {
        throw "Subclass responsibility";
    }

    maxSolveTime() {
        return this._category.maxSolveTime();
    }

    result() {
        return math.eval(this._leftOperand.value() + this.operator() + this._rightOperand.value());
    }
}
