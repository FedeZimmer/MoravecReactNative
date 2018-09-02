import React from "react";
import {TYC_STYLES} from "../../styles/personalInfo/styles";
import I18n from "../../../i18n/i18n";
import {Button} from "native-base";
import {Text} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";

export let AcceptTACButton = class extends React.Component {
    render() {
        return (
            <Button style={TYC_STYLES.agreeButton} onPress={this.props.onPress}>
                <Text style={TYC_STYLES.agreeButtonText}>{I18n.t('termsAndConditions.agreeButton').toUpperCase()}</Text>
            </Button>
        )
    }
};

AcceptTACButton = makeItTestable('AcceptTACButton')(AcceptTACButton);