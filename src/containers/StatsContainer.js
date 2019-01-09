import {connect} from "react-redux";
import React from "react";
import {StatsMainScreen} from "../components/statistics/StatsMainScreen";
import {fetchOperationCategoryStats} from "../actions/stats_actions";

class StatsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowOperationStats = this.handleShowOperationStats.bind(this);
    }

    handleShowOperationStats(operationCategoryCodename, responseTimes) {
        const atLeastOneDataToShowInTheGraph = responseTimes.length > 0;
        if (atLeastOneDataToShowInTheGraph) {
            this.props.navigation.navigate('OperationStatsScreen',
                {categoryCodename: operationCategoryCodename, responseTimes: responseTimes});
        }
    }

    componentDidMount() {
        this.props.actions.fetchStats();
    }

    render() {
        return <StatsMainScreen operationStats={this.props.operationCategoryStats}
                                onShowOperationStats={this.handleShowOperationStats}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        operationCategoryStats: state.stats.operationCategoryStats
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            fetchStats: () => {
                dispatch(fetchOperationCategoryStats())
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);