import {lightGrayColor, whiteColor, superLightGrayColor, greenColor, grayColor} from "../global";
import {getWindowHeight} from "../../utils/get_window_info";
import {getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const PRACTICE_MODE_SELECTION_STYLES = {
    container: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: lightGrayColor,
        borderStyle: 'solid',
        borderLeftWidth: 3,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 3,
        borderRightColor: superLightGrayColor,
    },
    row: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    option: {
        height: windowHeight * 0.15,
        width: windowWidth * 0.33,
        backgroundColor: whiteColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderTopColor: superLightGrayColor,
        borderBottomWidth: 2,
        borderBottomColor: superLightGrayColor,
        borderLeftWidth: 2,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 2,
        borderRightColor: superLightGrayColor,
    },
    operationCategoryName: {
        fontSize: 25,
        fontFamily: 'GothamMedium',
        color: grayColor,
        letterSpacing: 2,
    },
    difficult: {
        color: greenColor,
    }
};