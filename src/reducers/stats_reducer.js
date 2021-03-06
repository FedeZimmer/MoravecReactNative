import {CALCULATE_STATS} from "../actions/stats_actions";

const initialState = {
    operationCategoryStats: null,
};

function effectiveness(corrrectTrialsTimes, totalTrials) {
    return corrrectTrialsTimes.length / totalTrials;
}

function averageTime(trialsTime) {
    const totalTime = trialsTime.reduce((accumTime, trialTime) => accumTime + trialTime, 0);
    const totalTrials = trialsTime.length;

    return totalTime / totalTrials;
}

export function statsReducer(state = initialState, action) {
    switch (action.type) {
        case CALCULATE_STATS:
            const stats = action.stats;
            const operationCategoryStats = stats.map((operationStats) => {
                const numCorrectTrials = operationStats.correctTrialsTimes.length;
                const totalTrialsForCategory = numCorrectTrials + operationStats.incorrectTrialsTimes.length;

                if (numCorrectTrials > 0) {
                    return {
                        categoryCodename: operationStats.categoryCodename,
                        effectiveness: effectiveness(operationStats.correctTrialsTimes, totalTrialsForCategory),
                        averageTime: averageTime(operationStats.correctTrialsTimes),
                        responseTimes: operationStats.correctTrialsTimes,
                        hasStats: true,
                    }
                } else {
                    return {
                        categoryCodename: operationStats.categoryCodename,
                        hasStats: false,
                    }
                }
            });

            return {
                ...initialState,
                operationCategoryStats: operationCategoryStats
            };
        default:
            return state
    }
}