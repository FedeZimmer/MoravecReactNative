import React from "react";
import {Text, View} from "react-native";
import {Content} from "native-base";
import {LEVEL_SELECTION_STYLES} from "../../styles/game/styles"
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {OperationRowStats} from "./OperationRowStats";
import {OperationRowStatsUnavailable} from "./OperationRowStatsUnavailable";

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
                    <OperationRowStatsUnavailable key={index}
                                                  category={operationStats.category}
                    />
                )
            }
        });
    }

    render() {
        return (
            <Content>
                <MoravecHeader title='ESTADISTICAS'/>
                <View style={LEVEL_SELECTION_STYLES.list}>
                    <View>
                        <Text key={0}>Operación</Text>
                        <Text key={1}>Tiempo promedio</Text>
                        <Text key={2}>Eficacia</Text>
                    </View>
                    {this.renderOperationsStats()}
                </View>
            </Content>
        )
    }
};

StatsMainScreen = makeItTestable('StatsMainScreen')(StatsMainScreen);