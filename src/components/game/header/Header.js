import React from 'react';
import {View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import CalculationTimer from "./CalculationTimer";
import Hints from "./Hints";
import {LevelState} from "./LevelState";
import {UserAnswerFeedback} from "./UserAnswerFeedback";
import CountdownBar from "./CountdownBar";


const withFeedback = function (Header) {
    return class extends React.Component {
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

        render() {
            if (this.state.showFeedback) {
                return <UserAnswerFeedback key={1} lastAnswerData={this.props.lastAnswerData}
                                           onTimeout={this.hideFeedbackBar}/>
            } else {
                return <Header {...this.props}/>
            }
        }
    }
};


class PracticeHeader extends React.Component {
    render() {
        return (
            <View key={1} style={HEADER_STYLES.headerPractice}>
                <CalculationTimer startTime={this.props.startTime}/>
                <Hints/>
            </View>
        )
    }
}

class GameHeader extends React.Component {
    render() {
        return [
            <View key={1} style={HEADER_STYLES.headerGame}>
                <CalculationTimer startTime={this.props.startTime}/>
                <Hints/>
                <LevelState totalTrials={this.props.totalTrials} currentTrialNumber={this.props.currentTrialNumber}/>
            </View>,
            <CountdownBar key={2} startTime={this.props.startTime} showTime={this.props.countdownBarShowTime}/>
        ]
    }
}

export const PracticeHeaderWithFeedback = withFeedback(PracticeHeader);
export const GameHeaderWithFeedback = withFeedback(GameHeader);