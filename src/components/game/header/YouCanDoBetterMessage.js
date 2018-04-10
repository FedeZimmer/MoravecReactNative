import React from "react";
import {Text, View} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let YouCanDoBetterMessage = class extends React.Component {
    render() {
        return (
            <View style={FEEDBACK_STYLES.feedbackCorrectContainer}>
                <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                    Puedes hacerlo más rápido
                </Text>
            </View>
        )
    }
};

YouCanDoBetterMessage = makeItTestable('YouCanDoBetterMessage')(YouCanDoBetterMessage);