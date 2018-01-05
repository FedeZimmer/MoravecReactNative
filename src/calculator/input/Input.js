import React from 'react'
import {View, Text} from "react-native";

const SubmitButton = ({submit, trial, time}) =>
    <View onClick={e => submit({...trial, time})} >
        { String.fromCharCode('8629') }
    </View>;


const EraseButton = ({eraseInput}) =>
    <View onClick={eraseInput}>
        <Text>{ String.fromCharCode('8592') }</Text>
    </View>;


const InputButton = ({value, typeInput}) =>
    <View onClick={e => typeInput(value)}>
        <Text>{value}</Text>
    </View>;


const Row1 = ({typeInput}) =>
    <View>
        <InputButton value={7} typeInput={typeInput} />
        <InputButton value={8} typeInput={typeInput} />
        <InputButton value={9} typeInput={typeInput} />
    </View>;


const Row2 = ({typeInput}) =>
    <View>
        <InputButton value={4} typeInput={typeInput} />
        <InputButton value={5} typeInput={typeInput} />
        <InputButton value={6} typeInput={typeInput} />
    </View>;


const Row3 = ({typeInput}) =>
    <View>
        <InputButton value={1} typeInput={typeInput} />
        <InputButton value={2} typeInput={typeInput} />
        <InputButton value={3} typeInput={typeInput} />
    </View>;


const Row4 = props =>
    <View>
        <EraseButton eraseInput={props.eraseInput} />
        <InputButton value={0} typeInput={props.typeInput} />
        <SubmitButton {...props} />
    </View>;


const Input = props =>
    <View >
        <Row1 typeInput={props.typeInput} />
        <Row2 typeInput={props.typeInput} />
        <Row3 typeInput={props.typeInput} />
        <Row4 {...props} />
    </View>;


export default Input;