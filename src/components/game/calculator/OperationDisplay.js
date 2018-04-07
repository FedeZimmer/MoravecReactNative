import React from 'react'
import {Text, View} from "react-native";

import {OPERATION_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let OperationDisplay = class extends React.Component {
    constructor(props) {
        super(props);
        this.operationFontSize = this.operationFontSize.bind(this);
    }

    operationFontSize() {
        const userResponse = this.props.input;
        const userResponseNumberOfDigits = Number(userResponse).toString().length;

        let operationFontSize = 40;
        if (userResponse && userResponseNumberOfDigits >= 6) {
            operationFontSize = 35;
        }

        return operationFontSize;
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
                    <Text style={[OPERATION_STYLES.operationText, {fontSize: this.operationFontSize()}]}>
                        {this.props.operation.operation}{' = '}{this.operationResult()}
                    </Text>
                </View>
            </View>
        )
    }
};

OperationDisplay = makeItTestable('OperationDisplay')(OperationDisplay);