import math from "mathjs";


export class Operation {
    constructor(category, leftOperand, rightOperand) {
        this._category = category;
        this._leftOperand = leftOperand;
        this._rightOperand = rightOperand;
    }

    category() {
        return this._category;
    }

    operator() {
        throw "Subclass responsibility";
    }

    operatorHumanRepresentation() {
        throw "Subclass responsibility";
    }

    leftOperand() {
        return this._leftOperand;
    }

    rightOperand() {
        return this._rightOperand;
    }

    result() {
        return math.eval(this._leftOperand.value() + this.operator() + this._rightOperand.value());
    }
}