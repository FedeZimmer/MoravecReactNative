import {LOAD_LEVEL_STATS, LOAD_LEVELS_FROM_FILE} from '../actions/level_selection_actions'
import {OperationCategory} from "../models/operations/Category";
import {Level} from "../models/level/Level";

const levelsConfigurationFile = require('../../assets/levels.json');

const initialState = {
    levels: undefined,
    numLevels: undefined,
    playedLevelsStats: null,
};

function obtainLevels() {
    let levels = {};
    Object.entries(levelsConfigurationFile).forEach(([levelNumber, levelInfo]) => {
        let levelCategories = [];
        let levelCategoriesProbability = [];
        Object.entries(levelInfo['probabilityPerCategories']).forEach(([categoryName, probability]) => {
            if (probability !== 0) {
                levelCategories.push(new OperationCategory(categoryName));
                levelCategoriesProbability.push(probability);
            }
        });
        levels[levelNumber] = new Level(levelNumber, levelCategories, levelCategoriesProbability, levelInfo['probabilityThatOperationIsHidden']);
    });
    return levels;
}

export function levelSelectionReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_LEVELS_FROM_FILE:
            const levels = obtainLevels();
            return {
                ...state,
                levels: levels,
                numLevels: Object.keys(levels).length,
            };

        case LOAD_LEVEL_STATS:
            return {
                ...state,
                playedLevelsStats: action.playedLevelsStats,
            };

        default:
            return state
    }
}