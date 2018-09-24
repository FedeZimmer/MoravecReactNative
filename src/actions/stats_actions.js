import {AppDataStorage} from "../storage/AppDataStorage";
import {emptyStats} from "../reducers/game_reducer";

export const CALCULATE_STATS = 'CALCULATE_STATS';

export function fetchOperationCategoryStats() {
    return (dispatch) => {
        let stats = emptyStats();
        AppDataStorage.fetch('stats').then((savedStats) => {
            if (savedStats !== null) {
                stats = savedStats;
            }
            dispatch(calculateStats(stats));
        });
    }
}

function calculateStats(stats) {
    return {
        type: CALCULATE_STATS,
        stats: stats
    }
}