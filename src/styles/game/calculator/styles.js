import {darkGrayColor, greenColor, pinkColor, whiteColor} from "../../global";
import {getWindowHeight} from '../../../utils';

export const CALCULATOR_STYLES = {
    calculator: {
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
        height: getWindowHeight() * 0.15,
    },
    operation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    operationText: {
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
