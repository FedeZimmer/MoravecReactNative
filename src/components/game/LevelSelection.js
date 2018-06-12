import React from "react";
import {View} from "react-native";
import {Content} from "native-base";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {PlayLevelButton} from "./PlayLevelButton";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import Config from "react-native-config";

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
                                    previousTotalCorrect={0}
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
                             previousTotalCorrect={levelStats.totalCorrect}
                             previousLevelTime={levelStats.totalTrialsTime}
            />
        ));
    }

    renderLevelsList() {
        if (Config.UNLOCK_ALL_LEVELS === 'on') {
            const allLevels = Array.from(Array(this.props.numLevels), (_, x) => x + 1);
            return (
                <View style={LEVEL_SELECTION_STYLES.list}>
                    {allLevels.map((levelNumber) => (
                        <PlayLevelButton key={levelNumber} levelCompleted={true}
                                         onPress={() => this.handleLevelSelected(parseInt(levelNumber))}
                                         levelToPlay={levelNumber}
                                         previousTotalCorrect={0}
                        />
                    ))}
                </View>
            )
        } else {
            return (
                <View style={LEVEL_SELECTION_STYLES.list}>
                    {this.renderPreviouslyCompletedLevels()}
                    {this.renderNewLevelToPlay()}
                </View>
            )
        }
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='ARCADE'/>
                {this.renderLevelsList()}
            </Content>
        )
    }
};

LevelSelection = makeItTestable('LevelSelection')(LevelSelection);