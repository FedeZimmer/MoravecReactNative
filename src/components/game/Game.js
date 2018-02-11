import React from "react";
import {GAME_STYLES} from "../../styles/game/calculator/styles";
import UserAnswerFeedback from "./UserAnswerFeedback";
import Header from "./header/Header";
import CountdownBar from "./CountdownBar";
import Calculator from "./calculator/Calculator";
import {View} from "react-native";
import KeepAwake from "react-native-keep-awake";

export class Game extends React.Component {
    componentDidMount() {
        KeepAwake.activate();
    }

    componentWillUnmount() {
        KeepAwake.deactivate();
    }

    render() {
        return (
            <View style={GAME_STYLES.game}>
                <UserAnswerFeedback feedback={this.props.feedback}/>
                <Header time={this.props.time} currentTrial={this.props.trials.length + 1}
                        totalTrials={this.props.totalTrials} visible={this.props.header.visible} />
                <CountdownBar time={this.props.time} maxTimeForCountdownInMs={this.props.maxTimeForCountdownInMs}/>
                <Calculator operation={this.props.trial.operation} input={this.props.trial.input}
                            onEraseInput={this.props.eraseInput} onTypeInput={this.props.typeInput} onSubmit={this.props.onSubmit}/>
            </View>
        );
    }
}