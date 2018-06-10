import {PositionalDecomposition} from "./PositionalDecomposition";

export class MultiplicationHint {
    static of(multiplicationOperation) {
        return new MultiplicationHint(multiplicationOperation);
    }

    constructor(multiplicationOperation) {
        this._operation = multiplicationOperation;
    }

    getHint() {
        const firstOperand = this._operation.leftOperand();
        const secondOperand = this._operation.rightOperand();

        const decomposition = PositionalDecomposition.of(firstOperand).getDecomposition();

        const additionsList = decomposition.map((digit) => {
            return `${digit}x${secondOperand}`;
        });

        const firstAddition = additionsList[0];
        const additionsListTail = additionsList.slice(1);

        return additionsListTail.reduce((result, addition) => {
            return `${result} + ${addition}`;
        }, `${firstAddition}`);
    }
}