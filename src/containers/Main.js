import React from "react";
import {connect} from 'react-redux'
import {StatusBar, View} from "react-native";
import {Spinner} from "native-base";

import {migrateV1DataIfNeeded, verifyIfPersonalInfoIsSavedOnDevice} from "../actions/main_actions";
import {MAIN_STYLES, spinnerColor} from "../styles/main/styles";

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            migrateV1DataIfNeeded: (callback) => {
                dispatch(migrateV1DataIfNeeded(callback))
            },
            verifyIfPersonalInfoIsSavedOnDevice: (callback) => {
                dispatch(verifyIfPersonalInfoIsSavedOnDevice(callback))
            }
        }
    }
};

// Hiding StatusBar for all screens
StatusBar.setHidden(true);

class Main extends React.Component {
    static navigationOptions = {
        title: 'Main',
        header: null
    };

    constructor(props) {
        super(props);

        this.redirectToCorrectScreen = this.redirectToCorrectScreen.bind(this);
    }

    componentDidMount() {
        this.props.actions.migrateV1DataIfNeeded(() => {
            this.props.actions.verifyIfPersonalInfoIsSavedOnDevice(this.redirectToCorrectScreen);
        });
    }

    redirectToCorrectScreen(personalInfoCompleted) {
        if (personalInfoCompleted) {
            this.goToHome();
        } else {
            this.goToPersonalInfo();
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);