import React, {Component} from "react";
import {Text, View} from "react-native";
import {BackButton} from "./BackButton";
import {HEADER_STYLES} from "../../styles/common/styles";
import {withNavigation} from "react-navigation";

export const MoravecHeader = withNavigation(class extends Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack(){
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={HEADER_STYLES.header}>
                <View style={HEADER_STYLES.left}>
                    <BackButton goBack={this.handleGoBack}/>
                </View>
                <View style={HEADER_STYLES.titleContent}>
                    <Text style={HEADER_STYLES.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
});