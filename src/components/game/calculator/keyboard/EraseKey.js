import React from 'react'
import {TouchableOpacity} from "react-native";
import {Icon} from 'native-base';

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";


export default class EraseKey extends React.Component {
    constructor(props) {
        super(props);

        this.handleErase = this.handleErase.bind(this);
    }

    handleErase(event) {
        event.preventDefault();

        this.props.onEraseInput();
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.eraseButton} onPress={this.handleErase}>
                <Icon name="md-arrow-round-back" style={INPUT_STYLES.eraseButtonText}/>
            </TouchableOpacity>
        )
    }
}