import React from "react";
import {Animated, Text} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let YouCanDoBetterMessage = class extends React.Component {
    render() {
        return (
            <Animated.View style={[FEEDBACK_STYLES.feedbackCorrectContainer, {opacity: this.props.opacityValue}]}>
                <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                    Puedes hacerlo más rápido
                </Text>
            </Animated.View>
        )
    }
};

YouCanDoBetterMessage = makeItTestable('YouCanDoBetterMessage')(YouCanDoBetterMessage);