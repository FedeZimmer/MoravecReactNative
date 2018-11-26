import {OperationFactory} from "../operations/OperationFactory";

export const INITIAL = 'INITIAL';
export const INTERMEDIATE = 'INTERMEDIATE';
export const ADVANCED = 'ADVANCED';


export class PracticeMode {
    static difficultyLevels() {
        return [INITIAL, INTERMEDIATE, ADVANCED];
    };

    constructor(category, difficulty) {
        if (!PracticeMode.difficultyLevels().includes(difficulty)) {
            throw 'There is no level of difficulty ' + difficulty;
        }

        this._category = category;
    }

    createRandomOperation() {
        return OperationFactory.createRandom(this._category);
    }
}