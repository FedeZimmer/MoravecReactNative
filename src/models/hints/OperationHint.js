export class OperationHint {
    constructor(operation) {
        this._operation = operation;
    }

    operation() {
        return this._operation;
    }

    /**
     * @return returns an Array of steps of the hint.
     */
    getHint() {
        throw "Subclass responsibility";
    }

    hasHint() {
        return true;
    }
}