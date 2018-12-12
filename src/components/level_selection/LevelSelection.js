import React from "react";
import {ScrollView, View, Platform} from "react-native";
import {Spinner} from "native-base";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {spinnerColor} from "../../styles/main/styles";
import I18n from "../../../i18n/i18n";
import {PlayLevelButton} from "./PlayLevelButton";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import Config from "react-native-config";
import {NavigationEvents} from "react-navigation";

export let LevelSelection = class extends React.Component {
    constructor(props) {
        super(props);
        this.handleLevelSelected = this.handleLevelSelected.bind(this);
    }

    componentDidMount() {
        this.props.onLoading();
    }

    handleLevelSelected(levelToPlay) {
        this.props.onSelectLevel(levelToPlay);
    }

    renderNewLevelToPlay() {
        const numberOfPlayedLevels = Object.keys(this.props.playedLevelsStats).length;
        const nextLevelNumber = numberOfPlayedLevels + 1;

        let newLevelAvailable = true;
        if (numberOfPlayedLevels > 0) {
            newLevelAvailable = this.props.playedLevelsStats[numberOfPlayedLevels].levelCompleted;
        }

        if (newLevelAvailable) {
            return <PlayLevelButton key={nextLevelNumber} levelCompleted={false}
                                    onPress={() => this.handleLevelSelected(nextLevelNumber)}
                                    levelToPlay={nextLevelNumber}
                                    stars={0}
            />
        } else {
            return null;
        }
    }

    renderPreviouslyCompletedLevels() {
        return Object.entries(this.props.playedLevelsStats).map(([levelNumber, levelStats]) => (
            <PlayLevelButton key={levelNumber} levelCompleted={levelStats.levelCompleted}
                             onPress={() => this.handleLevelSelected(parseInt(levelNumber))}
                             levelToPlay={levelNumber}
                             stars={levelStats.stars}
                             previousLevelTime={levelStats.totalTrialsTime}
            />
        ));
    }

    renderLevelsList() {
        if (this.props.playedLevelsStats === null) {
            return <Spinner color={spinnerColor}/>
        } else {
            if (Config.UNLOCK_ALL_LEVELS === 'on') {
                const allLevels = Array.from(Array(this.props.numLevels), (_, x) => x + 1);
                return (
                    <ScrollView style={LEVEL_SELECTION_STYLES.list[Platform.OS]}>
                        {allLevels.map((levelNumber) => (
                            <PlayLevelButton key={levelNumber} levelCompleted={true}
                                             onPress={() => this.handleLevelSelected(parseInt(levelNumber))}
                                             levelToPlay={levelNumber}
                                             stars={0}
                            />
                        ))}
                    </ScrollView>
                )
            } else {
                return (
                    <ScrollView style={LEVEL_SELECTION_STYLES.list[Platform.OS]}>
                        {this.renderPreviouslyCompletedLevels()}
                        {this.renderNewLevelToPlay()}
                    </ScrollView>
                )
            }
        }
    }

    render() {
        return (
            <View>
                <NavigationEvents onDidFocus={this.props.onLoading}/>
                <MoravecHeader title={I18n.t('game.headerTitle').toUpperCase()}/>
                {this.renderLevelsList()}
            </View>
        )
    }
};

LevelSelection = makeItTestable('LevelSelection')(LevelSelection);