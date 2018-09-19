import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import Images from "../../../assets/images/images";
import I18n from "../../../i18n/i18n";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewToSquare4Tutorial extends React.Component {
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
                <Image source={Images.square4dExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare4.firstSentence')}
                </Text>
                <Image source={Images.square4dExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare4.secondSentence')}
                </Text>
            </View>
        )
    }

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "WW_VLPJ__V0";
        } else {
            // TODO: Replace with the english video ID
            return "WW_VLPJ__V0";
        }
    }


    render() {
        return (
            <Tutorial title={I18n.t('tutorial.toSquare4.sectionTitle')}
                      headerTitle={I18n.t('tutorial.toSquare4.headerTitle').toUpperCase()}
                      videoId={this.videoId()}
                      showExamples={this.showExamples} />
        );
    }
}