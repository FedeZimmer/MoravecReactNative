import React from "react";
import {Platform, StatusBar, View} from "react-native";
import {Spinner} from "native-base";
import {MAIN_STYLES, spinnerColor} from "../styles/main/styles";
import {Version1DataMigrator} from "../android_v1_migration/Version1DataMigrator";
import {AppDataStorage} from "../storage/AppDataStorage";
import {sendPersonalInfo} from "../send_data";
import SplashScreen from 'react-native-splash-screen'


// Hiding StatusBar for all screens
StatusBar.setHidden(true);

export class LoadingAppScreen extends React.Component {
    componentDidMount() {
        SplashScreen.hide();

        this._migrateV1DataIfNeeded().then(() => {
            this._wasPersonalInfoCompletedBefore().then((wasCompletedBefore) => {
                if (!wasCompletedBefore) {
                    this.goToPersonalInfo();
                } else {
                    this._retrySendPersonalInfoIfNotSentBefore().then(() => {
                        this.goToHome();
                    });
                }
            });
        });
    }

    async _migrateV1DataIfNeeded() {
        if (Platform.OS !== "android") {
            return;
        }

        const wasMigratedBefore = await Version1DataMigrator.wasMigratedBefore();
        if (!wasMigratedBefore) {
            const migrator = Version1DataMigrator.newForProduction();
            return migrator.migrateAll();
        }
    }

    async _wasPersonalInfoCompletedBefore() {
        return await AppDataStorage.exists('personalInfo');
    }

    async _retrySendPersonalInfoIfNotSentBefore() {
        const savedPersonalInfo = await AppDataStorage.fetch('personalInfo');
        if (!savedPersonalInfo.sentToBackend) {
            return sendPersonalInfo(savedPersonalInfo);
        }
    }

    goToHome() {
        this.props.navigation.navigate('Home');
    };

    goToPersonalInfo() {
        this.props.navigation.navigate('PersonalInfo');
    };

    render() {
        return (
            <View style={MAIN_STYLES.main}>
                <Spinner color={spinnerColor}/>
            </View>
        )
    }
}