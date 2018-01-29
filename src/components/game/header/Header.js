import React from 'react';
import {View} from "react-native";

import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import CalculationTimer from "./CalculationTimer";
import Hints from "./Hints";
import LevelState from "./LevelState";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    isHeaderVisible() {
        return this.props.header.visible;
    }

    render() {
        if (this.isHeaderVisible()) {
            return (
                <View style={HEADER_STYLES.header}>
                    <CalculationTimer time={this.props.time}/>
                    <Hints/>
                    <LevelState totalTrials={this.props.totalTrials} trials={this.props.trials}/>
                </View>
            )
        } else {
            return null;
        }
    }
}