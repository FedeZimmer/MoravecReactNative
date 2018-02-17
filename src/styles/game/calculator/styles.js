import {darkGrayColor, greenColor, pinkColor, whiteColor, superLightGrayColor} from "../../global";
import {getWindowHeight} from '../../../utils';

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
        justifyContent: 'center',
        alignItems: 'center'
    },
    operationText: {
        fontFamily: 'GothamBook',
        textAlign: 'center',
        color: darkGrayColor,
        fontSize: 40,
    },
};

export const FEEDBACK_STYLES = {
    feedbackIncorrectContainer: {
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
