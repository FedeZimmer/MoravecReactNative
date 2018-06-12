import React from "react";
import {Image, Text, View} from "react-native";
import {Button} from "native-base";
import {TYC_STYLES} from "../../styles/personalInfo/styles";
import Images from "../../../assets/images/images";
import I18n from "../../../i18n/i18n";

export class TermsAndConditions extends React.Component {
    static navigationOptions = {
        title: 'PersonalInfo',
        header: null
    };

    constructor(props) {
        super(props);
        this.handleAgreeTerms = this.handleAgreeTerms.bind(this);
    }

    handleAgreeTerms() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={TYC_STYLES.tyc}>
                <View style={TYC_STYLES.logoContainer}>
                    <Image source={Images.mainLogoGray} style={TYC_STYLES.logo}/>
                </View>
                <View style={TYC_STYLES.textContainer}>
                    <Text style={TYC_STYLES.text}>
                        Estoy de acuerdo en participar en la investigación online de la cognición aritmética titulada
                        Moravec. Durante esta experiencia se recogerán datos cronométricos de mis respuestas. Toda la
                        información será anónima y será utilizada solamente por los investigadores responsables del
                        estudio.
                        {'\n'}
                        {'\n'}
                        Mi participación es voluntario y puede ser interrumpida en cualquier momento. Entiendo que los
                        datos recogidos se guardan en una base de datos que servirá para su tratamiento informático no
                        nominativo.
                    </Text>
                </View>
                <View style={TYC_STYLES.agreeButtonContainer}>
                    <Button style={TYC_STYLES.agreeButton} onPress={this.handleAgreeTerms}>
                        <Text style={TYC_STYLES.agreeButtonText}>{I18n.t('agree').toUpperCase()}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}