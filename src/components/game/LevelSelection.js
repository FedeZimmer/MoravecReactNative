import React from "react";
import {View, Text, TouchableOpacity, AsyncStorage} from "react-native";
import {Container, Content, List, ListItem} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {HEADER_STYLES, LEVEL_EFFICACY_STARS_STYLES} from "../../styles/common/styles"
import {BackButton} from "../common/BackButton";
import * as moment from 'moment'

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

    render() {
        /*let d =  moment.duration(this.props.levels["2"].totalTime);
        const formatD = d.minutes() + ":" + d.seconds() + ":" + d.milliseconds();*/
        if (this.props.loading) {
            return null;
        } else {
            return (
                <Content style={LEVEL_SELECTION_STYLES.list}>
                    <TouchableOpacity style={LEVEL_SELECTION_STYLES.listItem}>
                        <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                            <View>
                                <Text style={LEVEL_SELECTION_STYLES.levelNumber}>1.</Text>
                            </View>
                            <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                                <Text style={LEVEL_SELECTION_STYLES.levelTime}>asdas</Text>
                                <LevelEfficacyStars correctAnswers={16}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={LEVEL_SELECTION_STYLES.playItem} onPress={() => this.goToLevel(2)}>
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
}