import Config from "react-native-config"
import moment from "moment/moment";
import * as DeviceInfo from "react-native-device-info";

export class ApiClient {
    static baseUrl() {
        return Config.API_URL;
    }

    _call(method = 'GET', url, body) {
        const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
        const fetchOptions = {method: method, headers: headers};

        if (method !== 'GET') {
            Object.assign(fetchOptions, {body: JSON.stringify(body)});
        }

        return fetch(ApiClient.baseUrl() + url, fetchOptions).then((response) => {
            return response.json();
        }, (error) => {
            console.error('Ocurrió un error al conectar servidor ' + ApiClient.baseUrl());
        });
    }

    sendTrials(trails) {
        const appVersion = `${DeviceInfo.getApplicationName()} ${DeviceInfo.getReadableVersion()}`;
        const deviceInfo = `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`;
        const lang = DeviceInfo.getDeviceLocale();
        const timeZone = DeviceInfo.getTimezone();

        const appVersionString = `${appVersion} | ${deviceInfo} | ${lang} | ${timeZone}`;

        const trialsInfoToSend = trails.map((trial) => {
            return {
                Game_Type: 'Arcade',
                Level: trial.levelNumber,
                Operation_Type: trial.operation.opType,
                Operand_1: trial.operation.operand1,
                Operator: trial.operation.operator,
                Operand_2: trial.operation.operand2,
                Correct_Result: trial.operation.correctResult,
                Entered_Answer: trial.currentUserInput,
                Correct: trial.isCorrect ? 1 : 0,
                Response_Vector: trial.keysPressed,
                Response_Times: trial.responseTimes,
                Total_Time: trial.totalTime,
                Max_Time: trial.operation.maxSolveTime,
                Time_Exceeded: trial.timeExceeded ? 1 : 0,
                Start_Date: moment(trial.startTime).format("DD/MM/YYYY HH:mm:ss"),
                End_Date: moment(trial.submitTime).format("DD/MM/YYYY HH:mm:ss"),
                Erase: trial.hasErased ? 1 : 0,
                Session_Trial: trial.trialNumber,
                App_Version: appVersionString,
            }
        });

        return this._call('POST', "/api/v2/trials", trialsInfoToSend);
    }
}