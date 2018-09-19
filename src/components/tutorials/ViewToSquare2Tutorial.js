import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import I18n from "../../../i18n/i18n";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewToSquare2Tutorial extends React.Component {
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
                <Image source={Images.squareExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare2.firstSentence')}
                </Text>
                <Image source={Images.squareExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.toSquare2.secondSentence')}
                </Text>
            </View>
        )
    }

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "_CUWlWjFreM";
        } else {
            return "DyBsVVe5w5g";
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.toSquare2.sectionTitle')}
                      headerTitle={I18n.t('tutorial.toSquare2.headerTitle').toUpperCase()}
                      videoId={this.videoId()}
                      showExamples={this.showExamples} />
        );
    }
}