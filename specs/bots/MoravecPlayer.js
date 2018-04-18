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

        await this.pressANumberSequence(operationResult.toString());

        await this.pressEnter();
    }

    async enterAWrongAnswer() {
        const operationDisplayComponent = await this._engineHelper.findComponent('OperationDisplay');

        const wrongResult = operationDisplayComponent.props.operation.correctResult + 1;

        await this.pressANumberSequence(wrongResult.toString());

        await this.pressEnter();
    }

    async waitUntilMaxSolvingTimeIsExceeded() {
        const gameComponent = await this._engineHelper.findComponent("Game");
        const maxSolveTimeOfCurrentTrial = gameComponent.props.currentTrial.operation.maxSolveTime;

        await this._engineHelper.pause(maxSolveTimeOfCurrentTrial + 1000);
    }

    async pressEnter() {
        await this._engineHelper.press('EnterKey');
    }

    async pressErase() {
        await this._engineHelper.press('EraseKey');
    }
}