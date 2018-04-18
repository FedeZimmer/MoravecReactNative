import React from 'react'
import {Text, TouchableOpacity} from "react-native";

import {PRACTICE_MODE_SELECTION_STYLES} from "../../styles/practice/styles"
import {applyLetterSpacing} from "../../styles/global";

import {hook} from "cavy";

export let PracticeModeOption = class extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect() {
        this.props.handleSelect(this.props.categoryName, this.props.difficulty);
    }

    render() {
        return (
            <TouchableOpacity style={PRACTICE_MODE_SELECTION_STYLES.option} onPress={this.handleSelect}>
                <Text style={PRACTICE_MODE_SELECTION_STYLES.operationCategoryName}>
                    {applyLetterSpacing(this.props.categoryName, 3)}
                </Text>
                <Text style={PRACTICE_MODE_SELECTION_STYLES.difficult}>{this.props.difficulty}</Text>
            </TouchableOpacity>
        )
    }
};

PracticeModeOption = hook(PracticeModeOption);