import {OperationHint} from "./OperationHint";

export class NoHint extends OperationHint {
    static of(operation) {
        return new NoHint(operation);
    }

    getHint() {
        return [];
    }

    hasHint() {
        return false;
    }
}