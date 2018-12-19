import {greenColor, whiteColor, pinkColor, lightGrayColor, grayColor} from "../global";
import {getWindowHeight} from "../../utils/get_window_info";
import {getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const HOME_STYLES = {
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: windowHeight * 0.07
    },
    logo: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.4,
        resizeMode: 'contain',
    },
    appNameContainer: {
        marginTop: windowHeight * 0.17,
    },
    appName: {
        fontFamily: 'Gotham-Black',
        color: '#152939',
        fontSize: 50,
        textAlign: 'center',
    },
    optionsContainer: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: windowHeight * 0.07,
    },
    playButton: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.075,
        backgroundColor: greenColor,
        justifyContent: "center",
        borderRadius: 0,
        marginBottom: 8,
        elevation: 0,
    },
    playButtonText: {
        fontFamily: 'Gotham-Bold',
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
    },
    practiceOrTutorialContainer: {
        flexDirection: "row",
        width: windowWidth * 0.9,
    },
    practiceButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        height: windowHeight * 0.075,
        borderRadius: 0,
        marginRight: 4,
        justifyContent: "center",
        elevation: 0,
    },
    practiceButtonText: {
        fontFamily: 'Gotham-Bold',
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
    },
    tutorialButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        height: windowHeight * 0.075,
        borderRadius: 0,
        marginLeft: 4,
        justifyContent: "center",
        elevation: 0,
    },
    tutorialButtonText: {
        fontFamily: 'Gotham-Bold',
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
    },
    statsButton: {
        borderWidth: 2,
        height: windowHeight * 0.075,
        borderColor: grayColor,
        justifyContent: "center",
        zIndex: 2,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "transparent",
        elevation: 0,
        marginTop: 10
    },
    statsButtonText: {
        fontFamily: 'Gotham-Bold',
        color: grayColor,
        fontSize: 16,
        textAlign: 'center',
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: windowHeight * 0.04
    },
    logoFooter: {
        width: windowWidth * 0.20,
        height: windowHeight * 0.08,
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3,
        resizeMode: 'contain',
    },
    home: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: lightGrayColor
    },
};
