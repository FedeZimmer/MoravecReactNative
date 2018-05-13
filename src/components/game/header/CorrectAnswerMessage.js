import React from "react";
import {Text} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let CorrectAnswerMessage = class extends React.Component {
    render() {
        return (
            <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                ¡Bien!
            </Text>
        )
    }
};

CorrectAnswerMessage = makeItTestable('CorrectAnswerMessage')(CorrectAnswerMessage);