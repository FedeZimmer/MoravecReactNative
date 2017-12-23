import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

const Calculator = props =>
    <View style={styles.screen}>
        <View style={styles.calculator}>
            <Feedback {...props} />
            <Header {...props} />
            <Countdown {...props} />
            <Operation {...props} />
            <Input {...props} />
        </View>
    </View>;

const styles = StyleSheet.create({
    screen: {
        margin: '0 auto',
        maxWidth: '500px',
    },
    calculator: {
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
    },
});

AppRegistry.registerComponent('moravec', () => Calculator);