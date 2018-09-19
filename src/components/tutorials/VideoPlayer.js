import React from "react";
import {View} from "react-native";
import YouTube from "react-native-youtube";
import {VIDEO_PLAYER_STYLES} from "../../styles/tutorials/styles";
import {YOUTUBE_API_KEY} from "../../../secrets";

export class VideoPlayer extends React.Component {
    render() {
        return (
            <View style={VIDEO_PLAYER_STYLES.videoContainer}>
                <YouTube
                    videoId={this.props.videoId}
                    play={false}
                    fullscreen={false}
                    loop={false}
                    onReady={e => this.setState({loaded: true})}
                    style={VIDEO_PLAYER_STYLES.video}
                    apiKey={YOUTUBE_API_KEY}
                    controls={1}
                />
            </View>
        );
    }
}
