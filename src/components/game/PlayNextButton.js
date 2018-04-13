import React from "react";
import {LEVEL_FINISHED_STYLES} from "../../styles/game/styles";
import {makeItTestable} from "../../utils/testable_hoc";
import {Button, Icon} from "native-base";

export let PlayNextButton = class extends React.Component {
    render() {
        return (
            <Button style={LEVEL_FINISHED_STYLES.nextLevelButton} onPress={this.props.onPress}>
                <Icon name="md-arrow-round-forward" style={LEVEL_FINISHED_STYLES.nextLevelButtonIcon}/>
            </Button>
        );
    }
};

PlayNextButton = makeItTestable('PlayNextButton')(PlayNextButton);