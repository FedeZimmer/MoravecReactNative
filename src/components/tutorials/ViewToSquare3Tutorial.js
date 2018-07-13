import React from "react";
import Video from "react-native-video";
import {ScrollView, Text, View} from "react-native";

export class ViewToSquare3Tutorial extends React.Component {
    static navigationOptions = {
        title: 'Tutorial'
    };

    render() {
        return (
            <ScrollView style={{height: 100}}>
                <View style={{flex: 1}}>
                    <Text>x^2 potencia (3d)</Text>
                </View>
                <Video source={{uri: 'http://techslides.com/demos/sample-videos/small.mp4'}}
                       style={{flex: 1}} resizeMode={"stretch"}
                       paused={true} controls={true}
                />
                <View style={{flex: 1}}>
                    <Text>Ejemplos</Text>
                    <Text>Bla bla bla</Text>
                </View>
            </ScrollView>
        );
    }
}