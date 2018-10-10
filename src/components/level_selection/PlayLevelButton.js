import React from "react";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles";
import I18n from "../../../i18n/i18n";
import {Text, TouchableOpacity, View} from "react-native";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {formatTime} from "../../utils/format_time";
import {hook} from "cavy";

export let PlayLevelButton = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const levelNumberTextStyle = this.props.levelCompleted ? LEVEL_SELECTION_STYLES.alreadyPlayedLevelNumber : LEVEL_SELECTION_STYLES.levelNumber;
        const buttonStyle = this.props.levelCompleted ? LEVEL_SELECTION_STYLES.alreadyPlayedItem : LEVEL_SELECTION_STYLES.playItem;
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}
                              ref={this.props.generateTestHook(`PlayLevelButton.${this.props.levelToPlay}`)}>
                <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                    <View>
                        <Text style={levelNumberTextStyle}>{this.props.levelToPlay}.</Text>
                    </View>
                    <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                        {this.renderPlayOrPreviousTimeLegend()}
                        <LevelEfficacyStars stars={this.props.stars}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderPlayOrPreviousTimeLegend() {
        if (this.props.levelCompleted) {
            return <Text style={LEVEL_SELECTION_STYLES.levelTime}>{formatTime(this.props.previousLevelTime)}</Text>
        } else {
            return <Text style={LEVEL_SELECTION_STYLES.playText}>{I18n.t('game.levelSelection.playButton')}</Text>
        }
    }
};

PlayLevelButton = hook(PlayLevelButton);