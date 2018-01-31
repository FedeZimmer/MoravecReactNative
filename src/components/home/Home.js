import React from "react";
import {Text, View, Image} from "react-native";
import {Button} from "native-base";
import {HOME_STYLES} from "../../styles/home/styles";
import Images from "../../../assets/images/images";
import I18n from "../../../i18n/i18n";

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
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
                        <Button style={HOME_STYLES.playButton} onPress={() => navigate('Arcade')}>
                            <Text style={HOME_STYLES.playButtonText}>{I18n.t('play').toUpperCase()}</Text>
                        </Button>
                    </View>
                    <View style={HOME_STYLES.practiceOrTutorialContainer}>
                        <Button style={HOME_STYLES.practiceButton}>
                            <Text style={HOME_STYLES.practiceButtonText}>PRÁCTICA</Text>
                        </Button>
                        <Button style={HOME_STYLES.tutorialButton}>
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