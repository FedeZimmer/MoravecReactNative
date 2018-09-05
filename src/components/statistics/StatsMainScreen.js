import React from "react";
import {Text, View} from "react-native";
import {Content, Spinner} from "native-base";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import I18n from "../../../i18n/i18n";
import {OperationRowStats} from "./OperationRowStats";
import {OperationRowStatsUnavailable} from "./OperationRowStatsUnavailable";
import {spinnerColor} from "../../styles/main/styles";
import {CATEGORIES_LIST_STYLES} from "../../styles/stats/styles";

export let StatsMainScreen = class extends React.Component {
    renderOperationsStats() {
        return this.props.operationStats.map((operationStats, index) => {
            if (operationStats.hasStats) {
                return (
                    <OperationRowStats key={index}
                                       category={operationStats.category}
                                       averageTime={operationStats.averageTime}
                                       effectiveness={operationStats.effectiveness}
                                       responseTimes={operationStats.responseTimes}
                                       onShowOperationStats={this.props.onShowOperationStats}
                    />
                )
            } else {
                return (
                    <OperationRowStatsUnavailable key={index} category={operationStats.category}/>
                )
            }
        });
    }

    renderContent() {
        if (this.props.operationStats !== null) {
            return (
                <View>
                    <View style={CATEGORIES_LIST_STYLES.header}>
                        <Text key={0} style={CATEGORIES_LIST_STYLES.leftTextHeader}>
                            {I18n.t('stats.statsSelection.header.category')}
                        </Text>
                        <Text key={1} style={CATEGORIES_LIST_STYLES.centerTextHeader}>
                            {I18n.t('stats.statsSelection.header.averageTime')}
                        </Text>
                        <Text key={2} style={CATEGORIES_LIST_STYLES.rightTextHeader}>
                            {I18n.t('stats.statsSelection.header.effectiveness')}
                        </Text>
                    </View>
                    <View style={CATEGORIES_LIST_STYLES.list}>
                        {this.renderOperationsStats()}
                    </View>
                </View>
            )
        } else {
            return <Spinner color={spinnerColor}/>
        }
    }

    render() {
        return (
            <Content>
                <MoravecHeader title={I18n.t('stats.headerTitle').toUpperCase()}/>
                {this.renderContent()}
            </Content>
        )
    }
};

StatsMainScreen = makeItTestable('StatsMainScreen')(StatsMainScreen);