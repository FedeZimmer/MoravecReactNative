import React from 'react'
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {INPUT_STYLES} from "../../../../styles/game/calculator/keyboard/styles";
import {makeItTestable} from "../../../../utils/testable_hoc";


export let EnterKey = class extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity style={INPUT_STYLES.submitButton} onPress={this.handlePress}>
                <Icon name="subdirectory-arrow-left" style={INPUT_STYLES.submitButtonText}/>
            </TouchableOpacity>
        )
    }
};

EnterKey = makeItTestable('EnterKey')(EnterKey);