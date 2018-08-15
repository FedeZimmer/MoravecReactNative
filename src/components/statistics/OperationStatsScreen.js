import React from "react";
import {Text, View} from "react-native";
import {Content} from "native-base";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {VictoryChart, VictoryLine, VictoryScatter, VictoryAxis} from "victory-native";
import {applyLetterSpacing} from "../../styles/global";
import {CHART_STYLES} from "../../styles/stats/styles";

export let OperationStatsScreen = class extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    operationCategory() {
        const navigationsParams = this.props.navigation.state.params;
        return navigationsParams.operationCategory.name();
    }

    responseTimes() {
        const navigationsParams = this.props.navigation.state.params;
        return navigationsParams.responseTimes;
    }

    getChartData() {
        return this.responseTimes().map((responseTime, index) => (
            {
                x: index + 1,
                y: responseTime,
            }
        ));
    }

    render() {
        return (
            <Content style={CHART_STYLES.content}>
                <MoravecHeader title='ESTADISTICAS'/>
                <View style={CHART_STYLES.container}>
                    <View>
                        <Text style={CHART_STYLES.categoryName}>
                            {applyLetterSpacing(this.operationCategory(), 1)}
                        </Text>
                    </View>
                    <View style={CHART_STYLES.verticalLabelContainer}>
                        <Text style={CHART_STYLES.verticalLabel}>Tiempo de respuesta (sec)</Text>
                    </View>
                    <View style={CHART_STYLES.horizontalLabelContainer}>
                        <Text style={CHART_STYLES.horizontalLabel}>Intentos</Text>
                    </View>
                    <View>
                        <VictoryChart height={CHART_STYLES.chartHeight}>
                            <VictoryAxis crossAxis style={CHART_STYLES.crossAxis}
                                         tickFormat={(value) => Math.round(value)}/>
                            <VictoryAxis dependentAxis crossAxis style={CHART_STYLES.dependentAxis}
                                         tickFormat={(value) => Math.round(value)}/>
                            <VictoryLine style={CHART_STYLES.lineChart} data={this.getChartData()}/>
                            <VictoryScatter style={CHART_STYLES.scatterPlot} size={5} data={this.getChartData()}/>
                        </VictoryChart>
                    </View>
                </View>
            </Content>
        )
    }
};

OperationStatsScreen = makeItTestable('OperationStatsScreen')(OperationStatsScreen);