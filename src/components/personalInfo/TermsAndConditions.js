import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {TYC_STYLES} from "../../styles/personalInfo/styles";
import Images from "../../../assets/images/images";
import {AcceptTACButton} from "./AcceptTACButton";

export class TermsAndConditions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAgreeTerms = this.handleAgreeTerms.bind(this);
    }

    handleAgreeTerms() {
        this.props.handleAgreeTerms();
    }

    render() {
        return (
            <View style={TYC_STYLES.tyc}>
                <View style={TYC_STYLES.logoContainer}>
                    <Image source={Images.mainLogoGray} style={TYC_STYLES.logo}/>
                </View>
                <View style={TYC_STYLES.textContainer}>
                    <ScrollView>
                        <Text style={TYC_STYLES.text}>
                            Estoy de acuerdo en participar en la investigación online de la cognición aritmética
                            titulada
                            Moravec. Durante esta experiencia se recogerán datos cronométricos de mis respuestas. Toda
                            la
                            información será anónima y será utilizada solamente por los investigadores responsables del
                            estudio.
                            {'\n'}
                            {'\n'}
                            Mi participación es voluntario y puede ser interrumpida en cualquier momento. Entiendo que
                            los
                            datos recogidos se guardan en una base de datos que servirá para su tratamiento informático
                            no
                            nominativo.
                        </Text>
                    </ScrollView>
                </View>
                <View style={TYC_STYLES.agreeButtonContainer}>
                    <AcceptTACButton onPress={this.handleAgreeTerms}/>
                </View>
            </View>
        );
    }
}