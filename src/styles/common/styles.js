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
    header: {
        backgroundColor: lightGrayColor,
        height: getWindowHeight() * 0.1,
        elevation: 0,
    },
    left: {
        marginLeft: 10,
    },
    title: {
        color: greenColor,
        fontFamily: 'GothamBold',
    },
};

export const BACK_BUTTON_STYLES = {
    icon: {
        color: greenColor,
        fontSize: 30,
    },
};

export const HINT_CARD_STYLES = {
    hint: {
        justifyContent: 'center',
        flexGrow: 0.7
    },
    hintText: {
        color: greenColor,
        textAlign: "center",
        fontFamily: "GothamBook",
        fontSize: 15
    }
};
