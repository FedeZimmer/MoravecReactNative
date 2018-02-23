import React from "react";
import {Text, View} from "react-native";

import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";


export default class UserAnswerFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setTimeout(this.props.onTimeout, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        if (this.props.lastAnswerData.isCorrect) {
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
                        LA RESPUESTA ERA {this.props.lastAnswerData.correctResult},
                        NO {this.props.lastAnswerData.userInput}
                    </Text>
                </View>
            )
        }
    }
}