import {AsyncStorage} from "react-native";
import {sendPersonalInfo} from "./main_actions";

export const AGREE_TERMS = 'AGREE_TERMS';

export function agreeTerms() {
    return (dispatch, getState) => {
        dispatch({
            type: AGREE_TERMS,
        });
    }
}

export function savePersonalInfo(personalInfo) {
    return (dispatch, getState) => {
        personalInfo['sentToBackend'] = false;
        AsyncStorage.setItem('@moravec:personalInfo', JSON.stringify(personalInfo)).then(() => {
            sendPersonalInfo(personalInfo);
        });
    }
}
