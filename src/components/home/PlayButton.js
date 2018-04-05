import React from "react";
import {HOME_STYLES} from "../../styles/home/styles";
import I18n from "../../../i18n/i18n";
import {Button} from "native-base";
import {Text} from "react-native";
import {makeItTestable} from "../../utils/testable_hoc";

export let PlayButton = class extends React.Component {
    render() {
        return (
            <Button style={HOME_STYLES.playButton} onPress={this.props.onPress}>
                <Text style={HOME_STYLES.playButtonText}>{I18n.t('play').toUpperCase()}</Text>
            </Button>
        )
    }
};

PlayButton = makeItTestable('PlayButton')(PlayButton);