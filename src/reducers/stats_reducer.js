import {OperationCategory} from "../models/operations/Category";
import {CALCULATE_STATS} from "../actions/stats_actions";

const initialState = {
    operationCategoryStats: null,
};

function trialsDataPerCategory(levelsHistory) {
    let trialsTimePerCategory = {};
    let isCorrectPerCategory = {};
    OperationCategory.allCategories().forEach((category) => {
        trialsTimePerCategory[category.codename()] = [];
        isCorrectPerCategory[category.codename()] = [];
    });

    levelsHistory.forEach(levelHistory => {
        levelHistory.trials.forEach((trial) => {
            const categoryName = trial.operation.opType;
            trialsTimePerCategory[categoryName].push(trial.totalTime);
            isCorrectPerCategory[categoryName].push(trial.isCorrect);
        });
    });

    return [trialsTimePerCategory, isCorrectPerCategory];
}

function effectiveness(isCorrectArray) {
    const totalCorrect = isCorrectArray.filter((isCorrect) => isCorrect).length;
    const totalTrials = isCorrectArray.length;

    return totalCorrect / totalTrials;
}

function averageTime(trialsTime) {
    const totalTime = trialsTime.reduce((accumTime, trialTime) => accumTime + trialTime);
    const totalTrials = trialsTime.length;

    return totalTime / totalTrials;
}

export function statsReducer(state = initialState, action) {
    switch (action.type) {
        case CALCULATE_STATS:
            if (action.levelsHistory.length > 0) {
                const [trialsTime, isCorrectArray] = trialsDataPerCategory(action.levelsHistory);

                const operationCategoryStats = OperationCategory.allCategories().map((category) => {
                    const categoryName = category.codename();
                    const totalTrialsForCategory = isCorrectArray[categoryName].length;

                    if (totalTrialsForCategory > 0) {
                        return {
                            category: category,
                            effectiveness: effectiveness(isCorrectArray[categoryName]),
                            averageTime: averageTime(trialsTime[categoryName]),
                            responseTimes: trialsTime[categoryName],
                            hasStats: true,
                        }
                    } else {
                        return {
                            category: category,
                            hasStats: false,
                        }
                    }
                });

                return {
                    ...initialState,
                    operationCategoryStats: operationCategoryStats
                };
            } else {
                return {
                    ...initialState,
                    operationCategoryStats: OperationCategory.allCategories().map((category) => (
                        {
                            category: category,
                            hasStats: false
                        }
                    ))
                };
            }
        default:
            return state
    }
}