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

    sendTrials(trialsToSend, lastTrialNumberSent) {
        let trialNumber = lastTrialNumberSent;

        const trialsInfoToSend = trialsToSend.map((trial) => {
            trialNumber = trialNumber + 1;
            return {
                UUID: DeviceInfo.getUniqueID(),
                Trial_Number: trialNumber,
                Game_Type: 'Arcade', // mock
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
                Start_Date: moment(trial.startTime).toArray(),
                End_Date: moment(trial.submitTime).toArray(),
                Erase: trial.hasErased ? 1 : 0,
                Hide_Question: 0, // mock
                Hints_Available: 3, // mock
                Hint_Shown: 0, // mock
                Session_Trial: trial.trialNumber,
                Session_Correct: trial.totalCorrectUntilNow,
                Correct_In_A_Row: trial.correctInARowUntilNow,
            }
        });

        return this._call('POST', "/api/v2/trials", trialsInfoToSend);
    }

    // TODO: Not used yet. Unimplemented backend.
    sendPersonalData() {
        const personalData = {
            UUID: DeviceInfo.getUniqueID(),
            System_Version: `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`,
            System_Language: DeviceInfo.getDeviceLocale(),
            App_Version: DeviceInfo.getReadableVersion(),
            App_Language: 'es',  // mock
            Birthdate: moment("1988-06-02").toArray(),  // mock
            Studies: 'College completed',  // mock
            Gender: 'Female',  // mock
            Hand: 'Right handed',  // mock
            Name: 'John Mock',  // mock
            Email: 'john@mock.com',  // mock
            Native_Language: 'English',  // mock
            Number_Of_Languages: 3,  // mock
            Music_Listener: 'Any',  // mock
            Music_Instrumentist: 'Moderate',  // mock
            Music_Theory: 'Advance',  // mock
        };

        return this._call('POST', "/api/v2/personal-data", personalData);
    }
}