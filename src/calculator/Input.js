import React from 'react'
import {AppRegistry, StyleSheet, View, Text} from 'react-native';


const SubmitButton = ({submit, trial, time}) =>
    <View
        style={styles.arcadeSubmitButton}
        onClick={e => submit({...trial, time})}
    >
        {String.fromCharCode('8629')}
    </View>;


const EraseButton = ({eraseInput}) =>
    <View
        style={styles.arcadeEraseButton}
        onClick={eraseInput}
    >
        {String.fromCharCode('8592')}
    </View>;


const InputButton = ({value, typeInput}) =>
    <View
        style={styles.arcadeInputButton}
        onClick={e => typeInput(value)}
    >
        <Text>{value}</Text>
    </View>;


const Row1 = ({typeInput}) =>
    <View style={styles.arcadeButtonsRow}>
        <InputButton value={7} typeInput={typeInput}/>
        <InputButton value={8} typeInput={typeInput}/>
        <InputButton value={9} typeInput={typeInput}/>
    </View>;


const Row2 = ({typeInput}) =>
    <View style={styles.arcadeButtonsRow}>
        <InputButton value={4} typeInput={typeInput}/>
        <InputButton value={5} typeInput={typeInput}/>
        <InputButton value={6} typeInput={typeInput}/>
    </View>;


const Row3 = ({typeInput}) =>
    <View style={styles.arcadeButtonsRow}>
        <InputButton value={1} typeInput={typeInput}/>
        <InputButton value={2} typeInput={typeInput}/>
        <InputButton value={3} typeInput={typeInput}/>
    </View>;


const Row4 = props =>
    <View style={styles.arcadeButtonsRow}>
        <EraseButton eraseInput={props.eraseInput}/>
        <InputButton value={0} typeInput={props.typeInput}/>
        <SubmitButton {...props} />
    </View>;


const Input = props =>
    <View style={styles.arcadeButtons}>
        <Row1 typeInput={props.typeInput}/>
        <Row2 typeInput={props.typeInput}/>
        <Row3 typeInput={props.typeInput}/>
        <Row4 {...props} />
    </View>;

const styles = StyleSheet.create({
    arcadeButtonsRow: {
        textAlign: 'center',
    },
    arcadeEraseButton: {
        display: 'inline-block',
        fontSize: '2.2em',
        margin: '0.6%',
        cursor: 'pointer',
        padding: '1.3em 0',
        width: '32%',
        textAlign: 'center',
        color: $gray,
        background: $white,
    },
    arcadeInputButton: {
        display: 'inline-block',
        fontSize: '2.2em',
        margin: '0.6%',
        cursor: 'pointer',
        padding: '1.3em 0',
        width: '32%',
        textAlign: 'center',
        color: $gray,
        background: $white,
    },
    arcadeSubmitButton: {
        display: 'inline-block',
        fontSize: '2.2em',
        margin: '0.6%',
        cursor: 'pointer',
        padding: '1.3em 0',
        width: '32%',
        textAlign: 'center',
        background: $green,
        color: $white,
    },
});

AppRegistry.registerComponent('moravec', () => Input);
