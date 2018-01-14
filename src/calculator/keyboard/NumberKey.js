import React from 'react'
import {Text, TouchableOpacity} from "react-native";

import {INPUT_STYLES} from "./styles";


export default class NumberKey extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        event.preventDefault();

        this.props.typeInput(this.props.value);
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.inputButton} onPress={this.handleInput}>
                <Text style={INPUT_STYLES.inputButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
}