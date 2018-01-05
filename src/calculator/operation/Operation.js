import React from 'react'
import {Text, View} from "react-native";

const Operation = ({trial}) =>
    <View>
        <Text>
            {trial.operation.operand1 + ' ' + trial.operation.operator + ' ' + trial.operation.operand2}
            {' = '}
            {trial.input ? trial.input : '?'}
        </Text>
    </View>;

export default Operation;