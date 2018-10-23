import React from "react";
import {GAME_STYLES} from "../../styles/game/calculator/styles";
import {GameHeader, PracticeHeader} from "./header/Header";
import {Calculator} from "./calculator/Calculator";
import {View} from "react-native";
import KeepAwake from "react-native-keep-awake";
import {makeItTestable} from "../../utils/testable_hoc";
import {PLAYING} from "../../reducers/game_reducer";
import {PRACTICING} from "../../reducers/practice_reducer";
import {HintCard} from "./HintCard";

export let Game = class extends React.Component {
    componentDidMount() {
        KeepAwake.activate();
    }

    componentWillUnmount() {
        KeepAwake.deactivate();
    }

    _renderHeader() {
        if (this.props.state === PLAYING) {
            return <GameHeader startTime={this.props.currentTrial.startTime}
                               currentTrialNumber={this.props.sessionInfo.currentTrialNumber}
                               totalTrials={this.props.currentLevel.totalTrials}
                               lastAnswerData={this.props.lastAnswerData}
                               countdownBarShowTime={this.props.currentTrial.operation.maxSolveTime}
                               hintsAvailable={this.props.currentLevel.hintsAvailable}
                               onAskForHint={this.props.onAskForHint}
                               hintShown={this.props.currentTrial.hintShown} />
        } else if (this.props.state === PRACTICING) {
            return <PracticeHeader startTime={this.props.currentTrial.startTime}
                                   lastAnswerData={this.props.lastAnswerData}/>
        }
    }

    _renderHintCard() {
        if (this.props.currentTrial.hintShown) {
            return <HintCard operationHint={this.props.currentTrial.operation.hint}/>
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={GAME_STYLES.game}>
                {this._renderHeader()}
                {this._renderHintCard()}
                <Calculator operation={this.props.currentTrial.operation}
                            input={this.props.currentTrial.currentUserInput}
                            onEraseInput={this.props.onEraseInput}
                            onTypeInput={this.props.onTypeInput}
                            onSubmit={this.props.onSubmit}/>
            </View>
        );
    }
};

Game = makeItTestable('Game')(Game);