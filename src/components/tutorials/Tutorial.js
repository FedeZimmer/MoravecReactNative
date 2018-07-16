import React from "react";
import Video from "react-native-video";
import VideoPlayer from 'react-native-video-controls';
import {ScrollView, Text, View, Image} from "react-native";
import {Spinner} from "native-base";
import {spinnerColor, TUTORIAL_STYLES} from "../../styles/tutorials/styles";

export class Tutorial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingVideo: true,
            height: 0,
        };

        this.videoLoaded = this.videoLoaded.bind(this);
        this.showSpinner = this.showSpinner.bind(this);
    }

    videoLoaded() {
        this.setState({height: 200, loadingVideo: false});
    }

    showSpinner() {
        if (this.state.loadingVideo) {
            return (
                <Spinner color={spinnerColor}/>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <ScrollView style={TUTORIAL_STYLES.tutorial}>
                <View style={TUTORIAL_STYLES.titleContainer}>
                    <Text style={TUTORIAL_STYLES.title}>{this.props.title}</Text>
                </View>
                <View style={TUTORIAL_STYLES.division}>
                </View>
                {this.showSpinner()}
                <VideoPlayer source={{uri: this.props.videoUrl}} resizeMode="stretch" paused={true}
                             onLoad={this.videoLoaded} toggleResizeModeOnFullscreen={false} disableVolume={true}
                             disableFullscreen={true} disableBack={true}/>
                {this.props.showExamples()}
            </ScrollView>
        );
    }
}