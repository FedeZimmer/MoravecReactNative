import React from 'react'
import {View} from "react-native";

import {getWindowWidth} from "../../utils";
import {COUNTDOWN_STYLES} from "../../styles/game/calculator/styles";


export default class CountdownBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    remainingCountdownPercentage() {
        const elapsedTimeInMs = new Date().getTime() - this.props.startTime;
        let remainingTime = this.props.maxTimeForCountdownInMs - elapsedTimeInMs;
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