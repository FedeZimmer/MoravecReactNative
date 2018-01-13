import React from 'react'
import {Text, View} from "react-native";
import {OPERATION_STYLES} from "./styles";

export default class Operation extends React.Component {
    constructor(props) {
        super(props);
    }

    showFirstOperand() {
        return this.props.trial.operation.operand1;
    }

    showOperator() {
        return this.props.trial.operation.operator;
    }

    showSecondOperand() {
        return this.props.trial.operation.operand2;
    }

    showResult() {
        if (this.props.trial.input) {
            return this.props.trial.input
        } else {
            return '?';
        }
    }

    render() {
        return (
            <View style={OPERATION_STYLES.operationContainer}>
                <View style={OPERATION_STYLES.operation}>
                    <Text style={OPERATION_STYLES.operationText}>
                        {this.showFirstOperand() + ' ' + this.showOperator() + ' ' + this.showSecondOperand()}
                        {' = '}
                        {this.showResult()}
                    </Text>
                </View>
            </View>
        )
    }
}