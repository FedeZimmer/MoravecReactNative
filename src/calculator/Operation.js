import React from 'react'
import {AppRegistry, StyleSheet, Text} from 'react-native';


const Operation = ({trial}) =>
    <Text styles={styles.arcadeOperation}>
        {trial.operation.operand1 + ' ' +  trial.operation.operator + ' ' + trial.operation.operand2}
        {' = '}
        {trial.input ? trial.input : '?'}
    </Text>;

const styles = StyleSheet.create({
    arcadeOperation: {
        background: '#fff',
        margin: '0.1em',
        padding: '1.3em 0',
        textAlign: 'center',
        color: '#222',
        fontSize: '3em',
    },
});

AppRegistry.registerComponent('moravec', () => Operation);

