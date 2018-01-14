import React from 'react'
import {Text, TouchableOpacity} from "react-native";

import {INPUT_STYLES} from "./styles";


export default class EnterKey extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.submit(this.props.trial);
    }

    static enterKeySymbol() {
        return String.fromCharCode('8629');
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.submitButton} onPress={this.handleSubmit}>
                <Text style={INPUT_STYLES.submitButtonText}>{EnterKey.enterKeySymbol()}</Text>
            </TouchableOpacity>
        )
    }
}