import React from "react";
import {Text, View} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let CorrectAnswerMessage = class extends React.Component {
    render() {
        return (
            <View style={FEEDBACK_STYLES.feedbackCorrectContainer}>
                <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                    ¡Bien!
                </Text>
            </View>
        )
    }
};

CorrectAnswerMessage = makeItTestable('CorrectAnswerMessage')(CorrectAnswerMessage);