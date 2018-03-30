import {Addition} from "./Addition";
import {Multiplication} from "./Multiplication";
import {ToSquare} from "./ToSquare";

export class OperationFactory {
    static allOperations() {
        return [Addition, Multiplication, ToSquare];
    }

    static createRandom(category) {
        const operator = category.operator();
        for (let operation of OperationFactory.allOperations()) {
            if (operation.isValidWith(operator)) {
                return operation.createRandom(category);
            }
        }

        throw ("There is no operation with this operator: " + operator);
    }
}