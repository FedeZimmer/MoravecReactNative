import React from "react";
import {Text, View} from "react-native";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles";


export class OperationRowStatsUnavailable extends React.Component {
    render() {
        return (
            <View style={LEVEL_SELECTION_STYLES.playItem}>
                <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                    <View>
                        <Text style={LEVEL_SELECTION_STYLES.levelNumber}>
                            {this.props.category.name()}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Juega más niveles.
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}