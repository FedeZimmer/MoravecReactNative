import React from 'react'
import {AppRegistry, StyleSheet, View, Text} from 'react-native';


const IncorrectFeedback = ({result}) =>
    <View style={styles.arcadeFeedbackIncorrect}>
        <Text>
            La respuesta era
        </Text>
        <Text style={styles.arcadeFeedbackIncorrectNumber}>
            {result}
        </Text>
    </View>;


const CorrectFeedback = () =>
    <Text style={styles.arcadeFeedbackCorrect}>
        ¡Correcto!
    </Text>;


const Feedback = ({feedback}) =>
    feedback.input === feedback.result
        ? <CorrectFeedback/>
        : <IncorrectFeedback result={feedback.result}/>;


const FeedbackWrapper = ({feedback}) =>
    feedback.visible
        ? <Feedback feedback={feedback}/>
        : null;

const styles = StyleSheet.create({
    arcadeFeedbackIncorrect: {
        background: $pink,
        color: $white,
        fontSize: '1.5em',
        textAlign: 'center',
        padding: '1em 0',
        textTransform: 'uppercase',
    },
    arcadeFeedbackIncorrectNumber: {
        display: 'inline-block',
        fontWeight: 'bold',
        marginLeft: '1em',
    },
    arcadeFeedbackCorrect: {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 999,
        background: $green,
        color: $white,
        fontSize: '1.5em',
        textAlign: 'center',
        padding: '1em 0',
        textTransform: 'uppercase',
    }
});

AppRegistry.registerComponent('moravec', () => FeedbackWrapper);
