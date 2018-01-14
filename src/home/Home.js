import React from "react";
import {Text, View, Image} from "react-native";
import {Button} from "native-base";
import {HOME_STYLES} from "./styles";

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props) {
        super(props);

        this.showLogo = this.showLogo.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.showFooter = this.showFooter.bind(this);
    }

    showLogo() {
        return (
            <View style={HOME_STYLES.logoContainer}>
                <Image/>
                <Text style={HOME_STYLES.logoFooter}>Moravec</Text>
            </View>
        )
    }

    showOptions() {
        const {navigate} = this.props.navigation;
        return (
            <View style={HOME_STYLES.optionsContainer}>
                <View style={HOME_STYLES.playContainer}>
                    <Button style={HOME_STYLES.playButton} onPress={() => navigate('Arcade')}>
                        <Text style={HOME_STYLES.playButtonText}>JUGAR</Text>
                    </Button>
                </View>
                <View style={HOME_STYLES.practiceOrTutorialContainer}>
                    <Button style={HOME_STYLES.practiceButton}>
                        <Text style={HOME_STYLES.practiceButtonText}>PRACTICA</Text>
                    </Button>
                    <Button style={HOME_STYLES.tutorialButton}>
                        <Text style={HOME_STYLES.tutorialButtonText}>TUTORIAL</Text>
                    </Button>
                </View>
            </View>
        )
    }

    showFooter() {
        return (
            <View style={HOME_STYLES.footerContainer}>
                <Image/>
            </View>
        )
    }

    render() {
        return (
            <View style={HOME_STYLES.home}>
                {this.showLogo()}
                {this.showOptions()}
                {this.showFooter()}
            </View>
        );
    }
}