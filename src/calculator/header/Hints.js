import React from 'react';
import {Text, View} from "react-native";

import {HEADER_STYLES} from "./styles";


export default class Hints extends React.Component {
    render() {
        return (
            <View style={HEADER_STYLES.hintsContainer}>
                <Text style={HEADER_STYLES.hintsText}>Pistas: </Text>
                <Text style={HEADER_STYLES.hintsNumber}>3/3</Text>
            </View>
        )
    }
}