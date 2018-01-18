import {greenColor, lightGrayColor, whiteColor, darkGrayColor, pinkColor, grayColor} from '../../global';
import {getWindowHeight, getWindowWidth} from "../../../utils";

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
    headerLevelEfficacy: {
        flexDirection: "row",
        justifyContent: 'center',
    },
    levelEfficacyStarFull: {
        fontSize: 35,
        color: pinkColor,
    },
    levelEfficacyStarEmpty: {
        fontSize: 35,
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