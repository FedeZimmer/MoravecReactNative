import React from 'react';
import {Text, View} from "react-native";

import {HEADER_STYLES} from "./styles";


export default class LevelState extends React.Component {
    constructor(props) {
        super(props);
    }

    remainingTrials() {
        return this.props.trials.length + 1;
    }

    totalTrials() {
        return this.props.totalTrials;
    }

    render() {
        return (
            <View style={HEADER_STYLES.remainingTrialsContainer}>
                <Text style={HEADER_STYLES.remainingTrials}>
                    {this.remainingTrials()} / {this.totalTrials()}
                </Text>
            </View>
        )
    }
}