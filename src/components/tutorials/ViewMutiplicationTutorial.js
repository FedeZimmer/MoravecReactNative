import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import I18n from "../../../i18n/i18n";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewMultiplicationTutorial extends React.Component {
    static navigationOptions = {
        title: 'Tutorial',
        header: null
    };

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "mwa-zblNdR4";
        } else {
            return "egcXRXXWuwE";
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.multiplication.sectionTitle')}
                      headerTitle={I18n.t('tutorial.multiplication.headerTitle').toUpperCase()}
                      videoId={this.videoId()}>
                <View style={TUTORIAL_STYLES.exampleContainer}>
                    <Text style={TUTORIAL_STYLES.exampleTitle}>{I18n.t('tutorial.common.examples').toUpperCase()}</Text>
                    <View style={TUTORIAL_STYLES.imageContainer}>
                        <Image source={Images.multiplicationExample1} style={TUTORIAL_STYLES.image}/>
                    </View>
                    <Text style={TUTORIAL_STYLES.explanation}>
                        {I18n.t('tutorial.multiplication.firstSentence')}
                    </Text>
                    <View style={TUTORIAL_STYLES.imageContainer}>
                        <Image source={Images.multiplicationExample2} style={TUTORIAL_STYLES.image}/>
                    </View>
                    <Text style={TUTORIAL_STYLES.explanation}>
                        {I18n.t('tutorial.multiplication.secondSentence')}
                    </Text>
                    <View style={TUTORIAL_STYLES.imageContainer}>
                        <Image source={Images.multiplicationExample3} style={TUTORIAL_STYLES.image}/>
                    </View>
                    <Text style={TUTORIAL_STYLES.explanation}>
                        {I18n.t('tutorial.multiplication.thirdSentence')}
                    </Text>
                </View>
            </Tutorial>
        );
    }
}