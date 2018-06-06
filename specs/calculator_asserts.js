export class CalculatorAssertions {
    constructor(spec) {
        this._spec = spec;
    }

    async assertOperationDisplayShows(result) {
        const operationDisplayComponent = await this._spec.findComponent('OperationDisplay');

        // TODO: Think if using operationResult() is the best way to scrap the value shown on screen...
        const valueOnScreen = operationDisplayComponent.operationResult().toString();

        if (valueOnScreen !== result) {
            throw Error(`Was expecting to display number ${result} on screen, but it's showing ${valueOnScreen}`);
        }
    }

    async assertCalculationOKMessageShown() {
        await this._spec.exists('CorrectAnswerMessage');
    }

    async assertCalculationWrongMessageShown() {
        await this._spec.exists('WrongAnswerMessage');
    }
}