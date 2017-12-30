import React from 'react'
import {View} from "react-native";

const Operation = ({trial}) =>
    <View>
        {trial.operation.operand1 + ' ' +  trial.operation.operator + ' ' + trial.operation.operand2}
        {' = '}
        {trial.input ? trial.input : '?'}
    </View>;

export default Operation;