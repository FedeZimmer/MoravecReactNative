import React from "react";
import {View} from "react-native";
import YouTube from "react-native-youtube";
import {VIDEO_PLAYER_STYLES} from "../../styles/tutorials/styles";
import {YOUTUBE_API_KEY} from "../../../secrets";

export class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };

        this.handleReady = this.handleReady.bind(this);
    }

    handleReady() {
        // FIXME
        // This is a hack due to a bug in react-native-youtube which prevents video controls
        // from being shown in Android devices.
        // Please checkout https://github.com/inProgress-team/react-native-youtube/issues/131
        // for more information on the status of this issue.
        setTimeout(() => this.setState({ height: 240 }), 500);
    }

    render() {
        return (
            <View style={VIDEO_PLAYER_STYLES.videoContainer}>
                <YouTube
                    videoId={this.props.videoId}
                    play={false}
                    fullscreen={false}
                    loop={false}
                    onReady={this.handleReady}
                    style={{height: this.state.height}}
                    apiKey={YOUTUBE_API_KEY}
                    controls={1}
                />
            </View>
        );
    }
}
