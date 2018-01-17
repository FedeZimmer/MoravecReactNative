import {greenColor, whiteColor, pinkColor, lightGrayColor} from "../global";
import {getWindowWidth} from "../../utils";

export const HOME_STYLES = {
    logoContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    logoFooter: {
        color: '#152939',
        fontSize: 70,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    optionsContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    playButton: {
        width: getWindowWidth() * 0.9,
        backgroundColor: greenColor,
        justifyContent: "center",
        borderRadius: 0,
    },
    playButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    practiceOrTutorialContainer: {
        flexDirection: "row",
        width: getWindowWidth() * 0.9,
    },
    practiceButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        borderRadius: 0,
        marginTop: 4,
        marginRight: 2,
        justifyContent: "center",
    },
    practiceButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    tutorialButton: {
        flexGrow: 1,
        backgroundColor: pinkColor,
        borderRadius: 0,
        marginTop: 4,
        marginLeft: 2,
        justifyContent: "center",
    },
    tutorialButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row"
    },
    home: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: lightGrayColor
    },
};
