import React from "react";
import {Text, View} from "react-native";
import {Content} from "native-base";
import {makeItTestable} from "../../utils/testable_hoc";
import {MoravecHeader} from "../common/Header";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";

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
            <Content>
                <MoravecHeader title='ESTADISTICAS'/>
                <View>
                    <Text>{this.operationCategory()}</Text>
                </View>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryLine
                        style={{}} // https://formidable.com/open-source/victory/docs/common-props/#style
                        data={this.getChartData()}
                    />
                </VictoryChart>
            </Content>
        )
    }
};

OperationStatsScreen = makeItTestable('OperationStatsScreen')(OperationStatsScreen);