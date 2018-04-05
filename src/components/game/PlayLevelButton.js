import React from "react";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles";
import {LEVEL_EFFICACY_STARS_STYLES} from "../../styles/common/styles";
import {makeItTestable} from "../../utils/testable_hoc";
import {Text, TouchableOpacity, View} from "react-native";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";

export let PlayLevelButton = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={LEVEL_SELECTION_STYLES.playItem} onPress={this.props.onPress}>
                <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                    <View>
                        <Text style={LEVEL_SELECTION_STYLES.playItemLevelNumber}>{this.props.levelToPlay}.</Text>
                    </View>
                    <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                        <Text style={LEVEL_SELECTION_STYLES.playText}>Jugar</Text>
                        <LevelEfficacyStars emptyStarColor={LEVEL_EFFICACY_STARS_STYLES.emptyStarWhiteColor}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
};

PlayLevelButton = makeItTestable('PlayLevelButton')(PlayLevelButton);