import React from "react";
import {LEVEL_FINISHED_STYLES} from "../../styles/game/styles";
import {makeItTestable} from "../../utils/testable_hoc";
import {Button, Icon} from "native-base";

export let ReplayButton = class extends React.Component {
    render() {
        return (
            <Button
                style={this.props.highlighted ? LEVEL_FINISHED_STYLES.replayButtonHighlighted : LEVEL_FINISHED_STYLES.replayButton}
                onPress={this.handleReplayLevelButtonPressed}>
                <Icon name="md-refresh" style={LEVEL_FINISHED_STYLES.replayButtonIcon}/>
            </Button>
        );
    }
};

ReplayButton = makeItTestable('ReplayButton')(ReplayButton);