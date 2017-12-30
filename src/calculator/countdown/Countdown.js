import React from 'react'
import {View, Text} from "react-native";

const calculatePercentage = (time, maxCounter) => {
    let countdown = 100 * (maxCounter - time) / maxCounter;
    if (countdown > 0) {
        return countdown;
    }

    return 0;
};


const Countdown = ({time, maxCounter}) =>
    <View>
        <View>

        </View>
    </View>;


export default Countdown;