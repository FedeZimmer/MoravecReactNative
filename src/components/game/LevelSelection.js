import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Container, Content, List, ListItem} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {HEADER_STYLES} from "../../styles/common/styles"
import {BackButton} from "../common/BackButton";
import {formatTime} from "../../utils/format_time";
import {PlayLevelButton} from "./PlayLevelButton";
import {makeItTestable} from "../../utils/testable_hoc";

export let LevelSelection = class extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'ARCADE',
        headerLeft: <BackButton goBack={navigation.goBack}/>,
        headerStyle: HEADER_STYLES.header,
        headerTitleStyle: HEADER_STYLES.title,
    });

    constructor(props) {
        super(props);
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
            <Content style={LEVEL_SELECTION_STYLES.list}>
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
            </Content>
        )
    }
};

LevelSelection = makeItTestable('LevelSelection')(LevelSelection);