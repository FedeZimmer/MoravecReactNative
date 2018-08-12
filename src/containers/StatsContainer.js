import {connect} from "react-redux";
import React from "react";
import {StatsMainScreen} from "../components/statistics/StatsMainScreen";
import {OperationCategory} from "../models/operations/Category";

class StatsContainer extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.handleShowOperationStats = this.handleShowOperationStats.bind(this);
    }

    handleShowOperationStats(operationCategory, responseTimes) {
        this.props.navigation.navigate('OperationStatsScreen',
            {operationCategory: operationCategory, responseTimes: responseTimes});
    }

    getStats() {
        const categories = OperationCategory.allCategories();
        const categoryStats = categories.map((category) => {
            return {
                category: category,
                hasStats: false,
            }
        });

        // TODO: Get and calculate real stats!
        return categoryStats.map((categoryStat) => {
            if (categoryStat.category.codename() === "1d+1d") {
                return {
                    ...categoryStat,
                    hasStats: true,
                    averageTime: 1000,
                    effectiveness: 94,
                    responseTimes: [
                        150, 200, 50, 78, 320
                    ]
                }
            } else {
                return categoryStat
            }
        });
    }

    render() {
        return <StatsMainScreen operationStats={this.getStats()}
                                onShowOperationStats={this.handleShowOperationStats}
        />
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);