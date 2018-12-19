import {lightGrayColor, whiteColor, superLightGrayColor, grayColor, greenColor, pinkColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const CATEGORIES_LIST_STYLES = {
    header: {
        flexDirection: "row",
        backgroundColor: whiteColor,
        justifyContent: "space-around",
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
        height: 30,
        alignItems: "center"
    },
    textHeader: {
        fontSize: 15,
        color: grayColor,
        fontFamily: "Gotham-Book",
    },
    list: {
        backgroundColor: lightGrayColor,
    },
    availableItem: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 2,
        borderBottomColor: superLightGrayColor,
    },
    unavailableItem: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#C9CDD6",
        height: windowHeight * 0.1,
        borderBottomWidth: 2,
        borderBottomColor: superLightGrayColor,
    },
    categoryNameContainer: {
        flex: 1,
        alignContent: "flex-start",
        flexGrow: 1,
        paddingLeft: 10,
    },
    availableItemCategoryName: {
        fontFamily: 'Gotham-Book',
        fontSize: 25,
        color: grayColor,
        textAlign: 'left',
    },
    unavailableItemCategoryName: {
        fontFamily: 'Gotham-Book',
        fontSize: 25,
        color: whiteColor,
    },
    averageTimeContainer: {
        flex: 1,
        alignContent: "flex-start",
        flexGrow: 1.5
    },
    averageTime: {
        fontFamily: 'Gotham-Book',
        fontSize: 25,
        color: greenColor,
    },
    effectivenessContainer: {
        flex: 1,
        alignContent: "flex-start",
        flexGrow: 1
    },
    effectiveness: {
        fontFamily: 'Gotham-Book',
        fontSize: 25,
        color: pinkColor,
    },
    playMoreLevelsContainer: {
        flex: 1,
        alignContent: "flex-start",
        flexGrow: 2
    },
    playMoreLevelsText: {
        fontFamily: 'Gotham-Book',
        fontSize: 18,
        color: whiteColor,
    }
};

export const CHART_STYLES = {
    content: {
        backgroundColor: whiteColor,
    },
    container: {
        paddingBottom: 60
    },
    categoryNameContainer: {
        paddingTop: 20,
        alignItems: "center"
    },
    categoryName: {
        fontSize: 25,
        color: grayColor,
        fontFamily: "Gotham-Book"
    },
    verticalLabelContainer: {
        position: "absolute",
        left: windowWidth * 0.60,
        top: windowHeight * 0.5
    },
    horizontalLabelContainer: {
        position: "absolute",
        top: windowHeight * 0.82,
        left: windowWidth * 0.35,
    },
    verticalLabel: {
        transform: [{rotate: '270deg'}],
        fontSize: 18,
        color: grayColor,
        fontFamily: "Gotham-Book"
    },
    horizontalLabel: {
        fontSize: 18,
        color: grayColor,
        fontFamily: "Gotham-Book"
    },
    crossAxis: {
        axis: {stroke: "#D8DCDF"},
        grid: {stroke: "none"},
        ticks: {stroke: "none"},
        tickLabels: {
            fontSize: 15,
            fontFamily: "Gotham-Medium"
        }
    },
    dependentAxis: {
        axis: {stroke: "#D8DCDF"},
        grid: {
            stroke: "#D8DCDF",
            strokeWidth: 1
        },
        ticks: {stroke: "none"},
        tickLabels: {
            fontSize: 15,
            fontFamily: "Gotham-Medium"
        }
    },
    lineChart: {
        data: {
            stroke: pinkColor,
            strokeWidth: 3,
            strokeLinecap: "round"
        }
    },
    scatterPlot: {
        data: {
            stroke: pinkColor,
            strokeWidth: 2,
            fill: whiteColor
        }
    },
    chartHeight: windowHeight * 0.65,
    chartWidth: windowWidth * 0.95
};