import React from 'react';
import {View} from 'react-native';
import OperationDisplay from './OperationDisplay';
import CalculatorKeyboard from './keyboard/CalculatorKeyboard';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <OperationDisplay {...this.props}/>
                <CalculatorKeyboard {...this.props}/>
            </View>
        )
    }
}

