import React from 'react';
import {View} from 'react-native';

import Feedback from './feedback/Feedback';
import Header from './header/Header';
import Countdown from './countdown/Countdown';
import Operation from './operation/Operation';
import Input from './input/Input';

import {CALCULATOR_STYLES} from "./styles";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={CALCULATOR_STYLES.calculator}>
                <Feedback {...this.props}/>
                <Header {...this.props}/>
                <Countdown {...this.props}/>
                <Operation {...this.props}/>
                <Input {...this.props}/>
            </View>
        )
    }
}

