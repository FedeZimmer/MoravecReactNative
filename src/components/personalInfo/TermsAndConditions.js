import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {TYC_STYLES} from "../../styles/personalInfo/styles";
import Images from "../../../assets/images/images";
import I18n from "../../../i18n/i18n";
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
                            {I18n.t('termsAndConditions.text')}
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