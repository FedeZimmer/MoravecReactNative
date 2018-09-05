import React from "react";
import Video from "react-native-video";
import {ScrollView, Text, View, Image, TouchableWithoutFeedback, Platform} from "react-native";
import {Icon, Spinner} from 'native-base';
import {VIDEO_PLAYER_STYLES} from "../../styles/tutorials/styles";
import {spinnerColor} from "../../styles/main/styles";

export class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            paused: false,
            showingInFullScreen: false,
            videoStyle: VIDEO_PLAYER_STYLES.videoLoading,
            videoContainerStyle: VIDEO_PLAYER_STYLES.videoContainer,
            controlsContainerStyle: VIDEO_PLAYER_STYLES.controlsContainer
        };

        this.handleVideoLoaded = this.handleVideoLoaded.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleExpandScreen = this.handleExpandScreen.bind(this);
        this.handleShrinkScreen = this.handleShrinkScreen.bind(this);
    }

    handleVideoLoaded() {
        this.setState({loaded: true, videoStyle: VIDEO_PLAYER_STYLES.video});
    }

    handlePause() {
        this.setState({paused: true});
    }

    handlePlay() {
        this.setState({paused: false});
    }

    handleExpandScreen() {
        this.props.onExpandVideo();
        this.setState(
            {
                showingInFullScreen: true,
                videoStyle: VIDEO_PLAYER_STYLES.fullScreenVideo,
                videoContainerStyle: VIDEO_PLAYER_STYLES.videoContainerFullScreen[Platform.OS],
                controlsContainerStyle: VIDEO_PLAYER_STYLES.controlsContainerFullScreen
            });
    }

    handleShrinkScreen() {
        this.props.onShrinkVideo();
        this.setState(
            {
                showingInFullScreen: false,
                videoStyle: VIDEO_PLAYER_STYLES.video,
                videoContainerStyle: VIDEO_PLAYER_STYLES.videoContainer,
                controlsContainerStyle: VIDEO_PLAYER_STYLES.controlsContainer
            });
    }

    _renderSpinner() {
        if (this.state.loaded) {
            return null;
        } else {
            return (
                <View style={VIDEO_PLAYER_STYLES.loadingContainer}>
                    <Spinner style={VIDEO_PLAYER_STYLES.spinner} color={spinnerColor}/>
                </View>
            )
        }
    }

    _renderPlayerControls() {
        if (this.state.loaded) {
            return (
                <View style={this.state.controlsContainerStyle}>
                    <PlayPauseButton paused={this.state.paused} onPlay={this.handlePlay} onPause={this.handlePause}/>
                    <ScreenSizeButton showingInFullScreen={this.state.showingInFullScreen}
                                      onExpandScreen={this.handleExpandScreen} onShrinkScreen={this.handleShrinkScreen}/>
                </View>
            )
        } else {
            return null;
        }
    }

    _renderOverlay() {
        if (this.state.showingInFullScreen) {
            return (
                <View style={VIDEO_PLAYER_STYLES.overlay}>
                </View>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={this.state.videoContainerStyle}>
                <Video source={{ uri: this.props.videoUrl }} resizeMode="cover" paused={this.state.paused}
                       style={this.state.videoStyle} onLoad={this.handleVideoLoaded} repeat={true}/>
                {this._renderSpinner()}
                {this._renderPlayerControls()}
                {this._renderOverlay()}
            </View>
        );
    }
}


class PlayPauseButton extends React.Component {
    render() {
        if (this.props.paused) {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.playPauseButton} onPress={this.props.onPlay}>
                    <Icon style={VIDEO_PLAYER_STYLES.button[Platform.OS]} name="ios-play"/>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.playPauseButton} onPress={this.props.onPause}>
                    <Icon style={VIDEO_PLAYER_STYLES.button[Platform.OS]} name="ios-pause"/>
                </TouchableWithoutFeedback>
            )
        }
    }
}

class ScreenSizeButton extends React.Component {
    render() {
        if (this.props.showingInFullScreen) {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.screenSizeButton}
                                          onPress={this.props.onShrinkScreen}>
                    <Icon style={VIDEO_PLAYER_STYLES.button[Platform.OS]} name="md-contract"/>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.screenSizeButton}
                                          onPress={this.props.onExpandScreen}>
                    <Icon style={VIDEO_PLAYER_STYLES.button[Platform.OS]} name="md-expand"/>
                </TouchableWithoutFeedback>
            )
        }
    }
}