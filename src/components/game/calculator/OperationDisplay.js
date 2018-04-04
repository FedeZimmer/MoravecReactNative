import React from 'react'
import {Text, View} from "react-native";

import {OPERATION_STYLES} from "../../../styles/game/calculator/styles";

export default class OperationDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    operationResult() {
        if (this.props.input) {
            return this.props.input
        } else {
            return '?';
        }
    }

    render() {
        return (
            <View style={OPERATION_STYLES.operationContainer}>
                <View style={OPERATION_STYLES.operation}>
                    <Text style={OPERATION_STYLES.operationText}>
                        {this.props.operation.operation}{' = '}{this.operationResult()}
                    </Text>
                </View>
            </View>
        )
    }
}