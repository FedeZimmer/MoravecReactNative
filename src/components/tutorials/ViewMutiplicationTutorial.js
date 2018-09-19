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

    constructor(props) {
        super(props);

        this.showExamples = this.showExamples.bind(this);
    }

    showExamples() {
        return (
            <View style={TUTORIAL_STYLES.exampleContainer}>
                <Text style={TUTORIAL_STYLES.exampleTitle}>{I18n.t('tutorial.common.examples').toUpperCase()}</Text>
                <Image source={Images.multiplicationExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.multiplication.firstSentence')}
                </Text>
                <Image source={Images.multiplicationExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.multiplication.secondSentence')}
                </Text>
                <Image source={Images.multiplicationExample3} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.multiplication.thirdSentence')}
                </Text>
            </View>
        )
    }

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "mwa-zblNdR4";
        } else {
            // TODO: Replace with the english video ID
            return "mwa-zblNdR4";
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.multiplication.sectionTitle')}
                      headerTitle={I18n.t('tutorial.multiplication.headerTitle').toUpperCase()}
                      videoId={this.videoId()}
                      showExamples={this.showExamples} />
        );
    }
}