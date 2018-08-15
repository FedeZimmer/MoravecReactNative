import {AsyncStorage} from "react-native";

export const CALCULATE_STATS = 'CALCULATE_STATS';

export function fetchOperationCategoryStats() {
    return (dispatch) => {
        AsyncStorage.getItem('@moravec:game').then((gameInfoJSON) => {
            let levelsHistory = [];
            if (gameInfoJSON !== null) {
                levelsHistory = JSON.parse(gameInfoJSON).playedLevelsHistory;
            }
            dispatch(calculateStats(levelsHistory));
        });
    }
}

function calculateStats(levelsHistory) {
    return {
        type: CALCULATE_STATS,
        levelsHistory: levelsHistory
    }
}