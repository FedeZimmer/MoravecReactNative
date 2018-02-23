import React from 'react';
import {View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import CalculationTimer from "./CalculationTimer";
import Hints from "./Hints";
import LevelState from "./LevelState";
import UserAnswerFeedback from "./UserAnswerFeedback";
import CountdownBar from "./CountdownBar";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFeedback: false,
        };
        this.hideFeedbackBar = this.hideFeedbackBar.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const newAnswerSubmitted = nextProps.lastAnswerData !== this.props.lastAnswerData;
        if (newAnswerSubmitted) {
            this.showFeedbackBar();
        }
    }

    showFeedbackBar() {
        this.setState({showFeedback: true});
    }

    hideFeedbackBar() {
        this.setState({showFeedback: false});
    }

    _renderBarContent() {
        if (this.state.showFeedback) {
            return (<UserAnswerFeedback key={1} lastAnswerData={this.props.lastAnswerData}
                                        onTimeout={this.hideFeedbackBar}/>)
        } else {
            return (
                <View key={1} style={HEADER_STYLES.header}>
                    <CalculationTimer startTime={this.props.startTime}/>
                    <Hints/>
                    <LevelState totalTrials={this.props.totalTrials}
                                currentTrialNumber={this.props.currentTrialNumber}/>
                </View>
            )
        }
    }

    render() {
        return [
            this._renderBarContent(),
            <CountdownBar key={2} startTime={this.props.startTime}
                          showTime={this.props.countdownBarShowTime}/>
        ]
    }
}