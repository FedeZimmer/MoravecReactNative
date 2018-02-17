import React from "react";
import {Text, View} from "react-native";

import {FEEDBACK_STYLES} from "../../styles/game/calculator/styles";


export default class UserAnswerFeedback extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldShowCorrectAnswerMessage() {
        return this.props.feedback.input === this.props.feedback.result;
    }

    shouldShowAnswerFeedback() {
        return this.props.feedback.visible;
    }

    render() {
        if (this.shouldShowAnswerFeedback()) {
            if (this.shouldShowCorrectAnswerMessage()) {
                return (
                    <View style={FEEDBACK_STYLES.feedbackCorrectContainer}>
                        <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                            ¡Correcto!
                        </Text>
                    </View>
                )
            } else {
                return (
                    <View style={FEEDBACK_STYLES.feedbackIncorrectContainer}>
                        <Text style={FEEDBACK_STYLES.feedbackIncorrectText}>
                            LA RESPUESTA ERA {this.props.feedback.result}, NO {this.props.feedback.input}
                        </Text>
                    </View>
                )
            }
        } else {
            return null;
        }
    }
}