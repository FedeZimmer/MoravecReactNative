import {Addition} from "./Addition";
import {Multiplication} from "./Multiplication";
import {ToSquare} from "./ToSquare";

export class OperationCategory {
    constructor(codename) {
        /*
         The parameter "codename" is a string with the following format:
         "numDigitsFirstOperand operator numDigitsSecondOperand". For example "1d+2d" where numDigitsFirstOperand is
         equal to number 1, operator is equal to "+" and numDigitsSecondOperand is equal to number 2.
         */

        this._codename = codename;

        this._inferOperationPartsFromCodename(codename);

        let name = this._numDigitsLeft.toString() + this._operatorHumanRepresentation.toString();
        if (this._numDigitsRight > 0) {
            name += this._numDigitsRight.toString();
        }
        this._name = name;
    }

    static allCategories() {
        return [
            new OperationCategory("1d+1d"),
            new OperationCategory("1dx1d"),
            new OperationCategory("2d+2d"),
            new OperationCategory("2dx1d"),
            new OperationCategory("3dx1d"),
            new OperationCategory("(2d)^2"),
            new OperationCategory("(3d)^2"),
            new OperationCategory("(4d)^2"),
        ]
    }

    _inferOperationPartsFromCodename(codename) {
        const regex = /\(?([0-9])d\)?(\+|x|\^2)(?:([0-9])d)?/;
        const matchGroups = regex.exec(codename);

        this._numDigitsLeft = Number.parseInt(matchGroups[1]);
        this._operatorHumanRepresentation = matchGroups[2];
        if (matchGroups[3] !== undefined) {
            this._numDigitsRight = Number.parseInt(matchGroups[3]);
        } else {
            this._numDigitsRight = 0;
        }
    }

    codename() {
        return this._codename;
    }

    name() {
        return this._name;
    }

    numDigitsFirstOperand() {
        return this._numDigitsLeft;
    }

    operatorHumanRepresentation() {
        return this._operatorHumanRepresentation;
    }

    numDigitsSecondOperand() {
        return this._numDigitsRight;
    }

    operationClass() {
        switch (this.operatorHumanRepresentation()) {
            case Addition.operatorHumanRepresentation():
                return Addition;
            case Multiplication.operatorHumanRepresentation():
                return Multiplication;
            case ToSquare.operatorHumanRepresentation():
                return ToSquare;
            default:
                throw ("There is no operation with this operator: " + this.operatorHumanRepresentation());
        }
    }

    maxSolveTime() {
        switch (this.operationClass()) {
            case Addition:
                if (this.numDigitsFirstOperand() === 1 && this.numDigitsSecondOperand() === 1) {
                    return 7000;
                }
                if (this.numDigitsFirstOperand() === 2 && this.numDigitsSecondOperand() === 2) {
                    return 11000;
                }
                throw `Maximum solve time not specified for category ${this.name()}`;
            case Multiplication:
                if (this.numDigitsFirstOperand() === 1 && this.numDigitsSecondOperand() === 1) {
                    return 10000;
                }
                if (this.numDigitsFirstOperand() === 2 && this.numDigitsSecondOperand() === 1) {
                    return 14000;
                }
                if (this.numDigitsFirstOperand() === 3 && this.numDigitsSecondOperand() === 1) {
                    return 16000;
                }
                if (this.numDigitsFirstOperand() === 4 && this.numDigitsSecondOperand() === 1) {
                    return 20000;
                }
                throw `Maximum solve time not specified for category ${this.name()}`;
            case ToSquare:
                if (this.numDigitsFirstOperand() === 2) {
                    return 16000;
                }
                if (this.numDigitsFirstOperand() === 3) {
                    return 34000;
                }
                if (this.numDigitsFirstOperand() === 4) {
                    return 80000;
                }
                throw `Maximum solve time not specified for category ${this.name()}`;
            default:
                throw `Maximum solve time not specified for category ${this.name()}`;
        }
    }
}
