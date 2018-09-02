import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {Tutorial} from "./Tutorial";
import I18n from "../../../i18n/i18n";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewAdditionTutorial extends React.Component {
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
                <Image source={Images.additionExample1} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.addition.firstSentence')}
                </Text>
                <Image source={Images.additionExample2} style={TUTORIAL_STYLES.image}/>
                <Text style={TUTORIAL_STYLES.explanation}>
                    {I18n.t('tutorial.addition.secondSentence')}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.addition.sectionTitle')}
                      headerTitle={I18n.t('tutorial.addition.headerTitle').toUpperCase()}
                      videoUrl="https://vjs.zencdn.net/v/oceans.mp4"
                      showExamples={this.showExamples} />
        );
    }
}