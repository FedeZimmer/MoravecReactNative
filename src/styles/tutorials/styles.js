import {whiteColor, greenColor, lightGrayColor, grayColor, superLightGrayColor, pinkColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const TUTORIAL_STYLES = {
    tutorial: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: windowWidth * 0.03,
        paddingRight: windowWidth * 0.03,
        paddingBottom: windowHeight * 0.03,
        backgroundColor: lightGrayColor
    },
    titleContainer: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.12,
        justifyContent: "center"
    },
    title: {
        fontSize: 36,
        fontFamily: "GothamBold",
        color: greenColor,
        marginLeft: 20
    },
    division: {
        backgroundColor: greenColor,
        height: windowHeight * 0.008
    },
    exampleContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: whiteColor,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 30
    },
    exampleTitle: {
        fontFamily: 'GothamMedium',
        fontSize: 20,
        color: greenColor
    },
    imageContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    image: {
        resizeMode: 'contain',
        maxWidth: "100%",
        marginTop: 20,
        marginBottom: 20
    },
    explanation: {
        fontFamily: "Gotham-Book",
        fontSize: 15,
        color: grayColor,
        lineHeight: 25,
        textAlign: 'justify'
    },
    boldText: {
        fontSize: 15,
        fontFamily: "GothamBold",
        color: grayColor,
        lineHeight: 25,
    }
};

export const LIST_STYLES = {
    list: {
        backgroundColor: lightGrayColor,
    },
    item: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    tutorialName: {
        fontSize: 25,
        fontFamily: "Gotham-Book",
        color: grayColor
    },
    icon: {
        color: pinkColor,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
};

export const VIDEO_PLAYER_STYLES = {
    spinner: {
        position: "absolute",
        bottom: 120,
        left: windowWidth * 0.45
    },
    videoContainer: {
        flex: 1,
        padding: 0,
        height: 240,
        backgroundColor: "black"
    }
};