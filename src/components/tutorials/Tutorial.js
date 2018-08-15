import React from "react";
import {ScrollView, Text, View, Image} from "react-native";
import {MoravecHeader} from "../common/Header";
import {VideoPlayer} from "./VideoPlayer";
import {TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class Tutorial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showingVideoInFullScreen: false,
            tutorialStyle: TUTORIAL_STYLES.tutorial,
        };

        this.onExpandVideo = this.onExpandVideo.bind(this);
        this.onShrinkVideo = this.onShrinkVideo.bind(this);
    }

    onExpandVideo() {
        this.setState({showingVideoInFullScreen: true, tutorialStyle: TUTORIAL_STYLES.tutorialFullScreen});
    };

    onShrinkVideo() {
        this.setState({showingVideoInFullScreen: false, tutorialStyle: TUTORIAL_STYLES.tutorial});
    }

    render() {
        return (
            <ScrollView style={this.state.tutorialStyle} scrollEnabled={!this.state.showingVideoInFullScreen}>
                <MoravecHeader title={this.props.headerTitle}/>
                <View style={TUTORIAL_STYLES.titleContainer}>
                    <Text style={TUTORIAL_STYLES.title}>{this.props.title}</Text>
                </View>
                <View style={TUTORIAL_STYLES.division}>
                </View>
                <VideoPlayer videoUrl={this.props.videoUrl}
                             onExpandVideo={this.onExpandVideo}
                             onShrinkVideo={this.onShrinkVideo}/>
                {this.props.showExamples()}
            </ScrollView>
        );
    }
}