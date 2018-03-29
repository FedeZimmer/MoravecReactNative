export function gameSpec(spec) {
    spec.describe('As a user', function () {
        spec.it("hitting the Play button should show me the level selection screen", async function () {
            await spec.exists('Home.PlayButton');
            await spec.press('Home.PlayButton');
            await spec.exists('LevelSelection.PlayLevel');
        });

        spec.it("I can enter any number and it will be shown in the screen", async function () {
            await spec.press('Home.PlayButton');
            await spec.pause(2000);
            // FIXME: This should be done automatically but it fails... For now, it has to be done manually
            // await spec.press('LevelSelection.PlayLevel');
            await spec.press('NumberKey.1');
            const operationDisplayComponent = await spec.findComponent('Calculator.OperationDisplay');
            // TODO: Think if using operationResult() is the best way to scrap the value shown on screen...
            if (operationDisplayComponent.operationResult() !== 1) {
                throw Error("Was expecting to display number 1 on screen, but it does not!");
            }
        });

        spec.it("I can enter a sequence of numbers and all the digits will be shown in the screen in correct order", async function () {
            throw Error("Not implemented yet!");
        });

        spec.it("hitting the Enter key without entering a number before does nothing", async function () {
            throw Error("Not implemented yet!");
        });

        spec.it("while playing I can hit the Enter key after entering a correct answer and the game will tell me its OK", async function () {
            throw Error("Not implemented yet!");
        });

        spec.it("while playing I can hit the Enter key after entering a WRONG answer and the game will tell me its wrong", async function () {
            throw Error("Not implemented yet!");
        });
    });

}