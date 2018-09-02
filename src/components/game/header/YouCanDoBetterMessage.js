import React from "react";
import {Text} from "react-native";
import I18n from "../../../../i18n/i18n";
import {FEEDBACK_STYLES} from "../../../styles/game/calculator/styles";
import {makeItTestable} from "../../../utils/testable_hoc";

export let YouCanDoBetterMessage = class extends React.Component {
    render() {
        return (
            <Text style={FEEDBACK_STYLES.feedbackCorrectText}>
                {I18n.t('game.header.youCanDoBetterMessage')}
            </Text>
        )
    }
};

YouCanDoBetterMessage = makeItTestable('YouCanDoBetterMessage')(YouCanDoBetterMessage);