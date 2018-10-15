import React from "react";
import {ScrollView, Text, View} from "react-native";
import {MoravecHeader} from "../common/Header";
import {VideoPlayer} from "./VideoPlayer";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class Tutorial extends React.Component {
    render() {
        return (
            <ScrollView style={TUTORIAL_STYLES.tutorial}>
                <MoravecHeader title={this.props.headerTitle}/>
                <View style={TUTORIAL_STYLES.titleContainer}>
                    <Text style={TUTORIAL_STYLES.title}>{this.props.title}</Text>
                </View>
                <View style={TUTORIAL_STYLES.division}>
                </View>
                <VideoPlayer videoId={this.props.videoId}/>
                {this.props.children}
            </ScrollView>
        );
    }
}