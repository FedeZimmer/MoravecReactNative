import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import I18n from "../../../../i18n/i18n";
import {HEADER_STYLES} from "../../../styles/game/calculator/header/styles";
import {MAX_HINTS_PER_LEVEL} from "../../../reducers/game_reducer";
import {makeItTestable} from "../../../utils/testable_hoc";


export let Hints = class extends React.Component {
    hintsText() {
        return `${this.props.hintsAvailable}/${MAX_HINTS_PER_LEVEL}`;
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={HEADER_STYLES.hintsContainer}>
                <Text style={HEADER_STYLES.hintsText}>{I18n.t('game.header.availableHints')}: </Text>
                <Text style={HEADER_STYLES.hintsNumber}>{this.hintsText()}</Text>
            </TouchableOpacity>
        )
    }
};

Hints = makeItTestable('Hints')(Hints);