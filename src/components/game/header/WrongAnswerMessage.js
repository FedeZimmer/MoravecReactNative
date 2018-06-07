import React from "react";
import {Text} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let WrongAnswerMessage = class extends React.Component {
    render() {
        return (
            <Text style={FEEDBACK_STYLES.feedbackIncorrectText}>
                Era {this.props.correctAnswer} y no {this.props.wrongAnswer}
            </Text>
        )
    }
};

WrongAnswerMessage = makeItTestable('WrongAnswerMessage')(WrongAnswerMessage);