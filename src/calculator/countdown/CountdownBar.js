import React from 'react'
import {View} from "react-native";

import {COUNTDOWN_STYLES} from "./styles";
import {getWindowWidth} from "../../utils";


export default class CountdownBar extends React.Component {
    constructor(props) {
        super(props);
    }

    remainingCountdownPercentage() {
        let remainingTime = this.props.maxTimeForCountdownInMs - this.props.time;
        let percentageRemaining = remainingTime / this.props.maxTimeForCountdownInMs;

        if (percentageRemaining < 0) {
            percentageRemaining = 0;
        }

        return percentageRemaining;
    }

    countdownBarWidth() {
        return getWindowWidth() * this.remainingCountdownPercentage();
    }

    render() {
        return (
            <View style={Object.assign({}, COUNTDOWN_STYLES.countdown, {width: this.countdownBarWidth()})}/>
        )
    }
}