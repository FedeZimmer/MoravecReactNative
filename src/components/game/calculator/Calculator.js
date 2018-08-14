import React from 'react';
import {View} from 'react-native';
import {OperationDisplay} from './OperationDisplay';
import CalculatorKeyboard from './keyboard/CalculatorKeyboard';
import {GAME_STYLES} from "../../../styles/game/calculator/styles";

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={GAME_STYLES.calculatorContainer}>
                <OperationDisplay operation={this.props.operation} input={this.props.input}/>
                <CalculatorKeyboard onTypeInput={this.props.onTypeInput}
                                    onEraseInput={this.props.onEraseInput}
                                    onSubmit={this.props.onSubmit}/>
            </View>
        )
    }
}

