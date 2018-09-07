import {lightGrayColor, whiteColor, superLightGrayColor, grayColor, greenColor, pinkColor, darkGrayColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();

export const CATEGORIES_LIST_STYLES = {
    header: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: whiteColor,
        justifyContent: "space-between",
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
        height: 30,
        alignItems: "center"
    },
    leftTextHeader: {
        marginLeft: 10,
        fontSize: 15,
        color: darkGrayColor,
        fontFamily: "GothamMedium"
    },
    centerTextHeader: {
        fontSize: 15,
        color: darkGrayColor,
        fontFamily: "GothamMedium"
    },
    rightTextHeader: {
        marginRight: 20,
        fontSize: 15,
        color: darkGrayColor,
        fontFamily: "GothamMedium"
    },
    list: {
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    availableItem: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 2,
        borderBottomColor: superLightGrayColor,
    },
    unavailableItem: {
        backgroundColor: "#C9CDD6",
        height: windowHeight * 0.1,
        borderBottomWidth: 2,
        borderBottomColor: superLightGrayColor,
    },
    availableItemContainer: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 20,
    },
    unavailableItemContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    availableItemCategoryName: {
        fontFamily: 'GothamLight',
        fontSize: 25,
        color: grayColor,
        textAlign: 'right',
        width: 70
    },
    unavailableItemCategoryName: {
        fontFamily: 'GothamLight',
        fontSize: 25,
        color: whiteColor,
        textAlign: 'right',
        width: 70
    },
    averageTime: {
        fontFamily: 'GothamLight',
        fontSize: 20,
        color: greenColor,
    },
    effectiveness: {
        fontFamily: 'GothamMedium',
        fontSize: 25,
        color: pinkColor,
    },
    playMoreLevelsContainer: {
        paddingRight: 20,
    },
    playMoreLevelsText: {
        fontFamily: 'GothamMedium',
        fontSize: 18,
        color: whiteColor,
    }
};

export const CHART_STYLES = {
    content: {
        backgroundColor: whiteColor,
    },
    container: {
        flex: 4,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        paddingTop: 30,
        paddingBottom: 30
    },
    categoryName: {
        fontSize: 25,
        color: grayColor,
        fontFamily: "GothamLight"
    },
    verticalLabelContainer: {
        position: "absolute",
        left: getWindowWidth() * 0.65,
        top: getWindowHeight() * 0.4
    },
    horizontalLabelContainer: {
        position: "absolute",
        top: getWindowHeight() * 0.75,
        left: getWindowWidth() * 0.4,
    },
    verticalLabel: {
        transform: [{rotate: '270deg'}],
        fontSize: 18,
        color: grayColor,
        fontFamily: "GothamMedium"
    },
    horizontalLabel: {
        fontSize: 18,
        color: grayColor,
        fontFamily: "GothamMedium"
    },
    crossAxis: {
        axis: {stroke: "#D8DCDF"},
        grid: {stroke: "none"},
        ticks: {stroke: "none"},
        tickLabels: {
            fontSize: 15,
            fontFamily: "GothamMedium"
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
            fontFamily: "GothamMedium"
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
    chartHeight: getWindowHeight() * 0.65
};