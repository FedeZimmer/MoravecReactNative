import React, {Component} from 'react'
import {View} from "react-native";

import CalculatorContainer from '../../../containers/CalculatorContainer'
import {LevelFinished} from './LevelFinished'


export default class Level extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.levelFinished) {
            return <LevelFinished {...this.props}/>;
        } else {
            return <CalculatorContainer {...this.props}/>;
        }
    }
}
