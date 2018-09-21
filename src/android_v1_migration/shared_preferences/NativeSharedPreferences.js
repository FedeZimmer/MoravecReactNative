import DefaultPreference from "react-native-default-preference";
import {SharedPreferences} from "./SharedPreferences";

export class NativeSharedPreferences extends SharedPreferences {
    async setName(name) {
        return DefaultPreference.setName(name);
    }

    async setMultiple(object) {
        return DefaultPreference.setMultiple(object);
    }

    async getAll() {
        return DefaultPreference.getAll();
    }
}