import React from "react";
import {Animated, Text} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let WrongAnswerMessage = class extends React.Component {
    render() {
        return (
            <Animated.View style={[FEEDBACK_STYLES.feedbackIncorrectContainer, {opacity: this.props.opacityValue}]}>
                <Text style={FEEDBACK_STYLES.feedbackIncorrectText}>
                    Era {this.props.correctAnswer} y no {this.props.wrongAnswer}
                </Text>
            </Animated.View>
        )
    }
};

WrongAnswerMessage = makeItTestable('WrongAnswerMessage')(WrongAnswerMessage);