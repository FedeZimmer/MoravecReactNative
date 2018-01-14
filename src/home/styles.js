import {greenColor, whiteColor, pinkColor} from "../static/styles";
import {getWindowWidth} from "../utils";

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
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    playContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    playButton: {
        width: getWindowWidth() * 0.9,
        backgroundColor: greenColor,
        justifyContent: "center",
    },
    playButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    practiceOrTutorialContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    practiceButton: {
        width: getWindowWidth() * 0.4,
        backgroundColor: pinkColor,
        justifyContent: "center",
    },
    practiceButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    tutorialButton: {
        width: getWindowWidth() * 0.4,
        backgroundColor: pinkColor,
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
    },
};
