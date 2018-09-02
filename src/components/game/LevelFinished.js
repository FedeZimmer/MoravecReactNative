import React from "react";
import {Image, Text, View} from "react-native";
import {Button} from "native-base";
import I18n from "../../../i18n/i18n";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_FINISHED_STYLES} from "../../styles/game/styles";
import Images from "../../../assets/images/images";
import {PlayNextButton} from "./PlayNextButton";
import {ReplayButton} from "./ReplayButton";

export class LevelFinished extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlayNextButtonPressed = this.handlePlayNextButtonPressed.bind(this);
        this.handleReplayLevelButtonPressed = this.handleReplayLevelButtonPressed.bind(this);
        this.handleShareButtonPressed = this.handleShareButtonPressed.bind(this);
        this.handleHomeButtonPressed = this.handleHomeButtonPressed.bind(this);
    }

    renderHeader() {
        return (
            <View style={LEVEL_FINISHED_STYLES.header}>
                {this.renderLevelCompletedOrTryAgain()}
                <View>
                    <View>
                        <Text style={LEVEL_FINISHED_STYLES.headerLevelText}>
                            {I18n.t('game.levelFinished.levelNumber')} {this.props.finishedLevel.number}
                        </Text>
                    </View>
                    <LevelEfficacyStars correctAnswers={this.props.finishedLevel.totalCorrect}/>
                    <View>
                        <Text>
                            {I18n.t('game.levelFinished.correctAnswers', {
                                correctAnswers: this.props.finishedLevel.totalCorrect,
                                totalTrials: this.props.finishedLevel.totalTrials })
                            }
                            </Text>
                    </View>
                </View>
            </View>
        )
    }

    renderLevelCompletedOrTryAgain() {
        if (this.props.finishedLevel.levelCompleted) {
            return (
                <View>
                    <Text style={LEVEL_FINISHED_STYLES.headerCongratulationsText}>
                        {I18n.t('game.levelFinished.levelCompletedMessage')}
                    </Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={LEVEL_FINISHED_STYLES.headerCongratulationsText}>
                        {I18n.t('game.levelFinished.retryMessage')}
                    </Text>
                </View>
            )
        }
    }

    renderPlayNextButton() {
        if (this.props.finishedLevel.levelCompleted) {
            return <PlayNextButton onPress={this.handlePlayNextButtonPressed}/>;
        } else {
            return null;
        }
    }

    renderOptions() {
        return (
            <View style={LEVEL_FINISHED_STYLES.options}>
                <View>
                    <Button style={LEVEL_FINISHED_STYLES.shareButton} onPress={this.handleShareButtonPressed}>
                        <Text style={LEVEL_FINISHED_STYLES.shareButtonText}>COMPARTIR</Text>
                    </Button>
                </View>
                <View style={LEVEL_FINISHED_STYLES.gameOptionsContainer}>
                    <ReplayButton onPress={this.handleReplayLevelButtonPressed}
                                  highlighted={!this.props.finishedLevel.levelCompleted}/>
                    {this.renderPlayNextButton()}
                </View>
            </View>
        )
    }

    handlePlayNextButtonPressed() {
        this.props.onPlayNextLevel();
    }

    handleReplayLevelButtonPressed() {
        this.props.onReplayLevel();
    }

    handleShareButtonPressed() {
        //TODO
    }

    handleHomeButtonPressed() {
        this.props.onHomeButtonPressed();
    }

    render() {
        return (
            <View style={LEVEL_FINISHED_STYLES.levelFinished}>
                <View style={LEVEL_FINISHED_STYLES.background}/>
                <View style={LEVEL_FINISHED_STYLES.content}>
                    {this.renderHeader()}
                    {this.renderOptions()}
                </View>
                <View style={LEVEL_FINISHED_STYLES.mainPageButtonContainer}>
                    <Button transparent style={LEVEL_FINISHED_STYLES.mainPageButton}
                            onPress={this.handleHomeButtonPressed}>
                        <Text style={LEVEL_FINISHED_STYLES.mainPageButtonText}>
                            {I18n.t('game.levelFinished.mainMenuButton')}
                        </Text>
                    </Button>
                </View>
                <View style={LEVEL_FINISHED_STYLES.logoContainer}>
                    <Image source={Images.mainLogoGray} style={LEVEL_FINISHED_STYLES.logo}/>
                </View>
            </View>
        )
    }
}