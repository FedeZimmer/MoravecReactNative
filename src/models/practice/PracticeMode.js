import {OperationFactory} from "../operations/OperationFactory";
import I18n from "../../../i18n/i18n";

export const INITIAL = I18n.t('practice.practiceModeSelection.difficulties.initial');
export const INTERMEDIATE = I18n.t('practice.practiceModeSelection.difficulties.intermediate');
export const ADVANCED = I18n.t('practice.practiceModeSelection.difficulties.advanced');


export class PracticeMode {
    static difficultyLevels() {
        return [INITIAL, INTERMEDIATE, ADVANCED];
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