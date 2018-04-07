import math from "mathjs";

export class Operation {
    static operator() {
        throw "Subclass responsibility";
    }

    static operatorHumanRepresentation() {
        throw "Subclass responsibility";
    }

    constructor(category, leftOperand, rightOperand) {
        this._category = category;
        this._leftOperand = leftOperand;
        this._rightOperand = rightOperand;
    }

    categoryName() {
        return this._category.name();
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

    maxSolveTime() {
        return this._category.maxSolveTime();
    }

    result() {
        return math.eval(this._leftOperand.value() + this.operator() + this._rightOperand.value());
    }
}
