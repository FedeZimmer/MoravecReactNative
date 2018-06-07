import React from "react";
import {Animated} from "react-native";
import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let FeedbackMessage = class extends React.Component {
    render() {
        return (
            <Animated.View
                style={[FEEDBACK_STYLES.feedbackContainer, this.props.style, {opacity: this.props.opacityValue}]}>
                {this.props.children}
            </Animated.View>
        )
    }
};

FeedbackMessage = makeItTestable('FeedbackMessage')(FeedbackMessage);