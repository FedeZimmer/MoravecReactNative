import React from "react";
import {GAME_STYLES} from "../../styles/game/calculator/styles";
import Header from "./header/Header";
import {Calculator} from "./calculator/Calculator";
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
                <Header startTime={this.props.currentTrial.startTime}
                        currentTrialNumber={this.props.currentLevel.trials.length + 1}
                        totalTrials={this.props.currentLevel.totalTrials}
                        lastAnswerData={this.props.lastAnswerData}
                        countdownBarShowTime={this.props.currentTrial.operation.maxSolveTime}/>
                <Calculator operation={this.props.currentTrial.operation}
                            input={this.props.currentTrial.currentUserInput}
                            onEraseInput={this.props.onEraseInput} onTypeInput={this.props.onTypeInput}
                            onSubmit={this.props.onSubmit}/>
            </View>
        );
    }
}