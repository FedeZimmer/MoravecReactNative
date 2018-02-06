import React from "react";
import {View, Text, TouchableOpacity, AsyncStorage} from "react-native";
import {Container, Content, List, ListItem} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {HEADER_STYLES, LEVEL_EFFICACY_STARS_STYLES} from "../../styles/common/styles"
import {BackButton} from "../common/BackButton";
import {formatTime} from "../../utils";

export class LevelSelection extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'ARCADE',
        headerLeft: <BackButton goBack={navigation.goBack}/>,
        headerStyle: HEADER_STYLES.header,
        headerTitleStyle: HEADER_STYLES.title,
    });

    constructor(props) {
        super(props);

        this.goToLevel = this.goToLevel.bind(this);
    }

    componentWillMount() {
        this.props.getPlayedLevelsInfo();
    }

    goToLevel(levelNumber) {
        this.props.navigation.navigate('PlayLevel', {
            levelNumber: levelNumber
        });
    }

    renderLevelToPlay() {
        const numberOfPlayedLevels = Object.keys(this.props.levels).length;
        const levelToPlay = numberOfPlayedLevels + 1;

        return (
            <TouchableOpacity style={LEVEL_SELECTION_STYLES.playItem} onPress={() => this.goToLevel(levelToPlay)}>
                <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                    <View>
                        <Text style={LEVEL_SELECTION_STYLES.playItemLevelNumber}>{levelToPlay}.</Text>
                    </View>
                    <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                        <Text style={LEVEL_SELECTION_STYLES.playText}>Jugar</Text>
                        <LevelEfficacyStars emptyStarColor={LEVEL_EFFICACY_STARS_STYLES.emptyStarWhiteColor}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const levels = this.props.levels;
        return (
            <Content style={LEVEL_SELECTION_STYLES.list}>
                {Object.keys(levels).map(levelNumber => (
                    <TouchableOpacity key={levelNumber} style={LEVEL_SELECTION_STYLES.listItem}
                                      onPress={() => this.goToLevel(levelNumber)}>
                        <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                            <View>
                                <Text style={LEVEL_SELECTION_STYLES.levelNumber}>{levelNumber}.</Text>
                            </View>
                            <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                                <Text style={LEVEL_SELECTION_STYLES.levelTime}>
                                    {formatTime(levels[levelNumber].totalTime)}
                                </Text>
                                <LevelEfficacyStars correctAnswers={levels[levelNumber].correctAnswers}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                {this.renderLevelToPlay()}
            </Content>
        )
    }
}