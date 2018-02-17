import {greenColor, lightGrayColor, whiteColor, darkGrayColor, pinkColor, superLightGrayColor, grayColor} from '../global';
import {getWindowHeight, getWindowWidth} from "../../utils";

const windowHeight = getWindowHeight();
const windowWidth = getWindowWidth();

export const LEVEL_FINISHED_STYLES = {
    background: {
        height: windowHeight * 0.5,
        backgroundColor: greenColor,
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        alignSelf:  'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.65,
        marginTop: windowHeight * 0.13,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: whiteColor,
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerCongratulationsText: {
        fontSize: 18,
        color: darkGrayColor,
        textAlign: 'center',
    },
    headerLevelText: {
        fontSize: 35,
        color: darkGrayColor,
        textAlign: 'center',
    },
    options: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    shareButton: {
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
    },
    gameOptionsContainer: {
        flexDirection: 'row',
    },
    replayButton: {
        backgroundColor: "#CBCFD8",
        flexGrow: 1,
        borderRadius: 0,
        height: windowHeight * 0.14,
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
        height: windowHeight * 0.14,
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
    },
    mainPageButton: {
        marginTop: windowHeight * 0.3,
    },
    mainPageButtonText: {
        fontFamily: 'GothamBold',
        fontSize: 15,
        textAlign: 'center',
        color: grayColor
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    logo: {
        alignSelf: "flex-end",
        width: windowWidth * 0.25,
        height: windowHeight * 0.2,
        resizeMode: 'contain',
    },
    levelFinished: {
        backgroundColor: lightGrayColor,
        height: windowHeight,
    }
};

export const LEVEL_SELECTION_STYLES = {
    list: {
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    listItem: {
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
    levelNumber: {
        fontSize: 23,
        color: grayColor,
        textAlign: 'right',
        fontWeight: 'bold',
        width: 50,
    },
    playItemLevelNumber: {
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