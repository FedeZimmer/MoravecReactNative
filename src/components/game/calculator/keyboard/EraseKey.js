import React from 'react'
import {Text, TouchableOpacity} from "react-native";

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";


export default class EraseKey extends React.Component {
    constructor(props) {
        super(props);

        this.handleErase = this.handleErase.bind(this);
    }

    handleErase(event) {
        event.preventDefault();

        this.props.eraseInput();
    }

    static eraseKeySymbol() {
        return String.fromCharCode('8592');
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.eraseButton} onPress={this.handleErase}>
                <Text style={INPUT_STYLES.eraseButtonText}>{EraseKey.eraseKeySymbol()}</Text>
            </TouchableOpacity>
        )
    }
}