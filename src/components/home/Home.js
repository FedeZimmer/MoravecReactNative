import React from "react";
import {Image, Text, View, Linking} from "react-native";
import {Button} from "native-base";
import I18n from "../../../i18n/i18n";
import {HOME_STYLES} from "../../styles/home/styles";
import Images from "../../../assets/images/images";
import {PlayButton} from "./PlayButton";
import {PracticeButton} from "./PracticeButton";
import {TouchableWithoutFeedback} from "react-native";

export class Home extends React.Component {
    static navigationOptions = {
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.handlePlayButton = this.handlePlayButton.bind(this);
        this.handlePracticeButton = this.handlePracticeButton.bind(this);
        this.handleTutorialButton = this.handleTutorialButton.bind(this);
        this.handleStatsButton = this.handleStatsButton.bind(this);
    }

    handlePlayButton() {
        this.props.navigation.navigate('LevelSelection');
    }

    handlePracticeButton() {
        this.props.navigation.navigate('PracticeModeSelection');
    }

    handleTutorialButton() {
        this.props.navigation.navigate('TutorialsList');
    }

    handleStatsButton() {
        this.props.navigation.navigate('StatsContainer');
    }

    render() {
        return (
            <View style={HOME_STYLES.home}>
                <View style={HOME_STYLES.logoContainer}>
                    <Image source={Images.mainLogo} style={HOME_STYLES.logo}/>
                </View>
                <View style={HOME_STYLES.appNameContainer}>
                    <Text style={HOME_STYLES.appName}>Moravec</Text>
                </View>
                <View style={HOME_STYLES.optionsContainer}>
                    <View>
                        <PlayButton onPress={this.handlePlayButton}/>
                    </View>
                    <View style={HOME_STYLES.practiceOrTutorialContainer}>
                        <PracticeButton onPress={this.handlePracticeButton}/>
                        <Button title={'Tutorial'}
                                style={HOME_STYLES.tutorialButton}
                                onPress={this.handleTutorialButton}>
                            <Text style={HOME_STYLES.tutorialButtonText}>
                                {I18n.t('home.tutorialButton').toUpperCase()}
                            </Text>
                        </Button>
                    </View>
                    <View>
                        <Button style={HOME_STYLES.statsButton} onPress={this.handleStatsButton}>
                            <Text style={HOME_STYLES.statsButtonText}>{I18n.t('home.statsButton').toUpperCase()}</Text>
                        </Button>
                    </View>
                </View>
                <View style={HOME_STYLES.footerContainer}>
                    <TouchableWithoutFeedback>
                        <Image source={Images.logoLni} style={HOME_STYLES.logoFooter}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://elgatoylacaja.com.ar')}>
                        <Image source={Images.logoEglc} style={HOME_STYLES.logoFooter}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://eryx.co')}>
                        <Image source={Images.logoEryx} style={HOME_STYLES.logoFooter}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}