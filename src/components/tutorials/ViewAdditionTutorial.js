import React from "react";
import {Image, Text, View} from "react-native";
import {Tutorial} from "./Tutorial";
import I18n from "../../../i18n/i18n";
import Images from "../../../assets/images/images";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class ViewAdditionTutorial extends React.Component {
    static navigationOptions = {
        title: 'Tutorial',
        header: null
    };

    videoId() {
        if (I18n.currentLocale().startsWith('es')) {
            return "Ies8X7VxGKs";
        } else {
            return "9aW6b2qZ18s";
        }
    }

    render() {
        return (
            <Tutorial title={I18n.t('tutorial.addition.sectionTitle')}
                      headerTitle={I18n.t('tutorial.addition.headerTitle').toUpperCase()}
                      videoId={this.videoId()}>

                <View style={TUTORIAL_STYLES.exampleContainer}>
                    <Text style={TUTORIAL_STYLES.exampleTitle}>{I18n.t('tutorial.common.examples').toUpperCase()}</Text>
                    <View style={TUTORIAL_STYLES.imageContainer}>
                        <Image source={Images.additionExample1} style={TUTORIAL_STYLES.image}/>
                    </View>
                    <Text style={TUTORIAL_STYLES.explanation}>
                        {I18n.t('tutorial.addition.firstSentence')}
                    </Text>
                    <View style={TUTORIAL_STYLES.imageContainer}>
                        <Image source={Images.additionExample2} style={TUTORIAL_STYLES.image}/>
                    </View>
                    <Text style={TUTORIAL_STYLES.explanation}>
                        {I18n.t('tutorial.addition.secondSentence')}
                    </Text>
                </View>
            </Tutorial>
        );
    }
}