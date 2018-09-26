import {AsyncStorage, Platform} from "react-native";
import {ApiClient} from "../api_client/ApiClient";
import {Version1DataMigrator} from "../android_v1_migration/Version1DataMigrator";

export function verifyIfPersonalInfoIsSavedOnDevice(callback) {
    return (dispatch) => {
        let personalInfoIsCompleted = false;
        AsyncStorage.getItem('@moravec:personalInfo').then((personalInfoJSON) => {
            if (personalInfoJSON !== null) {
                personalInfoIsCompleted = true;
                const savedPersonalInfo = JSON.parse(personalInfoJSON);

                if (!savedPersonalInfo.sentToBackend) {
                    sendPersonalInfo(savedPersonalInfo);
                }
            }
            callback(personalInfoIsCompleted);
        });
    }
}

export function migrateV1DataIfNeeded(callback) {
    return (dispatch) => {
        if (Platform.OS !== "android") {
            callback();
        }

        Version1DataMigrator.wasMigratedBefore().then((wasMigrated) => {
            if (!wasMigrated) {
                const migrator = Version1DataMigrator.newForProduction();
                migrator.migrateAll().then(() => {
                    callback();
                });
            } else {
                callback();
            }
        });
    }
}

export function sendPersonalInfo(personalInfo) {
    new ApiClient().sendPersonalData(personalInfo).then(() => {
        AsyncStorage.setItem('@moravec:personalInfo', JSON.stringify({
            ...personalInfo,
            sentToBackend: true
        }));
    });
}
