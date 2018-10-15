import {ApiClient} from "./api_client/ApiClient";
import {AppDataStorage} from "./storage/AppDataStorage";

export function sendPersonalInfo(personalInfo) {
    return new Promise((resolve) => {
        new ApiClient().sendPersonalData(personalInfo).then(() => {
            AppDataStorage.save('personalInfo', {...personalInfo, sentToBackend: true}).then(() => {
                resolve();
            });
        });
    });
}

export function sendUnsentTrials() {
    AppDataStorage.fetch('playedLevelsHistory').then((playedLevelsHistory) => {
        const allUnsentTrials = getAllUnsentTrials(playedLevelsHistory);

        const totalTrials = playedLevelsHistory.reduce((accum, level) => accum + level.trials.length, 0);

        const totalTrialsSentBefore = totalTrials - allUnsentTrials.length;

        sendTrials(allUnsentTrials, totalTrialsSentBefore, playedLevelsHistory);
    });
}

function getAllUnsentTrials(levels) {
    return levels.map((level) => {
        return level.trials.filter((trial) => {
            return !trial.hasOwnProperty('sentToBackend') || !trial['sentToBackend'];
        });
    }).reduce(function (allUnsentTrails, unsentTrailsOfLevel) {
        return allUnsentTrails.concat(unsentTrailsOfLevel);
    });
}

function sendTrials(allUnsentTrials, totalTrialsSentBefore, playedLevelsHistory) {
    const gameType = 'Arcade';
    new ApiClient().sendTrials(allUnsentTrials, totalTrialsSentBefore, gameType).then(() => {
        console.log("--DEBUG-- API: POST /api/v2/trials successful!");

        const markedHistory = markAllTrialsAsSentOnDevice(playedLevelsHistory);

        AppDataStorage.save('playedLevelsHistory', markedHistory);
    });
}

function markAllTrialsAsSentOnDevice(playedLevelsHistory) {
    return playedLevelsHistory.map((level) => {
        return {
            ...level,
            trials: level.trials.map((trial) => {
                return {
                    ...trial,
                    sentToBackend: true,
                }
            }),
        };
    });
}