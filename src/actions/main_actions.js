import {AsyncStorage} from "react-native";
import {ApiClient} from "../api_client/ApiClient";

export function verifyIfPersonalInfoIsSavedOnDevice(callback) {
    return (dispatch) => {
        let personalInfoIsCompleted = false;
        AsyncStorage.getItem('@moravec:personalInfo').then((personalInfoJSON) => {
            if (personalInfoJSON !== null) {
                personalInfoIsCompleted = false;
                const savedPersonalInfo = JSON.parse(personalInfoJSON);

                if (!savedPersonalInfo.sentToBackend) {
                    sendPersonalInfo(savedPersonalInfo);
                }
            }
            callback(personalInfoIsCompleted);
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
