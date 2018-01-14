import React from 'react';
import {View, Text} from "react-native";

import {HEADER_STYLES} from "./styles";


export default class CalculationTimer extends React.Component {
    constructor(props) {
        super(props);
    }

    timerValue() {
        const minutesElapsed = Math.floor(this.props.time / (1000 * 60));
        const secondsElapsed = Math.floor(this.props.time / 1000 % 60);

        const fillWithZeroes = (number) => {
            let numberFormatted = number.toString();
            if (numberFormatted.length < 2) {
                numberFormatted = '0' + numberFormatted;
            }
            return numberFormatted;
        };

        return fillWithZeroes(minutesElapsed) + ':' + fillWithZeroes(secondsElapsed);
    }

    render() {
        return (
            <View style={HEADER_STYLES.timeContainer}>
                <Text style={HEADER_STYLES.time}>{this.timerValue()}</Text>
            </View>
        )
    }
}
