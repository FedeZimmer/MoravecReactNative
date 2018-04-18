import {Addition} from "../operations/Addition";
import {Multiplication} from "../operations/Multiplication";
import {ToSquare} from "../operations/ToSquare";

export class OperationCategory {
    static allPossibleCategories() {
        return ['1+1', '1x1', '2+2', '2x1', '3x1', '2^2', '4x1', '3^2', '4^2'];
    }

    constructor(name) {
        /*
         The parameter "name" is a string with the following format:
         "numDigitsLeftOperand operator numDigitsRightOperands". For example "1+2" where numDigitsLeftOperand is
         equal to number 1, operator is equal to "+" and numDigitsRightOperands is equal to number 2.
         */

        if (!OperationCategory.allPossibleCategories().includes(name)) {
            throw 'There is no operation category with name ' + name;
        }

        this._name = name;
    }
    name() {
        return this._name;
    }

    numDigitsLeftOperand() {
        return Number.parseInt(this._name[0]);
    }

    operator() {
        return this._name[1];
    }

    numDigitsRightOperands() {
        return Number.parseInt(this._name[2]);
    }

    operationClass() {
        switch (this.operator()) {
            case Addition.operator():
                return Addition;
            case Multiplication.operatorHumanRepresentation():
                return Multiplication;
            case ToSquare.operator():
                return ToSquare;
            default:
                throw ("There is no operation with this operator: " + this.operator());
        }
    }

    maxSolveTime() {
        switch (this.name()) {
            case '1+1':
                return 7000;
            case '1x1':
                return 10000;
            case '2+2':
                return 11000;
            case '2x1':
                return 14000;
            case '3x1':
                return 16000;
            case '2^2':
                return 16000;
            case '4x1':
                return 20000;
            case '3^2':
                return 34000;
            case '4^2':
                return 80000;
            default:
                throw `Maximum solve time not specified for category ${this.name()}`;
        }
    }
}
