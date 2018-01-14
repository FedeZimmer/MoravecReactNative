import React from 'react';
import {View} from 'react-native';

import UserAnswerFeedback from './UserAnswerFeedback';
import Header from './header/Header';
import CountdownBar from './CountdownBar';
import OperationDisplay from './OperationDisplay';
import CalculatorKeyboard from './keyboard/CalculatorKeyboard';

import {CALCULATOR_STYLES} from "../../../styles/game/calculator/styles";

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

