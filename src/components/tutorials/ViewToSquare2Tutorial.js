import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
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
                <Image source={Images.squareExample2} style={TUTORIAL_STYLES.image}/>
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

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.toSquare2.sectionTitle')}
                      headerTitle={I18n.t('tutorial.toSquare2.headerTitle').toUpperCase()}
                      videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
                      showExamples={this.showExamples} />
        );
    }
}