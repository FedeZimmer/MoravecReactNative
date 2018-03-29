import React from 'react'
import {Text, TouchableOpacity} from "react-native";

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";
import {hook} from "cavy";


export let NumberKey = class extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        this.props.onTypeInput(this.props.value);
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.inputButton} onPress={this.handleInput}
                              ref={this.props.generateTestHook(`NumberKey.${this.props.value}`)}>
                <Text style={INPUT_STYLES.inputButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
};

NumberKey = hook(NumberKey);