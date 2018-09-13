import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import Images from "../../../assets/images/images";
import I18n from "../../../i18n/i18n";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";
import {CDNBaseURL} from "../../../index";

export class ViewToSquare3Tutorial extends React.Component {
    static navigationOptions = {
        title: 'Tutorial',
        header: null
    };

    constructor(props) {
        super(props);

        this.showExamples = this.showExamples.bind(this);
    }

    showExamples() {
        return (
            <View style={TUTORIAL_STYLES.exampleContainer}>
                <Text style={TUTORIAL_STYLES.exampleTitle}>{I18n.t('tutorial.common.examples').toUpperCase()}</Text>
                <Image source={Images.square3dExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare3.firstSentence')}
                </Text>
                <Image source={Images.square3dExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare3.secondSentence')}
                </Text>
            </View>
        )
    }

    videoUrl() {
        if (I18n.currentLocale().startsWith('es')) {
            return `${CDNBaseURL}/3 digitos al cuadrado (Tutorial).mp4`;
        } else {
            return `${CDNBaseURL}/Moravec EN 04.mp4`;
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.toSquare3.sectionTitle')}
                      headerTitle={I18n.t('tutorial.toSquare3.headerTitle').toUpperCase()}
                      videoUrl={this.videoUrl()}
                      showExamples={this.showExamples} />
        );
    }
}