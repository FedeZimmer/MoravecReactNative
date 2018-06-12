import {PositionalDecomposition} from "./PositionalDecomposition";
import {OperationHint} from "./OperationHint";

export class MultiplicationHint extends OperationHint {
    static of(multiplicationOperation) {
        return new MultiplicationHint(multiplicationOperation);
    }

    getHint() {
        const firstOperand = this.operation().leftOperand().value();
        const secondOperand = this.operation().rightOperand().value();

        const decomposition = PositionalDecomposition.of(firstOperand).getDecomposition();

        const additionsList = decomposition.map((digit) => {
            return `${digit}x${secondOperand}`;
        });

        const firstAddition = additionsList[0];
        const additionsListTail = additionsList.slice(1);

        const hintStep = additionsListTail.reduce((result, addition) => {
            return `${result} + ${addition}`;
        }, `${firstAddition}`);

        return [hintStep];
    }
}