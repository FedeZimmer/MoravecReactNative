import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";


export default class EnterKey extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.submit(this.props.trial);
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.submitButton} onPress={this.handleSubmit}>
                <Icon name="subdirectory-arrow-left" style={INPUT_STYLES.submitButtonText}/>
            </TouchableOpacity>
        )
    }
}