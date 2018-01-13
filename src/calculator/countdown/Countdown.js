import React from 'react'
import {View, Text} from "react-native";
import {COUNTDOWN_STYLES} from "./styles";
import {getWindowWidth} from "../../utils";


export default class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.calculateProgress = this.calculateProgress.bind(this);
    }

    calculateProgress() {
        let countdown = getWindowWidth() * (this.props.maxCounter - this.props.time) / this.props.maxCounter;
        if (countdown > 0) {
            return countdown;
        }

        return 0;
    }

    render() {
        return(
            <View style={{width: this.calculateProgress()}}>
                <View style={COUNTDOWN_STYLES.countdown}>

                </View>
            </View>
        )
    }

}