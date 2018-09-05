import {
    darkGrayColor,
    grayColor,
    greenColor,
    lightGrayColor,
    pinkColor,
    superLightGrayColor,
    whiteColor
} from '../global';
import {getWindowHeight, getWindowWidth} from "../../utils/get_window_info";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const LEVEL_FINISHED_STYLES = {
    background: {
        height: windowHeight * 0.5,
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.65,
        marginTop: windowHeight * 0.13,
        paddingTop: windowHeight * 0.06,
        paddingBottom: windowHeight * 0.07,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: whiteColor,
    },
    header: {
        container: {
            flex: 4,
            flexDirection: 'column',
            alignItems: 'center'
        },
        message: {
            fontSize: 18,
            fontFamily: "GothamMedium",
            color: darkGrayColor,
            textAlign: 'center',
        },
        levelNumber: {
            fontSize: 40,
            color: darkGrayColor,
            fontFamily: "GothamLight",
            textAlign: 'center',
            marginTop: windowHeight * 0.08
        },
        results: {
            fontSize: 18,
            color: grayColor,
            fontFamily: "GothamMedium",
            textAlign: 'center',
            marginTop: windowHeight * 0.04,
        },
        tryAgain: {
            fontSize: 40,
            color: darkGrayColor,
            fontFamily: "GothamLight",
            textAlign: 'center',
            marginTop: windowHeight * 0.08,
            width: windowWidth * 0.5
        }
    },
    options: {
        flex: 1,
        flexDirection: 'row'
    },
    /*shareButton: {
        backgroundColor: pinkColor,
        width: windowWidth * 0.9,
        borderRadius: 0,
        justifyContent: 'center'
    },
    shareButtonText: {
        color: whiteColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },*/
    replayButton: {
        backgroundColor: "#CBCFD8",
        flexGrow: 1,
        borderRadius: 0,
        height: windowHeight * 0.17,
        marginTop: 3,
        marginRight: 1.5,
        justifyContent: 'center'
    },
    replayButtonHighlighted: {
        backgroundColor: greenColor,
        flexGrow: 1,
        borderRadius: 0,
        height: windowHeight * 0.17,
        marginTop: 3,
        marginRight: 1.5,
        justifyContent: 'center'
    },
    replayButtonIcon: {
        color: whiteColor,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        transform: [{scaleX: -1}]
    },
    nextLevelButton: {
        backgroundColor: greenColor,
        flexGrow: 4,
        borderRadius: 0,
        height: windowHeight * 0.17,
        marginTop: 3,
        marginLeft: 1.5,
        justifyContent: 'center'
    },
    nextLevelButtonIcon: {
        color: whiteColor,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mainPageButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: windowHeight * 0.30,
    },
    mainPageButton: {
        borderWidth: 2,
        borderColor: grayColor,
        justifyContent: "center",
        zIndex: 2,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "transparent",
        elevation: 0,
    },
    mainPageButtonText: {
        fontFamily: 'GothamBold',
        color: grayColor,
        fontSize: 15,
        textAlign: 'center',
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    logo: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.2,
        resizeMode: 'contain',
    },
    levelFinished: {
        backgroundColor: lightGrayColor,
        height: windowHeight,
        paddingBottom: windowHeight * 0.12,
    }
};

export const LEVEL_SELECTION_STYLES = {
    list: {
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    alreadyPlayedItem: {
        backgroundColor: whiteColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
    },
    playItem: {
        backgroundColor: pinkColor,
        height: windowHeight * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
    },
    listItemContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 20,
    },
    alreadyPlayedLevelNumber: {
        fontSize: 23,
        color: grayColor,
        textAlign: 'right',
        fontWeight: 'bold',
        width: 50,
    },
    levelNumber: {
        fontSize: 23,
        color: whiteColor,
        textAlign: 'right',
        fontWeight: 'bold',
        width: 50,
    },
    levelResultContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 60
    },
    levelTime: {
        fontFamily: 'GothamMedium',
        fontSize: 17,
        color: greenColor,
    },
    playText: {
        fontFamily: 'GothamMedium',
        fontSize: 23,
        color: whiteColor,
    },
};