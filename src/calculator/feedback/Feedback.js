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
                <Text style={FEEDBACK_STYLES.arcadeFeedbackCorrect}>
                    ¡Correcto!
                </Text>
            )
        } else {
            return (
                <View style={FEEDBACK_STYLES.arcadeFeedbackIncorrect}>
                    <Text>
                        La respuesta era
                    </Text>
                    <Text style={FEEDBACK_STYLES.arcadeFeedbackIncorrectNumber}>
                        {this.props.feedback.result}
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