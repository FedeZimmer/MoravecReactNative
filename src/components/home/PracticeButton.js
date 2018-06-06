import React from "react";
import {HOME_STYLES} from "../../styles/home/styles";
import I18n from "../../../i18n/i18n";
import {Button} from "native-base";
import {Text} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";

export let PracticeButton = class extends React.Component {
    render() {
        return (
            <Button style={HOME_STYLES.practiceButton} onPress={this.props.onPress}>
                <Text style={HOME_STYLES.practiceButtonText}>{I18n.t('practice').toUpperCase()}</Text>
            </Button>
        )
    }
};

PracticeButton = makeItTestable('PracticeButton')(PracticeButton);