import {
    advancedLevelColor,
    grayColor,
    greenColor,
    intermediateLevelColor,
    lightGrayColor,
    superLightGrayColor,
    whiteColor
} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const PRACTICE_MODE_SELECTION_STYLES = {
    content: {
        height: getWindowHeight() * 0.85,
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: lightGrayColor,
        borderStyle: 'solid',
        borderLeftWidth: 3,
        borderLeftColor: superLightGrayColor,
        borderRightWidth: 3,
        borderRightColor: superLightGrayColor,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    option: {
        height: windowHeight * 0.15,
        width: windowWidth * 0.33,
        paddingTop: 4,
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
    difficultyInitial: {
        color: greenColor,
        fontFamily: 'GothamBook',
    },
    difficultyIntermediate: {
        color: intermediateLevelColor,
        fontFamily: 'GothamBook',
    },
    difficultyAdvanced: {
        color: advancedLevelColor,
        fontFamily: 'GothamBook',
    },
};