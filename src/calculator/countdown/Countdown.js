import React from 'react'
import {View, Text} from "react-native";
import {COUNTDOWN_STYLES} from "./styles";


export default class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.calculatePercentage = this.calculatePercentage.bind(this);
    }

    calculatePercentage() {
        let countdown = 100 * (this.props.maxCounter - this.props.time) / this.props.maxCounter;
        if (countdown > 0) {
            return countdown;
        }

        return 0;
    }

    render() {
        return(
            <View style={{width: this.calculatePercentage()}}>
                <View style={COUNTDOWN_STYLES.countdown}>

                </View>
            </View>
        )
    }

}