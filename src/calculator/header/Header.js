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
        <Text>{ timeToString(time) }</Text>
    </View>;


const Hints = () =>
    <View>
        <Text>pistas: 3/3</Text>
    </View>;


const LevelState = ({totalTrials, trials}) =>
    <View>
        <Text>{trials.length + 1} / {totalTrials}</Text>
    </View>;


const Typing = props =>
    <View>
        <Time time={props.time} />
        <Hints />
        <LevelState totalTrials={props.totalTrials} trials={props.trials} />
    </View>;


export default Typing;