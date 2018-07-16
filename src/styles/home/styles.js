import {greenColor, whiteColor, pinkColor, lightGrayColor, grayColor} from "../global";
import {getWindowHeight} from "../../utils/get_window_info";
import {getWindowWidth} from "../../utils/get_window_info";

export const HOME_STYLES = {
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: getWindowHeight() * 0.1,
    },
    logo: {
        width: getWindowWidth() * 0.8,
        height: getWindowHeight() * 0.4,
        resizeMode: 'contain',
    },
    appNameContainer: {
        marginTop: getWindowHeight() * 0.3,
    },
    appName: {
        fontFamily: 'GothamBook',
        color: '#152939',
        fontSize: 50,
        textAlign: 'center',
    },
    optionsContainer: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: getWindowHeight() * 0.1,
    },
    playButton: {
        width: getWindowWidth() * 0.9,
        backgroundColor: greenColor,
        justifyContent: "center",
        borderRadius: 0,
        marginBottom: 8,
    },
    playButtonText: {
        fontFamily: 'GothamBold',
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
    },
    practiceOrTutorialContainer: {
        flexDirection: "row",
        width: getWindowWidth() * 0.9,
    },
    practiceButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        borderRadius: 0,
        marginRight: 4,
        justifyContent: "center",
    },
    practiceButtonText: {
        fontFamily: 'GothamBold',
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
    },
    tutorialButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        borderRadius: 0,
        marginLeft: 4,
        justifyContent: "center",
    },
    tutorialButtonText: {
        fontFamily: 'GothamBold',
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
    },
    statsButtonText: {
        fontFamily: 'GothamBold',
        fontSize: 15,
        textAlign: 'center',
        color: grayColor
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: getWindowHeight() * 0.15,
    },
    logoFooter: {
        width: getWindowWidth() * 0.5,
        height: getWindowHeight() * 0.2,
        resizeMode: 'contain'
    },
    home: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: lightGrayColor
    },
};
