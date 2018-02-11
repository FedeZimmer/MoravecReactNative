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
        return this.props.visible;
    }

    render() {
        if (this.isHeaderVisible()) {
            return (
                <View style={HEADER_STYLES.header}>
                    <CalculationTimer startTime={this.props.startTime}/>
                    <Hints/>
                    <LevelState totalTrials={this.props.totalTrials} currentTrial={this.props.currentTrial}/>
                </View>
            )
        } else {
            return null;
        }
    }
}