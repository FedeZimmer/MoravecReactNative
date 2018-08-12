import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {formatTime} from "../../utils/format_time";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles";
import {formatPercentage} from "../../utils/format_percentage";


export class OperationRowStats extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowDetails = this.handleShowDetails.bind(this);
    }

    handleShowDetails() {
        return this.props.onShowOperationStats(this.props.category,
            this.props.responseTimes);
    }

    render() {
        return (
            <TouchableOpacity style={LEVEL_SELECTION_STYLES.playItem}
                              onPress={this.handleShowDetails}>
                <View style={LEVEL_SELECTION_STYLES.listItemContainer}>
                    <View>
                        <Text style={LEVEL_SELECTION_STYLES.levelNumber}>
                            {this.props.category.name()}
                        </Text>
                    </View>
                    <View>
                        <Text style={LEVEL_SELECTION_STYLES.levelTime}>
                            {formatTime(this.props.averageTime)}
                        </Text>
                    </View>
                    <View style={LEVEL_SELECTION_STYLES.levelResultContainer}>
                        <Text style={LEVEL_SELECTION_STYLES.levelNumber}>
                            {formatPercentage(this.props.effectiveness)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}