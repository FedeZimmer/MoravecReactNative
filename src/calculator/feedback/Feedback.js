import React from "react";
import {View, Text} from "react-native";
import {JS_STYLES} from "../../static/styles";


const IncorrectFeedback = ({result}) =>
    <View style={JS_STYLES.arcadeFeedbackIncorrect}>
        <Text>
            La respuesta era
        </Text>
        <Text style={JS_STYLES.arcadeFeedbackIncorrectNumber}>
            {result}
        </Text>
    </View>;


const CorrectFeedback = () =>
    <Text>
        ¡Correcto!
    </Text>;


const Feedback = ({feedback}) =>
    feedback.input === feedback.result ? <CorrectFeedback /> : <IncorrectFeedback result={feedback.result} />;


const FeedbackWrapper = ({feedback}) =>
    feedback.visible ? <Feedback feedback={feedback} /> : null;


export default FeedbackWrapper;