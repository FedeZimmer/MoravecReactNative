import React from 'react';
import {View} from 'react-native';

import UserAnswerFeedback from './feedback/UserAnswerFeedback';
import Header from './header/Header';
import CountdownBar from './countdown/CountdownBar';
import OperationDisplay from './operation/OperationDisplay';
import CalculatorKeyboard from './keyboard/CalculatorKeyboard';

import {CALCULATOR_STYLES} from "./styles";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={CALCULATOR_STYLES.calculator}>
                <UserAnswerFeedback {...this.props}/>
                <Header {...this.props}/>
                <CountdownBar {...this.props}/>
                <OperationDisplay {...this.props}/>
                <CalculatorKeyboard {...this.props}/>
            </View>
        )
    }
}

