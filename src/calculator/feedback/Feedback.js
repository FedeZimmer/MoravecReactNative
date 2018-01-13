import React from "react";
import {View, Text} from "react-native";
import {FEEDBACK_STYLES} from "./styles";


class Feedback extends React.Component {
    constructor(props) {
        super(props);

        this.feedbackIsCorrect = this.feedbackIsCorrect.bind(this);
    }

    feedbackIsCorrect() {
        return this.props.feedback.input == this.props.feedback.result;
    }

    render() {
        if (this.feedbackIsCorrect()) {
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
    }
}

export default class FeedbackWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.feedback.visible) {
            return (
                <Feedback feedback={this.props.feedback}/>
            )
        } else {
            return null;
        }
    }
}