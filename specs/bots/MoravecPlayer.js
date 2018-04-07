export class MoravecPlayer {
    constructor(engineHelper) {
        this._engineHelper = engineHelper;
    }

    async startGame() {
        await this._engineHelper.press('PlayButton');
    }

    async playCurrentLevel() {
        await this._engineHelper.press('PlayLevelButton');
    }

    async pressANumberSequence(numberSequence) {
        for (let aChar of numberSequence) {
            await this._engineHelper.press(`NumberKey.${aChar}`);
        }
    }

    async enterTheRightAnswer() {
        const operationDisplayComponent = await this._engineHelper.findComponent('OperationDisplay');

        const operationResult = operationDisplayComponent.props.operation.correctResult;

        await this.pressANumberSequence(operationResult.toString())
    }

    async enterAWrongAnswer() {
        const operationDisplayComponent = await this._engineHelper.findComponent('OperationDisplay');

        const wrongResult = operationDisplayComponent.props.operation.correctResult + 1;

        await this.pressANumberSequence(wrongResult.toString())
    }

    async pressEnter() {
        await this._engineHelper.press('EnterKey');
    }
}