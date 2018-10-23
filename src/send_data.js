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

const ARCADE_GAME_TYPE = 'Arcade';
const PRACTICE_GAME_TYPE = 'Practice';

export function sendUnsentGameTrials() {
    sendUnsentTrials(ARCADE_GAME_TYPE)
}

export function sendUnsentPracticeTrials() {
    sendUnsentTrials(PRACTICE_GAME_TYPE)
}

function sendUnsentTrials(gameType) {
    AppDataStorage.fetch('trialsHistory').then((trialsHistory) => {
        const allUnsentTrials = filterUnsentTrials(trialsHistory);

        const totalTrials = trialsHistory.length;

        const totalTrialsSentBefore = totalTrials - allUnsentTrials.length;

        sendTrials(allUnsentTrials, totalTrialsSentBefore, trialsHistory, gameType);
    });
}

function filterUnsentTrials(trials) {
    return trials.filter((trial) => !trial.hasOwnProperty('sentToBackend') || !trial['sentToBackend']);
}

function sendTrials(allUnsentTrials, totalTrialsSentBefore, trialsHistory, gameType) {
    new ApiClient().sendTrials(allUnsentTrials, totalTrialsSentBefore, gameType).then(() => {
        const markedHistory = markTrialsAsSent(trialsHistory);
        AppDataStorage.save('trialsHistory', markedHistory);
    });
}

function markTrialsAsSent(trials) {
    return trials.map((trial) => {
        return {
            ...trial,
            sentToBackend: true,
        };
    });
}