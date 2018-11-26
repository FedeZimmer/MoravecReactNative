import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import {hook} from "cavy";

import I18n from "../../../i18n/i18n";
import {PRACTICE_MODE_SELECTION_STYLES} from "../../styles/practice/styles"
import {applyLetterSpacing} from "../../styles/global";
import {ADVANCED, INITIAL, INTERMEDIATE} from "../../models/practice/PracticeMode";

export let PracticeModeOption = class extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect() {
        this.props.handleSelect(this.props.category, this.props.difficulty);
    }

    difficultyStyle() {
        if (this.props.difficulty === INITIAL) {
            return PRACTICE_MODE_SELECTION_STYLES.difficultyInitial;
        }
        if (this.props.difficulty === INTERMEDIATE) {
            return PRACTICE_MODE_SELECTION_STYLES.difficultyIntermediate;
        }
        if (this.props.difficulty === ADVANCED) {
            return PRACTICE_MODE_SELECTION_STYLES.difficultyAdvanced;
        }
    }

    difficultyText() {
        if (this.props.difficulty === INITIAL) {
            return I18n.t('practice.practiceModeSelection.difficulties.initial');
        }
        if (this.props.difficulty === INTERMEDIATE) {
            return I18n.t('practice.practiceModeSelection.difficulties.intermediate');
        }
        if (this.props.difficulty === ADVANCED) {
            return I18n.t('practice.practiceModeSelection.difficulties.advanced');
        }
    }

    render() {
        return (
            <TouchableOpacity style={PRACTICE_MODE_SELECTION_STYLES.option} onPress={this.handleSelect}
                              ref={this.props.generateTestHook(`PracticeModeOption.${this.props.category.name()}.${this.props.difficulty}`)}>
                <Text style={PRACTICE_MODE_SELECTION_STYLES.operationCategoryName}>
                    {applyLetterSpacing(this.props.category.name(), 1)}
                </Text>
                <Text style={this.difficultyStyle()}>{this.difficultyText()}</Text>
            </TouchableOpacity>
        )
    }
};

PracticeModeOption = hook(PracticeModeOption);