import React from "react";
import VideoPlayer from "react-native-video-controls";
import {ScrollView, Text, View, Image} from "react-native";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class Tutorial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={TUTORIAL_STYLES.tutorial}>
                <View style={TUTORIAL_STYLES.titleContainer}>
                    <Text style={TUTORIAL_STYLES.title}>{this.props.title}</Text>
                </View>
                <View style={TUTORIAL_STYLES.division}>
                </View>
                <VideoPlayer source={{uri: this.props.videoUrl}} onPress={() => null}
                             resizeMode="stretch" paused={true} onLoad={this.videoLoaded}
                             toggleResizeModeOnFullscreen={false} disableVolume={true} disableFullscreen={true}
                             disableBack={true}/>
                {this.props.showExamples()}
            </ScrollView>
        );
    }
}