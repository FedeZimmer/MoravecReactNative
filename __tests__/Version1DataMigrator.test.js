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


test('can get played levels stats correctly from SharedPreferences after playing 1st level (and not passing it)', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "0,0,0,0,",
        "Arcade_Times": "38059,0,0,0,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 0,
            levelCompleted: false
        },
    });
});

test('can get played levels stats correctly from SharedPreferences after completing 1st level', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "3,0,0,0,0,",
        "Arcade_Times": "38059,0,0,0,0,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 3,
            levelCompleted: true
        },
    });
});


test('can get played levels stats correctly from SharedPreferences after completing 1st level and not the 2nd', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "3,0,0,0,0,",
        "Arcade_Times": "38059,28780,0,0,0,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 3,
            levelCompleted: true
        },
        2: {
            totalTrialsTime: 28780,
            stars: 0,
            levelCompleted: false
        },
    });
});

test('can get played levels stats correctly from SharedPreferences after completing 1st and 2nd levels', async () => {
    const sharedPreferences = new FakedSharedPreferences();
    await sharedPreferences.setMultiple({
        "Arcade_Stats": "3,2,0,0,0,",
        "Arcade_Times": "38059,28780,0,0,0,",
    });

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const levelData = await dataMigrator.getPlayedLevelsStats();

    expect(levelData).toEqual({
        1: {
            totalTrialsTime: 38059,
            stars: 3,
            levelCompleted: true
        },
        2: {
            totalTrialsTime: 28780,
            stars: 2,
            levelCompleted: true
        },
    });
});

test('can get stats per operation correctly from SharedPreferences (never played)', async () => {
    const sharedPreferences = new FakedSharedPreferences();

    const dataMigrator = new Version1DataMigrator(sharedPreferences, mockedDeviceInfoClass());

    const statisticsPerOperation = await dataMigrator.getStatsPerOperation();

    expect(statisticsPerOperation).toEqual([
            {categoryCodename: "1d+1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "1dx1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "2d+2d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "2dx1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "3dx1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(2d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(3d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(4d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []}
        ]
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

    expect(statisticsPerOperation).toEqual([
            {categoryCodename: "1d+1d", correctTrialsTimes: [34346, 42345, 43123], incorrectTrialsTimes: []},
            {categoryCodename: "1dx1d", correctTrialsTimes: [38059, 28780], incorrectTrialsTimes: [3566, 2545, 123]},
            {categoryCodename: "2d+2d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "2dx1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "3dx1d", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(2d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(3d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []},
            {categoryCodename: "(4d)^2", correctTrialsTimes: [], incorrectTrialsTimes: []},
        ]
    );
});