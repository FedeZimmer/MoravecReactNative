import {AppDataStorage} from "../storage/AppDataStorage";

export const LOAD_LEVELS_FROM_FILE = 'LOAD_LEVELS_FROM_FILE';
export const LOAD_LEVEL_STATS = 'LOAD_LEVEL_STATS';

export function loadLevels() {
    return {
        type: LOAD_LEVELS_FROM_FILE,
    }
}

export function getSavedLevelStatsFromDevice() {
    return (dispatch) => {
        AppDataStorage.fetch('playedLevelsStats').then(playedLevelsStats => {
            dispatch({
                type: LOAD_LEVEL_STATS,
                playedLevelsStats: playedLevelsStats || {},
            });
        });
    }
}