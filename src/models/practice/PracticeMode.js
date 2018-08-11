import {OperationFactory} from "../operations/OperationFactory";

export const BASIC = 'básico';
export const MEDIUM = 'medio';
export const DIFFICULT = 'difícil';


export class PracticeMode {
    static difficultyLevels() {
        return [BASIC, MEDIUM, DIFFICULT];
    };

    constructor(category, difficulty) {
        if (!PracticeMode.difficultyLevels().includes(difficulty)) {
            throw 'There is no level of difficulty ' + difficulty;
        }

        this._category = category;
        this._difficulty = difficulty;
    }

    createRandomOperation() {
        return OperationFactory.createRandom(this._category);
    }
}