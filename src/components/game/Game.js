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
                <UserAnswerFeedback {...this.props}/>
                <Header {...this.props} />
                <CountdownBar {...this.props} />
                <Calculator {...this.props} />
            </View>
        );
    }
}