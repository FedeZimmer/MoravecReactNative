import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Content} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {PlayLevelButton} from "./PlayLevelButton";
import {makeItTestable} from "../../utils/testable_hoc";
import {formatTime} from "../../utils/format_time";
import {MoravecHeader} from "../common/Header";

export let LevelSelection = class extends React.Component {
    constructor(props) {
        super(props);
        this.handleLevelSelected = this.handleLevelSelected.bind(this);
    }

    componentWillMount() {
        this.props.onLoading();
    }

    handleLevelSelected(levelToPlay) {
        this.props.onSelectLevel(levelToPlay);
    }

    renderLevelToPlay() {
        const numberOfPlayedLevels = Object.keys(this.props.levelsPlayedInfo).length;
        const levelToPlay = numberOfPlayedLevels + 1;

        return <PlayLevelButton onPress={() => this.handleLevelSelected(levelToPlay)} levelToPlay={levelToPlay}/>
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='ARCADE'/>
                <View style={LEVEL_SELECTION_STYLES.list}>
                    {Object.keys(this.props.levelsPlayedInfo).map(levelNumberKey => (
                        <TouchableOpacity key={levelNumberKey} style={LEVEL_SELECTION_STYLES.listItem}
                                          onPress={() => this.handleLevelSelected(parseInt(levelNumberKey))}>
                            <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                                <View>
                                    <Text style={LEVEL_SELECTION_STYLES.levelNumber}>{levelNumberKey}.</Text>
                                </View>
                                <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                                    <Text style={LEVEL_SELECTION_STYLES.levelTime}>
                                        {formatTime(this.props.levelsPlayedInfo[levelNumberKey].totalTrialsTime)}
                                    </Text>
                                    <LevelEfficacyStars
                                        correctAnswers={this.props.levelsPlayedInfo[levelNumberKey].totalCorrect}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                    {this.renderLevelToPlay()}
                </View>
            </Content>
        )
    }
};

LevelSelection = makeItTestable('LevelSelection')(LevelSelection);