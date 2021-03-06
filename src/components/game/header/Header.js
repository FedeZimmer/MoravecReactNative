import React from 'react';
import {View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import CalculationTimer from "./CalculationTimer";
import {Hints} from "./Hints";
import {LevelState} from "./LevelState";
import {UserAnswerFeedback} from "./UserAnswerFeedback";
import CountdownBar from "./CountdownBar";


export class PracticeHeader extends React.Component {
    render() {
        return (
            <View style={HEADER_STYLES.headerPractice}>
                <CalculationTimer startTime={this.props.startTime}/>
                <UserAnswerFeedback lastAnswerData={this.props.lastAnswerData}/>
            </View>
        )
    }
}

export class GameHeader extends React.Component {
    _renderLevelInfo() {
        if (this.props.hintShown) {
            return null;
        } else {
            return (
                <View key={1} style={HEADER_STYLES.gameInfo}>
                    <CalculationTimer startTime={this.props.startTime}/>
                    <Hints hintsAvailable={this.props.hintsAvailable} onPress={this.props.onAskForHint}/>
                    <LevelState totalTrials={this.props.totalTrials} currentTrialNumber={this.props.currentTrialNumber}/>
                    <UserAnswerFeedback lastAnswerData={this.props.lastAnswerData}/>
                </View>
            )
        }
    }

    _headerGrow() {
        return this.props.hintShown ? 0.2 : 1;
    }

    render() {
        return (
            <View style={[{flexGrow: this._headerGrow()}, HEADER_STYLES.headerGame]}>
                {this._renderLevelInfo()}
                <CountdownBar key={2} startTime={this.props.startTime} showTime={this.props.countdownBarShowTime}/>
            </View>
        )
    }
}