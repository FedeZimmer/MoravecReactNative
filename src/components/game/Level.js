import React, {Component} from 'react'
import {View} from "react-native";

import CalculatorContainer from '../../containers/CalculatorContainer'


export default class Level extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.levelFinished
                ? <View/>
                : <CalculatorContainer {...this.props}/>
        );
    }
}
