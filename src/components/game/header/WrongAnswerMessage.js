import React from "react";
import {Text} from "react-native";
import I18n from "../../../../i18n/i18n";
import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let WrongAnswerMessage = class extends React.Component {
    render() {
        return (
            <Text style={FEEDBACK_STYLES.feedbackIncorrectText}>
                {I18n.t('game.header.wrongAnswerMessage',
                    {correctAnswer: this.props.correctAnswer, wrongAnswer: this.props.wrongAnswer})}
            </Text>
        )
    }
};

WrongAnswerMessage = makeItTestable('WrongAnswerMessage')(WrongAnswerMessage);