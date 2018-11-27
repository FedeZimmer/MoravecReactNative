import React from 'react';
import {Text, View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import {makeItTestable} from "../../../utils/testable_hoc";


export let LevelState = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={HEADER_STYLES.remainingTrialsContainer}>
                <Text style={HEADER_STYLES.remainingTrials}>
                    {this.props.currentTrialNumber}/{this.props.totalTrials}
                </Text>
            </View>
        )
    }
};

LevelState = makeItTestable('LevelState')(LevelState);