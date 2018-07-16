import React from "react";
import {Image, Text, View} from "react-native";
import {Button} from "native-base";
import {HOME_STYLES} from "../../styles/home/styles";
import Images from "../../../assets/images/images";
import {PlayButton} from "./PlayButton";
import {PracticeButton} from "./PracticeButton";

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props) {
        super(props);
        this.handlePlayButton = this.handlePlayButton.bind(this);
        this.handlePracticeButton = this.handlePracticeButton.bind(this);
        this.handleTutorialButton = this.handleTutorialButton.bind(this);
    }

    handlePlayButton() {
        this.props.navigation.navigate('Play');
    }

    handlePracticeButton() {
        this.props.navigation.navigate('Practice');
    }

    handleTutorialButton() {
        this.props.navigation.navigate('TutorialsList');
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
                        <Button style={HOME_STYLES.tutorialButton}
                                onPress={this.handleTutorialButton}>
                            <Text style={HOME_STYLES.tutorialButtonText}>TUTORIAL</Text>
                        </Button>
                    </View>
                    <View>
                        <Button transparent>
                            <Text style={HOME_STYLES.statsButtonText}>ESTADÍSTICAS</Text>
                        </Button>
                    </View>
                </View>
                <View style={HOME_STYLES.footerContainer}>
                    <Image source={Images.homeFooterLogos} style={HOME_STYLES.logoFooter}/>
                </View>
            </View>
        );
    }
}