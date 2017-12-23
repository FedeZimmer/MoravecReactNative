import React from 'react'
import {AppRegistry, StyleSheet, View} from 'react-native';

const calculatePercentage = (time, maxCounter) => {
    let countdown = 100 * (maxCounter - time) / maxCounter;
    if (countdown > 0)
        return countdown;
    return 0
};

const Countdown = ({time, maxCounter}) =>
    <View styles={styles.countdown}>
        <View
            styles={styles.countdownBar}
            style={{'width': + calculatePercentage(time, maxCounter) + '%'}}
        >
        </View>
    </View>;

const styles = StyleSheet.create({
    countdown: {
        margin: '0 0 0.1em',
    },
    countdownBar: {
        background: $pink,
        height: '0.5em',
    },
});

AppRegistry.registerComponent('moravec', () => Countdown);