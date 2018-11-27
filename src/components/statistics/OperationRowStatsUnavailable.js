import React from "react";
import {Text, View} from "react-native";
import {CATEGORIES_LIST_STYLES} from "../../styles/stats/styles";
import I18n from "../../../i18n/i18n";
import {OperationCategory} from "../../models/operations/Category";


export class OperationRowStatsUnavailable extends React.Component {
    categoryName() {
        return new OperationCategory(this.props.categoryCodename).name();
    }

    render() {
        return (
            <View style={CATEGORIES_LIST_STYLES.unavailableItem}>
                <View style={CATEGORIES_LIST_STYLES.categoryNameContainer}>
                    <Text style={CATEGORIES_LIST_STYLES.unavailableItemCategoryName}>
                        {this.categoryName()}
                    </Text>
                </View>
                <View style={CATEGORIES_LIST_STYLES.playMoreLevelsContainer}>
                    <Text style={CATEGORIES_LIST_STYLES.playMoreLevelsText}>
                        {I18n.t('stats.statsSelection.unavailableStats')}
                    </Text>
                </View>
            </View>
        )
    }
}