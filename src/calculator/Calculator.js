import React, {Component} from 'react';
import {View} from 'react-native';

import {JS_STYLES} from '../static/styles';
import Feedback from './feedback/Feedback';
import Header from './header/Header';
import Countdown from './countdown/Countdown';
import Operation from './operation/Operation';
import Input from './input/Input';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={JS_STYLES.screen}>
                <View style={JS_STYLES.calculator}>
                    <Feedback {...this.props} />
                    <Header {...this.props} />
                    <Countdown {...this.props} />
                    <Operation {...this.props} />
                    <Input {...this.props} />
                </View>
            </View>
        )
    }
}

