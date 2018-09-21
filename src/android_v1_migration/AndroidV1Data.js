export class AndroidV1Data {
    constructor(sharedPreferences, deviceInfoClass) {
        this._deviceInfoClass = deviceInfoClass;
        this._sharedPreferences = sharedPreferences;
        this._dictData = null;
    }

    async wasPersonalDataSent() {
        const askString = await this._getValue("Ask");
        return askString === "2";
    }

    async getLevelsCompleted() {
        const levelCompletedArcadeString = await this._getValue("Levels_Completed_Arcade");
        return this._integerFrom(levelCompletedArcadeString) || 1;
    }

    async getLevelsStars() {
        const string = await this._getValue("Arcade_Stats");
        return this._arrayOfIntegersFrom(string);
    }

    async getLevelsTotalTimes() {
        const string = await this._getValue("Arcade_Times");
        return this._arrayOfIntegersFrom(string);
    }

    async getCorrectTimesForOperation(operationCodename) {
        const correctKey = operationCodename;
        const correctTimesString = await this._getValue(correctKey);
        return this._arrayOfIntegersFrom(correctTimesString);
    }

    async getIncorrectTimesForOperation(operationCodename) {
        const incorrectKey = `${operationCodename}inc`;
        const correctTimesString = await this._getValue(incorrectKey);
        return this._arrayOfIntegersFrom(correctTimesString);
    }

    async getRaw() {
        return this._getAllStoredData();
    }

    // private - low-level accessors

    async _getData(key) {
        if (this._dictData === null) {
            await this._readData();
        }
        return this._dictData[key]
    }

    async _readData() {
        this._dictData = await this._getAllStoredData();
    }

    async _getAllStoredData() {
        await this._initSharedPreferences();
        const preferencesDict = await this._sharedPreferences.getAll();
        return preferencesDict;
    }

    async _initSharedPreferences() {
        const sharedPreferencesName = `${this._deviceInfoClass.getBundleId()}_preferences`;
        await this._sharedPreferences.setName(sharedPreferencesName);
    }

    // private - testing

    async _hasValue(key) {
        return await this._getData(key) !== undefined;
    }

    // private - accessors

    async _getValue(key) {
        return await this._hasValue(key) ? this._getData(key) : "";
    }

    // private - converters

    _arrayOfIntegersFrom(stringValue) {
        if (stringValue === "") {
            return [];
        }
        const asArray = stringValue.split(',').slice(0, -1);
        return asArray.map((value) => parseInt(value));
    }

    _integerFrom(stringValue) {
        return parseInt(stringValue);
    }
}