import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {CATEGORIES_LIST_STYLES} from "../../styles/stats/styles";
import {applyLetterSpacing} from "../../styles/global";


export class OperationRowStatsUnavailable extends React.Component {
    render() {
        return (
            <View style={CATEGORIES_LIST_STYLES.unavailableItem}>
                <View style={CATEGORIES_LIST_STYLES.unavailableItemContainer}>
                    <View>
                        <Text style={CATEGORIES_LIST_STYLES.unavailableItemCategoryName}>
                            {applyLetterSpacing(this.props.category.name(), 1)}
                        </Text>
                    </View>
                    <View style={CATEGORIES_LIST_STYLES.playMoreLevelsContainer}>
                        <Text style={CATEGORIES_LIST_STYLES.playMoreLevelsText}>
                            Jugá más niveles.
                        </Text>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        )
    }
}