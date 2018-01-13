import React from 'react';
import {View, Text} from "react-native";
import {HEADER_STYLES} from "./styles";


class Time extends React.Component {
    constructor(props) {
        super(props);

        this.timeString = this.timeString.bind(this);
        this.fillZeroes = this.fillZeroes.bind(this);
    }

    fillZeroes(string) {
        return string.length < 2 ? '0' + string : string;
    }

    timeString() {
        let minutes = Math.floor(this.props.time / (1000 * 60)).toString();
        let seconds = Math.floor(this.props.time / 1000 % 60 ).toString();
        return this.fillZeroes(minutes) + ':' + this.fillZeroes(seconds);
    }

    render() {
        return (
            <View style={HEADER_STYLES.timeContainer}>
                <Text style={HEADER_STYLES.time}>{this.timeString()}</Text>
            </View>
        )
    }
}

class Hints extends React.Component {
    render() {
        return (
            <View style={HEADER_STYLES.hintsContainer}>
                <Text style={HEADER_STYLES.hintsText}>Pistas: </Text>
                <Text style={HEADER_STYLES.hintsNumber}>3/3</Text>
            </View>
        )
    }
}

class LevelState extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={HEADER_STYLES.remainingTrialsContainer}>
                <Text style={HEADER_STYLES.remainingTrials}>
                    {this.props.trials.length + 1} / {this.props.totalTrials}
                </Text>
            </View>
        )
    }
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.header.visible) {
            return (
                <View style={HEADER_STYLES.header}>
                    <Time time={this.props.time} />
                    <Hints />
                    <LevelState totalTrials={this.props.totalTrials} trials={this.props.trials} />
                </View>
            )
        } else {
            return null;
        }
    }
}