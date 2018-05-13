import React from "react";
import {Animated, Text} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let CorrectAnswerMessage = class extends React.Component {
    render() {
        return (
            <Animated.View style={[FEEDBACK_STYLES.feedbackCorrectContainer, {opacity: this.props.opacityValue}]}>
                <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                    ¡Bien!
                </Text>
            </Animated.View>
        )
    }
};

CorrectAnswerMessage = makeItTestable('CorrectAnswerMessage')(CorrectAnswerMessage);