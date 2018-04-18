import {OperationCategory} from "../category/Category";
import {OperationFactory} from "../operations/OperationFactory";

export const BASIC = 'básico';
export const MEDIUM = 'medio';
export const DIFFICULT = 'difícil';


export class PracticeMode {
    static difficultyLevels () {
        return [BASIC, MEDIUM, DIFFICULT];
    };

    constructor(categoryName, difficulty) {
        if (!PracticeMode.difficultyLevels().includes(difficulty)) {
            throw 'There is no level of difficulty ' + difficulty;
        }

        this._category = new OperationCategory(categoryName);
        this._difficulty = difficulty;
    }

    createRandomOperation() {
        return OperationFactory.createRandom(this._category);
    }
}