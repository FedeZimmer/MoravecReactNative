import {greenColor, lightGrayColor, whiteColor, pinkColor} from '../global';
import {getWindowHeight} from "../../utils/get_window_info";

export const LEVEL_EFFICACY_STARS_STYLES = {
    smallStar: {
        fontSize: 30,
    },
    bigStar: {
        fontSize: 35
    },
    fullStarColor: pinkColor,
    emptyStarWhiteColor: whiteColor,
    emptyStarDefaultColor: "#DBDBDD",
    levelEfficacy: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "flex-end"
    },
};

export const HEADER_STYLES = {
    backButton: {
        color: greenColor,
        fontSize: 30
    },
    header: {
        backgroundColor: lightGrayColor,
        height: getWindowHeight() * 0.1,
        elevation: 0,
    },
    title: {
        color: greenColor,
    },
};
