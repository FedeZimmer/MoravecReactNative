import React from 'react'
import {AppRegistry, StyleSheet, View, Text} from 'react-native';


const fillZeroes = string =>
    string.length < 2 ? '0' + string : string;


const timeToString = time => {
    let minutes = Math.floor(time / (1000 * 60)).toString();
    let seconds = Math.floor(time / 1000 % 60).toString();
    return fillZeroes(minutes) + ':' + fillZeroes(seconds)
};


const Time = ({time}) =>
    <Text styles={styles.arcadeHeaderTypingTime}>
        {timeToString(time)}
    </Text>;


const Hints = () =>
    <Text styles={styles.arcadeHeaderTypingHints}>
        pistas: 3/3
    </Text>;


const LevelState = ({totalTrials, trials}) =>
    <Text styles={styles.arcadeHeaderTypingRemainingTrials}>
        {trials.length + 1} / {totalTrials}
    </Text>;


const Header = props =>
    <View styles={styles.arcadeHeaderTypingTime}>
        <Time time={props.time}/>
        <Hints/>
        <LevelState
            totalTrials={props.totalTrials}
            trials={props.trials}
        />
    </View>;

const styles = StyleSheet.create({
    arcadeHeaderTyping: {
        justifyContent: 'spaceBetween',
        fontSize: '1.5em',
        textAlign: 'center',
        padding: '1em 0',
        textTransform: 'uppercase',
    },
    arcadeHeaderTypingHints: {
        color: $dark - gray,
    },
    arcadeHeaderTypingRemainingTrials: {
        color: $green,
    },
    arcadeHeaderTypingTime: {
        color: $pink,
    },
});

AppRegistry.registerComponent('moravec', () => Header);
