import React from "react";
import Video from "react-native-video";
import {ScrollView, Text, View, Image, TouchableWithoutFeedback} from "react-native";
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

        this._renderSpinner = this._renderSpinner.bind(this);
        this.onVideoLoaded = this.onVideoLoaded.bind(this);
        this._renderPlayerControls = this._renderPlayerControls.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
        this.expandScreen = this.expandScreen.bind(this);
        this.shrinkScreen = this.shrinkScreen.bind(this);
        this._renderOverlay = this._renderOverlay.bind(this);
    }

    _renderSpinner() {
        if (this.state.loaded) {
            return null;
        } else {
            return <Spinner color={spinnerColor}/>;
        }
    }

    onVideoLoaded() {
        this.setState({loaded: true, videoStyle: VIDEO_PLAYER_STYLES.video});
    }

    _renderPlayerControls() {
        if (this.state.loaded) {
            return (
                <View style={this.state.controlsContainerStyle}>
                    <PlayPauseButton paused={this.state.paused} onPlay={this.play} onPause={this.pause}/>
                    <ScreenSizeButton showingInFullScreen={this.state.showingInFullScreen}
                                      onExpandScreen={this.expandScreen} onShrinkScreen={this.shrinkScreen}/>
                </View>
            )
        } else {
            return null;
        }
    }

    pause() {
        this.setState({paused: true});
    }

    play() {
        this.setState({paused: false});
    }

    expandScreen() {
        this.props.onExpandVideo();
        this.setState(
            {
                showingInFullScreen: true,
                videoStyle: VIDEO_PLAYER_STYLES.fullScreenVideo,
                videoContainerStyle: VIDEO_PLAYER_STYLES.videoContainerFullScreen,
                controlsContainerStyle: VIDEO_PLAYER_STYLES.controlsContainerFullScreen
            });
    }

    shrinkScreen() {
        this.props.onShrinkVideo();
        this.setState(
            {
                showingInFullScreen: false,
                videoStyle: VIDEO_PLAYER_STYLES.video,
                videoContainerStyle: VIDEO_PLAYER_STYLES.videoContainer,
                controlsContainerStyle: VIDEO_PLAYER_STYLES.controlsContainer
            });
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
                       style={this.state.videoStyle} onLoad={this.onVideoLoaded}/>
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
                    <Icon style={VIDEO_PLAYER_STYLES.button} name="ios-play"/>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.playPauseButton} onPress={this.props.onPause}>
                    <Icon style={VIDEO_PLAYER_STYLES.button} name="ios-pause"/>
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
                    <Icon style={VIDEO_PLAYER_STYLES.button} name="md-contract"/>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <TouchableWithoutFeedback style={VIDEO_PLAYER_STYLES.screenSizeButton}
                                          onPress={this.props.onExpandScreen}>
                    <Icon style={VIDEO_PLAYER_STYLES.button} name="md-expand"/>
                </TouchableWithoutFeedback>
            )
        }
    }
}