import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Container, Content, List, ListItem} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {HEADER_STYLES, LEVEL_EFFICACY_STARS_STYLES} from "../../styles/common/styles"
import {BackButton} from "../common/BackButton";

export default class LevelSelection extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'ARCADE',
        headerLeft: <BackButton goBack={navigation.goBack}/>,
        headerStyle: HEADER_STYLES.header,
        headerTitleStyle: HEADER_STYLES.title,
    });

    constructor(props) {
        super(props);

        this.handleLevelSelected = this.handleLevelSelected.bind(this);
    }

    handleLevelSelected(levelNumber) {
        this.props.onSelectLevel(levelNumber);
    }

    render() {
        return (
            <Content style={LEVEL_SELECTION_STYLES.list}>
                <TouchableOpacity style={LEVEL_SELECTION_STYLES.listItem}>
                    <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                        <View>
                            <Text style={LEVEL_SELECTION_STYLES.levelNumber}>1.</Text>
                        </View>
                        <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                            <Text style={LEVEL_SELECTION_STYLES.levelTime}>20:56:654s</Text>
                            <LevelEfficacyStars correctAnswers={16}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={LEVEL_SELECTION_STYLES.playItem} onPress={() => this.handleLevelSelected(2)}>
                    <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                        <View>
                            <Text style={LEVEL_SELECTION_STYLES.playItemLevelNumber}>2.</Text>
                        </View>
                        <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                            <Text style={LEVEL_SELECTION_STYLES.playText}>Jugar</Text>
                            <LevelEfficacyStars emptyStarColor={LEVEL_EFFICACY_STARS_STYLES.emptyStarWhiteColor}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </Content>
        )
    }
}