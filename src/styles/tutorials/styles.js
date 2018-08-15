import {whiteColor, greenColor, lightGrayColor, grayColor, superLightGrayColor, pinkColor} from "../global";
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const TUTORIAL_STYLES = {
    tutorial: {
        flex: 5,
        flexDirection: "column",
        paddingLeft: windowHeight * 0.03,
        paddingRight: windowHeight * 0.03,
        paddingBottom: windowHeight * 0.03,
        backgroundColor: lightGrayColor
    },
    tutorialFullScreen: {
        flex: 5,
        flexDirection: "column",
        padding: 0,
        backgroundColor: lightGrayColor
    },
    titleContainer: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.12,
        justifyContent: "center"
    },
    title: {
        fontSize: 40,
        fontFamily: "GothamBold",
        color: greenColor,
        marginLeft: 30
    },
    division: {
        backgroundColor: greenColor,
        height: windowHeight * 0.008
    },
    exampleContainer: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: whiteColor,
        marginTop: 10,
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
    image: {
        resizeMode: 'contain',
        width: windowWidth,
        marginTop: 20,
        marginBottom: 20
    },
    explanation: {
        fontFamily: "GothamMedium",
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
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    item: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    tutorialName: {
        fontSize: 25,
        fontFamily: "GothamMedium",
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
    videoLoading: {
        display: "none"
    },
    video: {
        height: 300
    },
    fullScreenVideo: {
        height: windowHeight * 0.92,
        width: windowWidth * 0.92,
        zIndex: 2,
        alignSelf: "center"
    },
    videoContainer: {
        flex: 1
    },
    videoContainerFullScreen: {
        ios: {
            flex: 1,
            position: "absolute",
            top: 0,
            zIndex: 2,
            height: windowHeight,
            width: windowWidth,
            justifyContent: "center",
        },
        android: {
            flex: 1,
            position: "absolute",
            top: 0,
            height: windowHeight,
            width: windowWidth,
            justifyContent: "center",
        }
    },
    overlay: {
        flex: 1,
        opacity: 0.6,
        backgroundColor: 'black',
        zIndex: 1,
        position: "absolute",
        height: windowHeight,
        width: windowWidth,
        top: 0
    },
    controlsContainer: {
        position: "absolute",
        bottom: 10,
        flex: 2,
        flexDirection: "row",
        zIndex: 2,
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 30
    },
    controlsContainerFullScreen: {
        position: "absolute",
        bottom: 35,
        flex: 2,
        flexDirection: "row",
        zIndex: 2,
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: 40,
        paddingRight: 40
    },
    button: {
        ios: {
            color: whiteColor,
            fontSize: 40,
            textAlign: 'center',
            backgroundColor: "transparent"
        },
        android: {
            color: whiteColor,
            fontSize: 40,
            textAlign: 'center',
        }
    },
    playPauseButton: {
        margin: 0,
    },
    screenSizeButton: {
        margin: 0
    }
};