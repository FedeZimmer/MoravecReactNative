import {SharedPreferences} from "./SharedPreferences";

export class FakedSharedPreferences extends SharedPreferences {
    constructor() {
        super();
        this._preferencesDict = {}
    }

    async setName() {
        // does nothing
    }

    async setMultiple(dictObj) {
        this._preferencesDict = dictObj;
    }

    async getAll() {
        return this._preferencesDict;
    }
}