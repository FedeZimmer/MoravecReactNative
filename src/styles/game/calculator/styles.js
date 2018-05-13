import {darkGrayColor, greenColor, pinkColor, superLightGrayColor, whiteColor} from "../../global";
import {getWindowHeight} from '../../../utils/get_window_info';

export const GAME_STYLES = {
    game: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
};

export const COUNTDOWN_STYLES = {
    countdown: {
        backgroundColor: pinkColor,
        height: 6,
    },
};

export const OPERATION_STYLES = {
    operationContainer: {
        backgroundColor: whiteColor,
        height: getWindowHeight() * 0.25,
        borderBottomWidth: 1,
        borderBottomColor: superLightGrayColor,
    },
    operation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
    },
    operationText: {
        fontFamily: 'GothamBook',
        color: darkGrayColor,
    },
};

export const FEEDBACK_STYLES = {
    feedbackIncorrectContainer: {
        position: 'absolute',
        height: getWindowHeight() * 0.15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: pinkColor,
    },
    feedbackIncorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
    },
    feedbackCorrectContainer: {
        position: 'absolute',
        height: getWindowHeight() * 0.15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: greenColor,
    },
    feedbackCorrectText: {
        color: whiteColor,
        fontSize: 20,
        textAlign: 'center',
    },
};
