import {AsyncStorage} from "react-native";

export const RECEIVE_PLAYED_LEVELS_INFO = 'RECEIVE_PLAYED_LEVELS_INFO';

export function receivePlayedLevelsInfo(levels) {
    return {
        type: RECEIVE_PLAYED_LEVELS_INFO,
        levels: levels
    }
}

export function getPlayedLevelsInfo() {
    return (dispatch) => {
        AsyncStorage.getItem('@Moravec:levels').then((result) => {
            if (result) {
                const levels = JSON.parse(result);
                dispatch(receivePlayedLevelsInfo(levels));
            }
        });
    }
}