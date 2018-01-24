import {greenColor, lightGrayColor, whiteColor, darkGrayColor, pinkColor, superLightGrayColor, grayColor} from '../global';
import {getWindowHeight, getWindowWidth} from "../../utils";

export const LEVEL_FINISHED_STYLES = {
    background: {
        height: getWindowHeight() * 0.5,
        backgroundColor: greenColor,
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        alignSelf:  'center',
        width: getWindowWidth() * 0.9,
        height: getWindowHeight() * 0.6,
        marginTop: getWindowHeight() * 0.15,
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
        width: getWindowWidth() * 0.9,
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
        height: getWindowHeight() * 0.12,
        marginTop: 3,
        marginRight: 1.5,
        justifyContent: 'center'
    },
    replayButtonIcon: {
        color: whiteColor,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        transform: [{scaleX: -1}]
    },
    nextLevelButton: {
        backgroundColor: greenColor,
        flexGrow: 3,
        borderRadius: 0,
        height: getWindowHeight() * 0.12,
        marginTop: 3,
        marginLeft: 1.5,
        justifyContent: 'center'
    },
    nextLevelButtonIcon: {
        color: whiteColor,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    levelFinished: {
        backgroundColor: lightGrayColor,
        height: getWindowHeight(),
    }
};

export const LEVEL_SELECTION_STYLES = {
    list: {
        flex: 1,
        backgroundColor: lightGrayColor,
    },
    listItem: {
        backgroundColor: whiteColor,
        height: getWindowHeight() * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
    },
    playItem: {
        backgroundColor: pinkColor,
        height: getWindowHeight() * 0.1,
        borderBottomWidth: 4,
        borderBottomColor: superLightGrayColor,
    },
    listItemContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        // paddingLeft: 20,
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
        fontSize: 17,
        color: greenColor,
    },
    playText: {
        fontSize: 25,
        color: whiteColor,
    },
};