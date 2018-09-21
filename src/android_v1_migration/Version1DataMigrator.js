import {OperationCategory} from "../models/operations/Category";
import {AndroidV1Data} from "./AndroidV1Data";
import {AsyncStorage} from "react-native";
import * as DeviceInfo from "react-native-device-info/deviceinfo";
import {NativeSharedPreferences} from "./shared_preferences/NativeSharedPreferences";

export class Version1DataMigrator {
    static async wasMigratedBefore() {
        const dataMigrated = await AsyncStorage.getItem("@moravec:dataMigrated");
        return dataMigrated !== null;
    }

    static newForProduction() {
        const nativeSharedPreferences = new NativeSharedPreferences();
        const deviceInfoClass = DeviceInfo;
        return new Version1DataMigrator(nativeSharedPreferences, deviceInfoClass);
    }

    constructor(sharedPreferences, deviceInfoClass) {
        this._androidV1Data = new AndroidV1Data(sharedPreferences, deviceInfoClass);
    }

    async migrateAll() {
        await this.migratePersonalDataSentStatus();
        await this.migratePlayedLevelsInfo();
        await this.migrateStatsPerOperation();
        await this._persistThatDataWasMigrated();
    }

    async migratePlayedLevelsInfo() {
        const playedLevelsInfo = await this.getPlayedLevelsInfo();
        await this._storePlayedLevelInfo(playedLevelsInfo);
    }

    async migrateStatsPerOperation() {
        const statsData = await this.getStatsPerOperation();
        await this._storeStatsData(statsData);
    }

    async migratePersonalDataSentStatus() {
        const wasPersonalDataSent = await this.wasPersonalDataSent();
        if (wasPersonalDataSent) {
            await this._persistThatPersonalDataWasSent();
        }
    }

    // get data

    async getAllStoredData() {
        return this._androidV1Data.getRaw();
    }

    async wasPersonalDataSent() {
        return await this._androidV1Data.wasPersonalDataSent();
    }

    async getPlayedLevelsInfo() {
        const levelsCompleted = await this._androidV1Data.getLevelsCompleted();
        const starsPerLevel = await this._androidV1Data.getLevelsStars();
        const trialsTimePerLevel = await this._androidV1Data.getLevelsTotalTimes();

        if (trialsTimePerLevel.length === 0 || starsPerLevel.length === 0) {
            return {};
        }

        return this._buildPlayedLevelsInfo(levelsCompleted, trialsTimePerLevel, starsPerLevel);
    }

    async getStatsPerOperation() {
        let statsPerOperation = {};

        const allCategories = OperationCategory.allCategories();

        for (const category of allCategories) {
            const codename = category.codename();
            statsPerOperation[codename] = await this._buildStatsForCategory(category);
        }

        return statsPerOperation;
    }

    // private - build data

    _buildPlayedLevelsInfo(levelsCompleted, trialsTimePerLevel, starsPerLevel) {
        let levelData = {};

        for (let numLevel = 1; numLevel <= levelsCompleted; numLevel++) {
            levelData[numLevel] = {
                totalTrialsTime: trialsTimePerLevel[numLevel - 1],
                stars: starsPerLevel[numLevel - 1]
            }
        }
        return levelData;
    }

    async _buildStatsForCategory(category) {
        const codename = category.codename();
        const correctTimes = await this._androidV1Data.getCorrectTimesForOperation(codename);
        const incorrectTimes = await this._androidV1Data.getIncorrectTimesForOperation(codename);

        return {
            correctTrialsTimes: correctTimes,
            incorrectTrialsTimes: incorrectTimes,
        }
    }

    // private - store data

    async _persistThatPersonalDataWasSent() {
        // NOTE: This normally has all the personal info data.
        // For now, we'll not migrate this data as it's not needed anymore (because was sent once before).
        await AsyncStorage.setItem("@moravec:personalInfo", JSON.stringify({sentToBackend: true}));
    }

    async _storeStatsData(statsData) {
        await AsyncStorage.setItem("@moravec:stats", JSON.stringify(statsData));
    }

    async _storePlayedLevelInfo(statsData) {
        await AsyncStorage.setItem("@moravec:playedLevelsInfo", JSON.stringify(statsData));
    }

    async _persistThatDataWasMigrated() {
        await AsyncStorage.setItem("@moravec:dataMigrated", JSON.stringify(true));
    }

}