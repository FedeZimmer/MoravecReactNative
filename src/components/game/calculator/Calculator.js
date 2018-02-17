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
                <OperationDisplay operation={this.props.operation} input={this.props.input}/>
                <CalculatorKeyboard onTypeInput={this.props.onTypeInput}
                                    onEraseInput={this.props.onEraseInput}
                                    onSubmit={this.props.onSubmit}/>
            </View>
        )
    }
}

