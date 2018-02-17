import React from 'react';
import {Text, View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";


export default class LevelState extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={HEADER_STYLES.remainingTrialsContainer}>
                <Text style={HEADER_STYLES.remainingTrials}>
                    {this.props.currentTrial} / {this.props.totalTrials}
                </Text>
            </View>
        )
    }
}