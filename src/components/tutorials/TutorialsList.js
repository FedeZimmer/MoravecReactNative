import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Content, Icon} from "native-base";
import {MoravecHeader} from "../common/Header";
import {LIST_STYLES} from "../../styles/tutorials/styles";

export class TutorialsList extends React.Component {
    static navigationOptions = {
        title: 'Tutoriales',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Content>
                <MoravecHeader title='TUTORIAL'/>
                <View style={LIST_STYLES.list}>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewAdditionTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Suma</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewMultiplicationTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Producto</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare2Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Potencia (2 dígitos)</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare3Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Potencia (3 dígitos)</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewMajorSystemTutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Sistema Mayor</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={LIST_STYLES.item} onPress={() => navigate('ViewToSquare4Tutorial')}>
                        <Text style={LIST_STYLES.tutorialName}>Potencia (4 dígitos)</Text>
                        <Icon style={LIST_STYLES.icon} name="ios-arrow-forward"/>
                    </TouchableOpacity>
                </View>
            </Content>
        );
    }
}