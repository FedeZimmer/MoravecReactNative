import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import I18n from "../../../i18n/i18n";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewMajorSystemTutorial extends React.Component {
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
                <Text style={TUTORIAL_STYLES.exampleTitle}>{I18n.t('tutorial.majorSystem.table').toUpperCase()}</Text>
                <Image source={Images.majorSystemExample} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.majorSystem.sentence')}
                </Text>
            </View>
        )
    }

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "Fv0Si7UJHKw";
        } else {
            return "qhlm1tF6IQ4";
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.majorSystem.sectionTitle')}
                      headerTitle={I18n.t('tutorial.majorSystem.headerTitle').toUpperCase()}
                      videoId={this.videoId()}
                      showExamples={this.showExamples} />
        );
    }
}