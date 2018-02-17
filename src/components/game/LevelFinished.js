import React from 'react'
import {View, Text, Image} from "react-native";
import {Button, Icon} from "native-base";
import {LevelEfficacyStars} from "../common/LevelEfficacyStars";
import {LEVEL_FINISHED_STYLES} from "../../styles/game/styles";
import Images from "../../../assets/images/images";

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
                <View>
                    <Text style={LEVEL_FINISHED_STYLES.headerCongratulationsText}>
                        Felicitaciones. Nivel completado.
                    </Text>
                </View>
                <View>
                    <View>
                        <Text style={LEVEL_FINISHED_STYLES.headerLevelText}>Nivel {this.props.finishedLevel}</Text>
                    </View>
                    <LevelEfficacyStars correctAnswers={this.props.totalCorrect} />
                    <View>
                        <Text>{this.props.totalCorrect + ' / ' + this.props.totalTrials + ' correctas'}</Text>
                    </View>
                </View>
            </View>
        )
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
                    <Button style={LEVEL_FINISHED_STYLES.replayButton} onPress={this.handleReplayLevelButtonPressed}>
                        <Icon name="md-refresh" style={LEVEL_FINISHED_STYLES.replayButtonIcon}/>
                    </Button>
                    <Button style={LEVEL_FINISHED_STYLES.nextLevelButton} onPress={this.handlePlayNextButtonPressed}>
                        <Icon name="md-arrow-round-forward" style={LEVEL_FINISHED_STYLES.nextLevelButtonIcon}/>
                    </Button>
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
        const {navigate} = this.props.navigation;
        navigate('Home');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={LEVEL_FINISHED_STYLES.levelFinished}>
                <View style={LEVEL_FINISHED_STYLES.background}/>
                <View style={LEVEL_FINISHED_STYLES.content}>
                    {this.renderHeader()}
                    {this.renderOptions()}
                </View>
                <View style={LEVEL_FINISHED_STYLES.mainPageButtonContainer}>
                    <Button transparent style={LEVEL_FINISHED_STYLES.mainPageButton} onPress={() => navigate('Home')}>
                        <Text style={LEVEL_FINISHED_STYLES.mainPageButtonText}>MENÚ PRINCIPAL</Text>
                    </Button>
                </View>
                <View style={LEVEL_FINISHED_STYLES.logoContainer}>
                    <Image source={Images.mainLogoGray} style={LEVEL_FINISHED_STYLES.logo}/>
                </View>
            </View>
        )
    }
}