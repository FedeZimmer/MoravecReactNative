import {MoravecPlayer} from "./bots/MoravecPlayer";

export function gameSpec(spec) {

    // Assert helpers

    async function assertOperationDisplayShows(result) {
        const operationDisplayComponent = await spec.findComponent('OperationDisplay');

        // TODO: Think if using operationResult() is the best way to scrap the value shown on screen...
        const valueOnScreen = operationDisplayComponent.operationResult().toString();

        if (valueOnScreen !== result) {
            throw Error(`Was expecting to display number ${result} on screen, but it's showing ${valueOnScreen}`);
        }
    }

    async function assertCalculationOKMessageShown() {
        await spec.exists('CorrectAnswerMessage');
    }

    async function assertCalculationWrongMessageShown() {
        await spec.exists('WrongAnswerMessage');
    }

    async function assertNoAnswerFeedbackIsShownToTheUser() {
        await spec.notExists('UserAnswerFeedback');
    }

    // Spec

    spec.describe('As a user', function () {
        const aPlayer = new MoravecPlayer(spec);

        spec.it("hitting the Play button should show me the level selection screen", async function () {
            await spec.exists('PlayButton');
            await aPlayer.startGame();

            await spec.exists('PlayLevelButton');
        });

        spec.it("I can enter any number and it will be shown in the screen", async function () {
            await aPlayer.startGame();
            await aPlayer.playCurrentLevel();

            await aPlayer.pressANumberSequence("1");

            await assertOperationDisplayShows("1");
        });

        spec.it("I can enter a sequence of numbers and all the digits will be shown in the screen in correct order", async function () {
            await aPlayer.startGame();
            await aPlayer.playCurrentLevel();

            await aPlayer.pressANumberSequence("135");

            await assertOperationDisplayShows("135");
        });

        spec.it("while playing I can hit the Enter key after entering a correct answer and the game will tell me its OK", async function () {
            await aPlayer.startGame();
            await aPlayer.playCurrentLevel();

            await aPlayer.enterTheRightAnswer();

            await aPlayer.pressEnter();

            await assertCalculationOKMessageShown();
        });

        spec.it("while playing I can hit the Enter key after entering a WRONG answer and the game will tell me its wrong", async function () {
            await aPlayer.startGame();
            await aPlayer.playCurrentLevel();

            await aPlayer.enterAWrongAnswer();

            await aPlayer.pressEnter();

            await assertCalculationWrongMessageShown();
        });

        spec.it("hitting the Enter key without entering a number before does nothing", async function () {
            await aPlayer.startGame();
            await aPlayer.playCurrentLevel();

            await aPlayer.pressEnter();

            await assertNoAnswerFeedbackIsShownToTheUser();
        });
    });

}