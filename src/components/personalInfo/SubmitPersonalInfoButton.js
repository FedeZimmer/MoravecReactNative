import React from "react";
import {PERSONAL_INFO_FORM_STYLES} from "../../styles/personalInfo/styles";
import I18n from "../../../i18n/i18n";
import {Button} from "native-base";
import {Text} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";

export let SubmitPersonalInfoButton = class extends React.Component {
    render() {
        return (
            <Button style={PERSONAL_INFO_FORM_STYLES.submitButton} onPress={this.props.onPress}>
                <Text style={PERSONAL_INFO_FORM_STYLES.submitButtonText}>
                    {I18n.t('Listo! Empezar a jugar').toUpperCase()}
                </Text>
            </Button>
        )
    }
};

SubmitPersonalInfoButton = makeItTestable('SubmitPersonalInfoButton')(SubmitPersonalInfoButton);