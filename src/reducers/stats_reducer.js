import {OperationCategory} from "../models/operations/Category";
import {CALCULATE_STATS} from "../actions/stats_actions";

const initialState = {
    operationCategoryStats: null,
};

function trialsDataPerCategory(levelsHistory) {
    let totalTrialsPerCategory = {};
    let correctTrialsTimePerCategory = {};
    OperationCategory.allCategories().forEach((category) => {
        correctTrialsTimePerCategory[category.codename()] = [];
        totalTrialsPerCategory[category.codename()] = 0;
    });

    levelsHistory.forEach(levelHistory => {
        levelHistory.trials.forEach((trial) => {
            const categoryName = trial.operation.opType;
            totalTrialsPerCategory[categoryName]++;
            if (trial.isCorrect) {
                correctTrialsTimePerCategory[categoryName].push(trial.totalTime);
            }
        });
    });

    return [correctTrialsTimePerCategory, totalTrialsPerCategory];
}

function effectiveness(corrrectTrialsTimes, totalTrials) {
    return corrrectTrialsTimes.length / totalTrials;
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
                const [correctTrialsTimes, totalTrials] = trialsDataPerCategory(action.levelsHistory);

                const operationCategoryStats = OperationCategory.allCategories().map((category) => {
                    const categoryName = category.codename();
                    const corrrectTrialsTimesForCategory = correctTrialsTimes[categoryName];
                    const totalTrialsForCategory = totalTrials[categoryName];

                    if (totalTrialsForCategory > 0) {
                        return {
                            category: category,
                            effectiveness: effectiveness(corrrectTrialsTimesForCategory,
                                totalTrialsForCategory),
                            averageTime: averageTime(corrrectTrialsTimesForCategory),
                            responseTimes: corrrectTrialsTimesForCategory,
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