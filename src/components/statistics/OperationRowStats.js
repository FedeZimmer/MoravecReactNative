import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {formatTime} from "../../utils/format_time";
import {formatPercentage} from "../../utils/format_percentage";
import {CATEGORIES_LIST_STYLES} from "../../styles/stats/styles";
import {applyLetterSpacing} from "../../styles/global";
import {OperationCategory} from "../../models/operations/Category";


export class OperationRowStats extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowDetails = this.handleShowDetails.bind(this);
    }

    handleShowDetails() {
        return this.props.onShowOperationStats(this.props.categoryCodename, this.props.responseTimes);
    }

    categoryName() {
        return new OperationCategory(this.props.categoryCodename).name();
    }

    render() {
        return (
            <TouchableOpacity style={CATEGORIES_LIST_STYLES.availableItem} onPress={this.handleShowDetails}>
                <View style={CATEGORIES_LIST_STYLES.availableItemContainer}>
                    <View>
                        <Text style={CATEGORIES_LIST_STYLES.availableItemCategoryName}>
                            {applyLetterSpacing(this.categoryName(), 1)}
                        </Text>
                    </View>
                    <View>
                        <Text style={CATEGORIES_LIST_STYLES.averageTime}>
                            {formatTime(this.props.averageTime)}
                        </Text>
                    </View>
                    <View>
                        <Text style={CATEGORIES_LIST_STYLES.effectiveness}>
                            {formatPercentage(this.props.effectiveness)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}