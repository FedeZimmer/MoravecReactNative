import React from "react";
import {Text, View} from "react-native";
import {Content} from "native-base";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {OperationRowStats} from "./OperationRowStats";
import {OperationRowStatsUnavailable} from "./OperationRowStatsUnavailable";
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
                                       onShowOperationStats={this.props.onShowOperationStats}/>
                )
            } else {
                return (
                    <OperationRowStatsUnavailable key={index} category={operationStats.category}/>
                )
            }
        });
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='ESTADÍSTICAS'/>
                <View style={CATEGORIES_LIST_STYLES.header} >
                    <Text key={0} style={CATEGORIES_LIST_STYLES.leftTextHeader}>Operación</Text>
                    <Text key={1} style={CATEGORIES_LIST_STYLES.centerTextHeader}>Tiempo promedio</Text>
                    <Text key={2} style={CATEGORIES_LIST_STYLES.rightTextHeader}>Eficacia</Text>
                </View>
                <View style={CATEGORIES_LIST_STYLES.list}>
                    {this.renderOperationsStats()}
                </View>
            </Content>
        )
    }
};

StatsMainScreen = makeItTestable('StatsMainScreen')(StatsMainScreen);