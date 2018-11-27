import React from "react";
import {Text, View} from "react-native";
import {Content} from "native-base";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import I18n from "../../../i18n/i18n";
import {VictoryChart, VictoryLine, VictoryScatter, VictoryAxis} from "victory-native";
import {applyLetterSpacing} from "../../styles/global";
import {CHART_STYLES} from "../../styles/stats/styles";
import {OperationCategory} from "../../models/operations/Category";

export let OperationStatsScreen = class extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    categoryName() {
        const navigationsParams = this.props.navigation.state.params;
        return new OperationCategory(navigationsParams.categoryCodename).name();
    }

    responseTimes() {
        const navigationsParams = this.props.navigation.state.params;
        return navigationsParams.responseTimes;
    }

    getChartData() {
        return this.responseTimes().map((responseTime, index) => (
            {
                x: index + 1,
                y: responseTime / 1000.0,
            }
        ));
    }

    render() {
        return (
            <Content style={CHART_STYLES.content}>
                <MoravecHeader title={I18n.t('stats.headerTitle').toUpperCase()}/>
                <View style={CHART_STYLES.container}>
                    <View style={CHART_STYLES.categoryNameContainer}>
                        <Text style={CHART_STYLES.categoryName}>
                            {applyLetterSpacing(this.categoryName(), 1)}
                        </Text>
                    </View>
                    <View>
                        <VictoryChart height={CHART_STYLES.chartHeight} width={CHART_STYLES.chartWidth}>
                            <VictoryAxis crossAxis style={CHART_STYLES.crossAxis}
                                         tickFormat={(value) => Math.round(value)}/>
                            <VictoryAxis dependentAxis crossAxis style={CHART_STYLES.dependentAxis}/>
                            <VictoryLine style={CHART_STYLES.lineChart} data={this.getChartData()}/>
                            <VictoryScatter style={CHART_STYLES.scatterPlot} size={5} data={this.getChartData()}/>
                        </VictoryChart>
                    </View>
                </View>
                <View style={CHART_STYLES.verticalLabelContainer}>
                    <Text style={CHART_STYLES.verticalLabel}>{I18n.t('stats.chart.verticalAxisLabel')}</Text>
                </View>
                <View style={CHART_STYLES.horizontalLabelContainer}>
                    <Text style={CHART_STYLES.horizontalLabel}>{I18n.t('stats.chart.horizontalAxisLabel')}</Text>
                </View>
            </Content>
        )
    }
};

OperationStatsScreen = makeItTestable('OperationStatsScreen')(OperationStatsScreen);