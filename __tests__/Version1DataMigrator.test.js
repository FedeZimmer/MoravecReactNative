import {FakedSharedPreferences} from "../src/android_v1_migration/shared_preferences/FakedSharedPreferences";
import {Version1DataMigrator} from "../src/android_v1_migration/Version1DataMigrator";

function mockedDeviceInfoClass() {
    return class {
        static getBundleId() {
            return "fake_project"
        }
    };
}

test('can detect that personal data was NOT sent', async () => {
    const sharedPreferences = new FakedSharedPreferences();

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const wasPersonalDataSent = await dataMigrator.wasPersonalDataSent();

    expect(wasPersonalDataSent).toBeFalsy();
});

test('can detect that personal data was sent', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Ask": "2"
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const wasPersonalDataSent = await dataMigrator.wasPersonalDataSent();

    expect(wasPersonalDataSent).toBeTruthy();
});

test('can get played levels stats correctly from SharedPreferences (never played)', async () => {
    const sharedPreferences = new FakedSharedPreferences();

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({});
});


test('can get played levels stats correctly from SharedPreferences (played first level only)', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "1,0,0,0,",
        "Arcade_Times": "38059,0,0,0,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 1
        },
    });
});


test('can get played levels stats correctly from SharedPreferences', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "3,2,0,0,0,",
        "Arcade_Times": "38059,28780,0,0,0,",
        "Levels_Completed_Arcade": "2"
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 3
        },
        2: {
            totalTrialsTime: 28780,
            stars: 2
        },
    });
});

test('can get stats per operation correctly from SharedPreferences (never played)', async () => {
    const sharedPreferences = new FakedSharedPreferences();

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const statisticsPerOperation = await dataMigrator.getStatsPerOperation();

    expect(statisticsPerOperation).toEqual({
            "(3d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "(2d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "(4d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "1d+1d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "1dx1d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "2d+2d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "2dx1d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "3dx1d": {correctTrialsTimes: [], incorrectTrialsTimes: []}
        }
    );
});

test('can get stats per operation correctly from SharedPreferences', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "1dx1d": "38059,28780,",
        "1dx1dinc": "3566,2545,123,",
        "1d+1d": "34346,42345,43123,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const statisticsPerOperation = await dataMigrator.getStatsPerOperation();

    expect(statisticsPerOperation).toEqual({
            "(3d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "(2d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "(4d)^2": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "1d+1d": {correctTrialsTimes: [34346, 42345, 43123], incorrectTrialsTimes: []},
            "1dx1d": {correctTrialsTimes: [38059, 28780], incorrectTrialsTimes: [3566, 2545, 123]},
            "2d+2d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "2dx1d": {correctTrialsTimes: [], incorrectTrialsTimes: []},
            "3dx1d": {correctTrialsTimes: [], incorrectTrialsTimes: []}
        }
    );
});