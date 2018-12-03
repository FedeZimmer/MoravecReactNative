import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Icon} from "native-base";
import {MoravecHeader} from "../common/Header";
import I18n from "../../../i18n/i18n";
import {LIST_STYLES} from "../../styles/tutorials/styles";

export class TutorialsList extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <MoravecHeader title='TUTORIAL'/>
                <View style={LIST_STYLES.list}>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewAdditionTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>{I18n.t('tutorial.tutorialSelection.addition')}</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewMultiplicationTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>
                            {I18n.t('tutorial.tutorialSelection.multiplication')}
                        </Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare2Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>{I18n.t('tutorial.tutorialSelection.toSquare2')}</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare3Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>{I18n.t('tutorial.tutorialSelection.toSquare3')}</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewMajorSystemTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>{I18n.t('tutorial.tutorialSelection.majorSystem')}</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare4Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>{I18n.t('tutorial.tutorialSelection.toSquare4')}</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}