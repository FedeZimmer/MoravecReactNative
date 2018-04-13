import React from "react";
import {View} from "react-native";
import {Content} from "native-base";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {PlayLevelButton} from "./PlayLevelButton";
import {makeItTestable} from "../../utils/testable_hoc";
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

    renderNewLevelToPlay() {
        const numberOfPlayedLevels = Object.keys(this.props.levelsPlayedInfo).length;
        const nextLevelNumber = numberOfPlayedLevels + 1;

        let newLevelAvailable = true;
        if (numberOfPlayedLevels > 0) {
            newLevelAvailable = this.props.levelsPlayedInfo[numberOfPlayedLevels].levelCompleted;
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
        return Object.entries(this.props.levelsPlayedInfo).map(([levelNumber, levelData]) => (
            <PlayLevelButton key={levelNumber} levelCompleted={levelData.levelCompleted}
                             onPress={() => this.handleLevelSelected(parseInt(levelNumber))}
                             levelToPlay={levelNumber}
                             previousTotalCorrect={levelData.totalCorrect}
                             previousLevelTime={levelData.totalTrialsTime}
            />
        ));
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='ARCADE'/>
                <View style={LEVEL_SELECTION_STYLES.list}>
                    {this.renderPreviouslyCompletedLevels()}
                    {this.renderNewLevelToPlay()}
                </View>
            </Content>
        )
    }
};

LevelSelection = makeItTestable('LevelSelection')(LevelSelection);