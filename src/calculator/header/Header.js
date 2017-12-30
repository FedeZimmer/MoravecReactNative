import React from 'react';
import {View, Text} from "react-native";

const fillZeroes = string =>
    string.length < 2 ? '0' + string : string;


const timeToString = time => {
    let minutes = Math.floor(time / (1000 * 60)).toString();
    let seconds = Math.floor(time / 1000 % 60 ).toString();
    return fillZeroes(minutes) + ':' + fillZeroes(seconds)
};


const Time = ({time}) =>
    <View>
        { timeToString(time) }
    </View>;


const Hints = () =>
    <View>
        pistas: 3/3
    </View>;


const LevelState = ({totalTrials, trials}) =>
    <View>
        {trials.length + 1} / {totalTrials}
    </View>;


const Typing = props =>
    <View>
        <Time time={props.time} />
        <Hints />
        <LevelState totalTrials={props.totalTrials} trials={props.trials} />
    </View>;


export default Typing;