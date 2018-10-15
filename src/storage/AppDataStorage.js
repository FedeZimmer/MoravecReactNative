import {AsyncStorage} from "react-native";

export class AppDataStorage {
    static save(key, value) {
        return AsyncStorage.setItem(`@moravec:${key}`, JSON.stringify(value));
    }

    static fetch(key) {
        return new Promise((resolve) => {
            AsyncStorage.getItem(`@moravec:${key}`).then((jsonData) => {
                if (jsonData !== null) {
                    return resolve(JSON.parse(jsonData));
                } else {
                    return resolve(null);
                }
            });
        });
    }

    static exists(key) {
        return new Promise((resolve) => {
            AsyncStorage.getItem(`@moravec:${key}`).then((value) => {
                return resolve(value !== null);
            })
        });
    }
}