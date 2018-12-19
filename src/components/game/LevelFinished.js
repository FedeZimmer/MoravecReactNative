import React from "react";
import {Image, Text, View} from "react-native";
import {Button} from "native-base";
import I18n from "../../../i18n/i18n";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_FINISHED_STYLES} from "../../styles/game/styles";
import Images from "../../../assets/images/images";
import {PlayNextButton} from "./PlayNextButton";
import {ReplayButton} from "./ReplayButton";
import {pinkColor, greenColor} from "../../styles/global";

export class LevelFinished extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlayNextButtonPressed = this.handlePlayNextButtonPressed.bind(this);
        this.handleReplayLevelButtonPressed = this.handleReplayLevelButtonPressed.bind(this);
        this.handleHomeButtonPressed = this.handleHomeButtonPressed.bind(this);
    }

    handlePlayNextButtonPressed() {
        this.props.onPlayNextLevel();
    }

    handleReplayLevelButtonPressed() {
        this.props.onReplayLevel();
    }

    handleHomeButtonPressed() {
        this.props.onHomeButtonPressed();
    }

    renderLevelCompleted() {
        return (
            <View>
                <View style={[LEVEL_FINISHED_STYLES.background, {backgroundColor: greenColor}]}/>
                <View style={LEVEL_FINISHED_STYLES.content}>
                    <View style={LEVEL_FINISHED_STYLES.header.container}>
                        <Text style={LEVEL_FINISHED_STYLES.header.message}>
                            {I18n.t('game.levelFinished.levelCompletedMessage.first')}
                        </Text>
                        <Text style={LEVEL_FINISHED_STYLES.header.message}>
                            {I18n.t('game.levelFinished.levelCompletedMessage.second',
                                {levelNumber: this.props.finishedLevel.number})}
                        </Text>
                        <Text style={LEVEL_FINISHED_STYLES.header.levelNumber}>
                            {I18n.t('game.levelFinished.levelNumber')} {this.props.finishedLevel.number}
                        </Text>
                        <LevelEfficacyStars stars={this.props.finishedLevel.stars}
                                            smallStarSize={65}
                                            bigStarSize={75}/>
                        <Text style={LEVEL_FINISHED_STYLES.header.results}>
                            {I18n.t('game.levelFinished.correctAnswers', {
                                correctAnswers: this.props.sessionInfo.totalCorrect,
                                totalTrials: this.props.finishedLevel.totalTrials })
                            }
                        </Text>
                    </View>
                    <View style={LEVEL_FINISHED_STYLES.options}>
                        <ReplayButton onPress={this.handleReplayLevelButtonPressed}/>
                        <PlayNextButton onPress={this.handlePlayNextButtonPressed}/>
                         {/*<View>
                             <Button style={LEVEL_FINISHED_STYLES.shareButton} onPress={this.handleShareButtonPressed}>
                                 <Text style={LEVEL_FINISHED_STYLES.shareButtonText}>COMPARTIR</Text>
                             </Button>
                         </View>*/}
                    </View>
                </View>
            </View>
        )
    }

    renderTryAgain() {
        return (
            <View>
                <View style={[LEVEL_FINISHED_STYLES.background, {backgroundColor: pinkColor}]}/>
                <View style={LEVEL_FINISHED_STYLES.content}>
                    <View style={LEVEL_FINISHED_STYLES.header.container}>
                        <Text style={LEVEL_FINISHED_STYLES.header.message}>
                            Nivel {this.props.finishedLevel.number} no superado.
                        </Text>
                        <Text style={LEVEL_FINISHED_STYLES.header.tryAgain}>
                            Volvé a intentarlo
                        </Text>
                    </View>
                    <View style={LEVEL_FINISHED_STYLES.options}>
                        <ReplayButton highlighted={true} onPress={this.handleReplayLevelButtonPressed}/>
                    </View>
                </View>
            </View>
        )
    }

    renderContent() {
        if (this.props.finishedLevel.levelCompleted) {
            return this.renderLevelCompleted();
        } else {
            return this.renderTryAgain();
        }
    }

    render() {
        return (
            <View style={LEVEL_FINISHED_STYLES.levelFinished}>
                {this.renderContent()}
                <View style={LEVEL_FINISHED_STYLES.mainPageButtonContainer}>
                    <Button style={LEVEL_FINISHED_STYLES.mainPageButton} onPress={this.handleHomeButtonPressed}>
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